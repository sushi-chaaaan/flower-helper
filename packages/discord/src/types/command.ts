import type {
  APIChatInputApplicationCommandInteraction,
  APIInteractionResponse,
  APIMessageApplicationCommandInteraction,
  APIUserApplicationCommandInteraction,
  RESTPostAPIApplicationCommandsJSONBody
} from "discord-api-types/v10";
import type { MaybePromise } from "../utils/types/promise";

const COMMAND_TYPE = ["ChatInput", "User", "Message"] as const;
export type CommandType = (typeof COMMAND_TYPE)[number];

type ApplicationCommandBase = {
  payload: RESTPostAPIApplicationCommandsJSONBody;
};

type ChatInputApplicationCommand = ApplicationCommandBase & {
  handler: (interaction: APIChatInputApplicationCommandInteraction) => MaybePromise<APIInteractionResponse>;
};

type MessageApplicationCommand = ApplicationCommandBase & {
  handler: (interaction: APIMessageApplicationCommandInteraction) => MaybePromise<APIInteractionResponse>;
};

type UserApplicationCommand = ApplicationCommandBase & {
  handler: (interaction: APIUserApplicationCommandInteraction) => MaybePromise<APIInteractionResponse>;
};

type ApplicationCommand = ChatInputApplicationCommand | MessageApplicationCommand | UserApplicationCommand;

export type { ApplicationCommand, ChatInputApplicationCommand, MessageApplicationCommand, UserApplicationCommand };
