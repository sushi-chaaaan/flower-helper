import type { ContextMenuCommandBuilder, SlashCommandBuilder } from "@discordjs/builders";
import type {
  APIChatInputApplicationCommandInteraction,
  APIInteractionResponse,
  APIMessageApplicationCommandInteraction,
  APIUserApplicationCommandInteraction,
  RESTPutAPIApplicationCommandsJSONBody
} from "discord-api-types/v10";
import type { MessageContextMenuCommandBuilderArgs, SlashCommandBuilderArgs, UserContextMenuCommandBuilderArgs } from "../builder/command";
import type {} from "../helper/interaction/types";
import type { CommandType } from "../types/command";
import type { MaybePromise } from "../utils/types/promise";

export type ApplicationCommandRegisterObject = {
  global: RESTPutAPIApplicationCommandsJSONBody;
};

export interface IDiscordCommand {
  command(
    type: "ChatInput",
    params: SlashCommandBuilderArgs,
    body: (builder: SlashCommandBuilder) => SlashCommandBuilder,
    handler: (interaction: APIChatInputApplicationCommandInteraction) => MaybePromise<APIInteractionResponse>
  ): this;

  command(
    type: "ChatInput",
    params: SlashCommandBuilderArgs,
    handler: (interaction: APIChatInputApplicationCommandInteraction) => MaybePromise<APIInteractionResponse>
  ): this;

  command(
    type: "Message",
    params: MessageContextMenuCommandBuilderArgs,
    body: (builder: ContextMenuCommandBuilder) => ContextMenuCommandBuilder,
    handler: (interaction: APIMessageApplicationCommandInteraction) => MaybePromise<APIInteractionResponse>
  ): this;

  command(
    type: "Message",
    params: MessageContextMenuCommandBuilderArgs,
    handler: (interaction: APIMessageApplicationCommandInteraction) => MaybePromise<APIInteractionResponse>
  ): this;

  command(
    type: "User",
    params: UserContextMenuCommandBuilderArgs,
    body: (builder: ContextMenuCommandBuilder) => ContextMenuCommandBuilder,
    handler: (interaction: APIUserApplicationCommandInteraction) => MaybePromise<APIInteractionResponse>
  ): this;

  command(
    type: "User",
    params: UserContextMenuCommandBuilderArgs,
    handler: (interaction: APIUserApplicationCommandInteraction) => MaybePromise<APIInteractionResponse>
  ): this;

  command(
    type: CommandType,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    params: any,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    bodyOrHandler: (builder: any) => any,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    handler?: (interaction: any) => Awaited<any>
  ): this;

  getRegisterObject(): ApplicationCommandRegisterObject;

  clear(): void;
}
