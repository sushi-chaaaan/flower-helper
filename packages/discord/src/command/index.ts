import type { ContextMenuCommandBuilder, SlashCommandBuilder } from "@discordjs/builders";
import { isChatInputApplicationCommandInteraction } from "discord-api-types/utils/v10";
import type {
  APIApplicationCommandInteraction,
  APIChatInputApplicationCommandInteraction,
  APIInteractionResponse,
  APIMessageApplicationCommandInteraction,
  APIUserApplicationCommandInteraction
} from "discord-api-types/v10";
import { getMessageContextMenuCommandBuilder, getSlashCommandBuilder, getUserContextMenuCommandBuilder } from "../builder/command";
import { isMessageApplicationCommandInteraction, isUserApplicationCommandInteraction } from "../helper/interaction/guard";
import type {} from "../helper/interaction/types";
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
    handler: (interaction: any) => MaybePromise<any>
  ): this {
    switch (type) {
      case "ChatInput": {
        const payload = body(getSlashCommandBuilder()).toJSON();
        this.chatInputCommandMap.set(name, {
          payload,
          handler
        });
        return this;
      }
      case "Message": {
        const payload = body(getMessageContextMenuCommandBuilder()).toJSON();
        this.messageCommandMap.set(name, {
          payload,
          handler
        });
        return this;
      }
      case "User": {
        const payload = body(getUserContextMenuCommandBuilder()).toJSON();
        this.userCommandMap.set(name, {
          payload,
          handler
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

  /**
   * Discordにコマンドを登録するためのPayloadを取得する。
   */
  getRegisterObject(): ApplicationCommandRegisterObject {
    const chatInputCommands = [...this.chatInputCommandMap.values()].map(({ payload }) => payload);
    const messageCommands = [...this.messageCommandMap.values()].map(({ payload }) => payload);
    const userCommands = [...this.userCommandMap.values()].map(({ payload }) => payload);

    return { global: [...chatInputCommands, ...messageCommands, ...userCommands] };
  }

  /**
   * 登録されたコマンドを全て削除する。テストで使うと便利。
   *
   * @example
   * ```typescript
   * import { describe, beforeEach } from "vitest";
   *
   * describe("DiscordCommand", () => {
   *  const discord = new DiscordCommand();
   *
   *  beforeEach(() => {
   *   discord.clear();
   *  });
   *
   *  // test cases
   * })
   */
  clear(): void {
    this.chatInputCommandMap.clear();
    this.messageCommandMap.clear();
    this.userCommandMap.clear();
  }
}

export { DiscordCommand };
