import type { ContextMenuCommandBuilder, SlashCommandBuilder } from "@discordjs/builders";
import type {
  APIChatInputApplicationCommandInteraction,
  APIInteractionResponse,
  APIMessageApplicationCommandInteraction,
  APIUserApplicationCommandInteraction,
  RESTPutAPIApplicationCommandsJSONBody
} from "discord-api-types/v10";
import type {} from "../helper/interaction/types";
import type { CommandType } from "../types/command";
import type { MaybePromise } from "../utils/types/promise";

export type ApplicationCommandRegisterObject = {
  global: RESTPutAPIApplicationCommandsJSONBody;
};

export interface IDiscordCommand {
  command(
    type: "ChatInput",
    name: string,
    body: (builder: SlashCommandBuilder) => SlashCommandBuilder,
    handler: (interaction: APIChatInputApplicationCommandInteraction) => MaybePromise<APIInteractionResponse>
  ): this;

  command(
    type: "Message",
    name: string,
    body: (builder: ContextMenuCommandBuilder) => ContextMenuCommandBuilder,
    handler: (interaction: APIMessageApplicationCommandInteraction) => MaybePromise<APIInteractionResponse>
  ): this;

  command(
    type: "User",
    name: string,
    body: (builder: ContextMenuCommandBuilder) => ContextMenuCommandBuilder,
    handler: (interaction: APIUserApplicationCommandInteraction) => MaybePromise<APIInteractionResponse>
  ): this;

  command(
    type: CommandType,
    name: string,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    body: (builder: any) => any,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    handler: (interaction: any) => Awaited<any>
  ): this;

  getRegisterObject(): ApplicationCommandRegisterObject;

  clear(): void;
}
