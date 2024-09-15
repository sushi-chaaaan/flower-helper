import type { RESTPutAPIApplicationCommandsJSONBody } from "discord-api-types/v10";
import { Result, err, fromPromise, ok } from "neverthrow";
import { COMMANDS } from "../src/discord/commands";
import { validateRESTPutAPIApplicationCommandsJSONBody } from "../src/typia/generated/discord/RESTPutAPIApplicationCommandsJSONBody";

const getRegisterEndpoint = (applicationId: string) => `https://discord.com/api/v10/applications/${applicationId}/commands`;

type RegisterCommandInput = {
  applicationId: string;
  commands: RESTPutAPIApplicationCommandsJSONBody;
  token: string;
};

const validateToken = () => {
  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  const token = process.env["DISCORD_PUBLIC_KEY"];
  if (token == null || token === "") return err("DISCORD_PUBLIC_KEY is not set.");
  return ok(token);
};

const validateCommands = (input: unknown) => {
  const res = validateRESTPutAPIApplicationCommandsJSONBody(input);
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
  Result.combineWithAllErrors([validateToken(), validateCommands(COMMANDS)])
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
