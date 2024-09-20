import type {
  ContextMenuCommandBuilder,
  SlashCommandBuilder,
  SlashCommandOptionsOnlyBuilder,
  SlashCommandSubcommandBuilder,
  SlashCommandSubcommandGroupBuilder,
  SlashCommandSubcommandsOnlyBuilder
} from "@discordjs/builders";
import { isChatInputApplicationCommandInteraction } from "discord-api-types/utils/v10";
import {
  type APIApplicationCommandAutocompleteInteraction,
  type APIApplicationCommandAutocompleteResponse,
  type APIApplicationCommandInteraction,
  type APIChatInputApplicationCommandInteraction,
  type APIInteractionResponse,
  type APIMessageApplicationCommandInteraction,
  type APIUserApplicationCommandInteraction,
  InteractionResponseType
} from "discord-api-types/v10";
import {
  type MessageContextMenuCommandBuilderArgs,
  type SlashCommandBuilderArgs,
  type UserContextMenuCommandBuilderArgs,
  getMessageContextMenuCommandBuilder,
  getSlashCommandBuilder,
  getUserContextMenuCommandBuilder
} from "../builder/command";
import { isMessageApplicationCommandInteraction, isUserApplicationCommandInteraction } from "../helper/interaction/guard";
import type { ChatInputApplicationCommand, CommandType, MessageApplicationCommand, UserApplicationCommand } from "../types/command";
import type { MaybePromise } from "../utils/types/promise";
import type { ApplicationCommandRegisterObject, IDiscordCommand } from "./interface";

class DiscordCommand implements IDiscordCommand {
  protected readonly chatInputCommandMap: Map<string, ChatInputApplicationCommand>;
  protected readonly messageCommandMap: Map<string, MessageApplicationCommand>;
  protected readonly userCommandMap: Map<string, UserApplicationCommand>;

  constructor() {
    this.chatInputCommandMap = new Map();
    this.messageCommandMap = new Map();
    this.userCommandMap = new Map();
  }

  command(
    type: "ChatInput",
    params: SlashCommandBuilderArgs,
    body: (
      builder: SlashCommandBuilder
    ) =>
      | SlashCommandBuilder
      | SlashCommandOptionsOnlyBuilder
      | SlashCommandSubcommandBuilder
      | SlashCommandSubcommandGroupBuilder
      | SlashCommandSubcommandsOnlyBuilder,
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
  ): this {
    switch (type) {
      case "ChatInput": {
        const builder = getSlashCommandBuilder(params);
        const payload = handler ? bodyOrHandler(builder).toJSON() : builder.toJSON();
        this.chatInputCommandMap.set(params.name, {
          payload,
          handler: handler ?? bodyOrHandler
        });
        return this;
      }
      case "Message": {
        const builder = getMessageContextMenuCommandBuilder(params);
        const payload = handler ? bodyOrHandler(builder).toJSON() : builder.toJSON();
        this.messageCommandMap.set(params.name, {
          payload,
          handler: handler ?? bodyOrHandler
        });
        return this;
      }
      case "User": {
        const builder = getUserContextMenuCommandBuilder(params);
        const payload = handler ? bodyOrHandler(builder).toJSON() : builder.toJSON();
        this.userCommandMap.set(params.name, {
          payload,
          handler: handler ?? bodyOrHandler
        });
        return this;
      }
      default: {
        return type satisfies never;
      }
    }
  }

  protected async handleApplicationCommand(interaction: APIApplicationCommandInteraction): Promise<APIInteractionResponse> {
    if (isChatInputApplicationCommandInteraction(interaction)) {
      const handler = this.chatInputCommandMap.get(interaction.data.name)?.handler ?? (() => ({ type: 1 }));
      return await handler(interaction);
    }

    if (isMessageApplicationCommandInteraction(interaction)) {
      const handler = this.messageCommandMap.get(interaction.data.name)?.handler ?? (() => ({ type: 1 }));
      return await handler(interaction);
    }

    if (isUserApplicationCommandInteraction(interaction)) {
      const handler = this.userCommandMap.get(interaction.data.name)?.handler ?? (() => ({ type: 1 }));
      return await handler(interaction);
    }

    return interaction satisfies never;
  }

  protected async handleApplicationCommandAutocomplete(
    interaction: APIApplicationCommandAutocompleteInteraction
  ): Promise<APIApplicationCommandAutocompleteResponse> {
    return {
      type: InteractionResponseType.ApplicationCommandAutocompleteResult,
      data: {
        choices: []
      }
    };
  }

  /**
   * Discordにコマンドを登録するためのPayloadを取得する。
   */
  getRegisterObject(): ApplicationCommandRegisterObject {
    const chatInputCommands = [...this.chatInputCommandMap.values()].map(({ payload }) => payload);
    const messageCommands = [...this.messageCommandMap.values()].map(({ payload }) => payload);
    const userCommands = [...this.userCommandMap.values()].map(({ payload }) => payload);

    return { global: [...chatInputCommands, ...messageCommands, ...userCommands] };
  }
}

export { DiscordCommand };
