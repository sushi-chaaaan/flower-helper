import type {
  APIChatInputApplicationCommandInteraction,
  APIInteractionResponse,
  APIMessageApplicationCommandInteraction,
  APIUserApplicationCommandInteraction,
  RESTPostAPIApplicationCommandsJSONBody
} from "discord-api-types/v10";

type ApplicationCommandBase = {
  payload: RESTPostAPIApplicationCommandsJSONBody;
};

type ChatInputApplicationCommand = ApplicationCommandBase & {
  handler: (interaction: APIChatInputApplicationCommandInteraction) => APIInteractionResponse | Promise<APIInteractionResponse>;
  kind: "ChatInput";
};

type MessageApplicationCommand = ApplicationCommandBase & {
  handler: (interaction: APIMessageApplicationCommandInteraction) => APIInteractionResponse | Promise<APIInteractionResponse>;
  kind: "Message";
};

type UserApplicationCommand = ApplicationCommandBase & {
  handler: (interaction: APIUserApplicationCommandInteraction) => APIInteractionResponse | Promise<APIInteractionResponse>;
  kind: "User";
};

type PrimaryEntryPointApplicationCommand = ApplicationCommandBase & {
  // TODO: Implement handler type
  handler: null;
  kind: "PrimaryEntryPoint";
};

type ApplicationCommand = ChatInputApplicationCommand | MessageApplicationCommand | UserApplicationCommand | PrimaryEntryPointApplicationCommand;

export type {
  ApplicationCommand,
  ChatInputApplicationCommand,
  MessageApplicationCommand,
  UserApplicationCommand,
  PrimaryEntryPointApplicationCommand
};
