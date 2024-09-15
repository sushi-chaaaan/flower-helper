import type { ApplicationCommandType } from "discord-api-types/v10";
import type {
  ApplicationCommand,
  ChatInputApplicationCommand,
  MessageApplicationCommand,
  PrimaryEntryPointApplicationCommand,
  UserApplicationCommand
} from "../types/command";
import { pingCommand } from "./ping";

export type CommandType = keyof typeof ApplicationCommandType;

export type Commands = {
  ChatInput: Record<string, ChatInputApplicationCommand>;
  Message: Record<string, MessageApplicationCommand>;
  User: Record<string, UserApplicationCommand>;
  PrimaryEntryPoint: Record<string, PrimaryEntryPointApplicationCommand>;
};

export const REGISTERED_COMMANDS = {
  ChatInput: {
    ping: pingCommand
  },
  Message: {},
  User: {},
  PrimaryEntryPoint: {}
} as const satisfies Commands satisfies Record<CommandType, Record<string, ApplicationCommand>>;
