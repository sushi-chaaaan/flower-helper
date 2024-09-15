import type { ApplicationCommandType, RESTPutAPIApplicationCommandsJSONBody } from "discord-api-types/v10";
import type {
  ApplicationCommand,
  ChatInputApplicationCommand,
  MessageApplicationCommand,
  PrimaryEntryPointApplicationCommand,
  UserApplicationCommand
} from "./types/command";

type CommandType = keyof typeof ApplicationCommandType;

type Commands = {
  ChatInput: Record<string, ChatInputApplicationCommand>;
  Message: Record<string, MessageApplicationCommand>;
  User: Record<string, UserApplicationCommand>;
  PrimaryEntryPoint: Record<string, PrimaryEntryPointApplicationCommand>;
};

const REGISTERED_COMMANDS = {
  ChatInput: {},
  Message: {},
  User: {},
  PrimaryEntryPoint: {}
} as const satisfies Commands satisfies Record<CommandType, Record<string, ApplicationCommand>>;

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
