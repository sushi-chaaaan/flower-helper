import type { RESTPutAPIApplicationCommandsJSONBody } from "discord-api-types/v10";
import { type CommandType, type Commands, REGISTERED_COMMANDS } from "../command";
import type { ApplicationCommand } from "../types/command";

const collectCommandObjects = (commands: Commands): ApplicationCommand[] => {
  return Object.values(commands).flatMap((cmdRecord) => Object.values<ApplicationCommand>(cmdRecord));
};

const collectCommandPayloads = (commands: Commands): RESTPutAPIApplicationCommandsJSONBody => {
  return collectCommandObjects(commands).map((cmd) => cmd.payload);
};

export const collectAllCommandPayloads = () => collectCommandPayloads(REGISTERED_COMMANDS);

function findHandler<TYPE extends CommandType, NAME extends string>(
  commands: Commands,
  type: TYPE,
  name: NAME
): Commands[TYPE][NAME]["handler"] | null | undefined {
  return commands[type][name]?.handler;
}

export function findRegisteredCommandHandler<TYPE extends CommandType, NAME extends string>(type: TYPE, name: NAME) {
  return findHandler(REGISTERED_COMMANDS, type, name);
}
