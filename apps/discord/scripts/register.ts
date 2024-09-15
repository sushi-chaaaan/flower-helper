import type { RESTPutAPIApplicationCommandsJSONBody } from "discord-api-types/v10";
import { Result, err, fromPromise, ok } from "neverthrow";
import { collectAllCommandPayloads } from "../src/discord/helper/command";
import { validateRESTPutAPIApplicationCommandsJSONBody } from "../src/typia/generated/discord/RESTPutAPIApplicationCommandsJSONBody";

const getRegisterEndpoint = (applicationId: string) => `https://discord.com/api/v10/applications/${applicationId}/commands`;

type RegisterCommandInput = {
  applicationId: string;
  commands: RESTPutAPIApplicationCommandsJSONBody;
  token: string;
};

const validateToken = () => {
  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  const token = process.env["DISCORD_BOT_TOKEN"];
  if (token == null || token === "") return err("DISCORD_BOT_TOKEN is not set.");
  return ok(token);
};

const validateCommandPayloads = (payloads: unknown[]) => {
  const res = validateRESTPutAPIApplicationCommandsJSONBody(payloads);
  if (res.success) return ok(res.data);
  return err(res.errors);
};

const registerCommands = (input: RegisterCommandInput) =>
  fromPromise(
    fetch(getRegisterEndpoint(input.applicationId), {
      body: JSON.stringify(input.commands),
      headers: {
        Authorization: `Bot ${input.token}`,
        "Content-Type": "application/json"
      },
      method: "PUT"
    }),
    (e) => new Error(`Failed to register commands: ${e}`)
  );

const main = () => {
  const commandPayloads = collectAllCommandPayloads();

  Result.combineWithAllErrors([validateToken(), validateCommandPayloads(commandPayloads)])
    .mapErr((e) => {
      console.error(e.join("\n"));
      process.exit(1);
    })
    .asyncAndThen(([token, commands]) => registerCommands({ applicationId: "1282357830200070225", commands, token }))
    .match(
      () => console.log("Commands registered successfully."),
      (e) => console.error(e)
    );
};

void main();
