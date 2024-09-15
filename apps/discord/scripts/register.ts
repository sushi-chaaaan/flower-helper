import type { RESTPutAPIApplicationCommandsJSONBody } from "discord-api-types/v10";
import { fromPromise } from "neverthrow";
import { COMMANDS } from "../src/discord/commands";

const getRegisterEndpoint = (applicationId: string) => `https://discord.com/api/v10/applications/${applicationId}/commands`;

type RegisterCommandInput = {
  applicationId: string;
  commands: RESTPutAPIApplicationCommandsJSONBody;
  token: string;
};

const registerCommands = (input: RegisterCommandInput) => {
  return fromPromise(
    fetch(getRegisterEndpoint(input.applicationId), {
      body: JSON.stringify(input.commands),
      headers: {
        Authorization: `Bot ${input.token}`,
        "Content-Type": "application/json"
      },
      method: "PUT"
    }),
    (e) => e
  );
};

const main = async () => {
  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  const token = process.env["DISCORD_PUBLIC_KEY"];
  if (!token) {
    console.error("DISCORD_PUBLIC_KEY is not set.");
    process.exit(1);
  }

  await registerCommands({
    applicationId: "1282357830200070225",
    commands: COMMANDS.map((c) => c.payload),
    token: token
  }).mapErr((e) => console.error(e));
};

void main();
