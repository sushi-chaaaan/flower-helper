import { ApplicationCommandType, InteractionContextType } from "discord-api-types/v10";
import { afterEach, describe, expect, it, vi } from "vitest";
import * as commandBuilder from "../builder/command";
import * as DiscordCommand from "./index";
import type { ApplicationCommandRegisterObject } from "./interface";

describe("DiscordCommand", () => {
  const discord = new DiscordCommand.DiscordCommand();
  const slashBuilderSpy = vi.spyOn(commandBuilder, "getSlashCommandBuilder");
  const userBuilderSpy = vi.spyOn(commandBuilder, "getUserContextMenuCommandBuilder");
  const messageBuilderSpy = vi.spyOn(commandBuilder, "getMessageContextMenuCommandBuilder");

  afterEach(() => {
    slashBuilderSpy.mockClear();
    userBuilderSpy.mockClear();
    messageBuilderSpy.mockClear();
    discord.clear();
  });

  describe("コマンド登録", () => {
    it("ChatInputApplicationCommand を登録できる", () => {
      const handler = vi.fn();

      discord.command("ChatInput", { name: "test", description: "I AM DESCRIPTION" }, (b) => b.setNSFW(true), handler);

      // ChatInputコマンドPayloadの生成にはSlashCommandBuilderが使われる
      expect(slashBuilderSpy).toHaveBeenCalledOnce();
      expect(discord.getRegisterObject()).toEqual({
        global: [
          {
            type: ApplicationCommandType.ChatInput,
            description: "I AM DESCRIPTION",
            name: "test",
            contexts: undefined,
            default_member_permissions: undefined,
            description_localizations: undefined,
            handler: undefined,
            integration_types: undefined,
            name_localizations: undefined,
            nsfw: true,
            options: [],
            default_permission: undefined,
            dm_permission: undefined
          }
        ]
      } satisfies ApplicationCommandRegisterObject);
    });

    it("MessageContextMenuApplicationCommand を登録できる", () => {
      const handler = vi.fn();

      discord.command("Message", { name: "test" }, (b) => b.setContexts(InteractionContextType.Guild), handler);

      // コマンドPayloadの生成にはContextMenuCommandBuilderが使われる
      expect(messageBuilderSpy).toHaveBeenCalledOnce();
      expect(discord.getRegisterObject()).toEqual({
        global: [
          {
            type: ApplicationCommandType.Message,
            name: "test",
            contexts: [InteractionContextType.Guild],
            default_member_permissions: undefined,
            integration_types: undefined,
            name_localizations: undefined,
            default_permission: undefined,
            dm_permission: undefined
          }
        ]
      } satisfies ApplicationCommandRegisterObject);
    });

    it("UserContextMenuApplicationCommand を登録できる", () => {
      const handler = vi.fn();

      discord.command("User", { name: "test" }, (b) => b, handler);

      // コマンドPayloadの生成にはContextMenuCommandBuilderが使われる
      expect(userBuilderSpy).toHaveBeenCalledOnce();
      expect(discord.getRegisterObject()).toEqual({
        global: [
          {
            type: ApplicationCommandType.User,
            name: "test",
            contexts: undefined,
            default_member_permissions: undefined,
            integration_types: undefined,
            name_localizations: undefined,
            default_permission: undefined,
            dm_permission: undefined
          }
        ]
      } satisfies ApplicationCommandRegisterObject);
    });

    it("任意のコマンドを2つ以上登録できる", () => {
      const handler = vi.fn();

      discord.command("ChatInput", { name: "test", description: "AA" }, (b) => b, handler).command("User", { name: "test2" }, (b) => b, handler);

      expect(discord.getRegisterObject()).toEqual({
        global: [
          {
            type: ApplicationCommandType.ChatInput,
            description: "AA",
            name: "test",
            contexts: undefined,
            default_member_permissions: undefined,
            description_localizations: undefined,
            handler: undefined,
            integration_types: undefined,
            name_localizations: undefined,
            nsfw: undefined,
            options: [],
            default_permission: undefined,
            dm_permission: undefined
          },
          {
            type: ApplicationCommandType.User,
            name: "test2",
            contexts: undefined,
            default_member_permissions: undefined,
            integration_types: undefined,
            name_localizations: undefined,
            default_permission: undefined,
            dm_permission: undefined
          }
        ]
      } satisfies ApplicationCommandRegisterObject);
    });

    it("任意のコマンド登録において第3引数のbodyは省略可能である", () => {
      const handler = vi.fn();
      discord.command("ChatInput", { name: "test", description: "AA" }, handler);

      expect(discord.getRegisterObject()).toEqual({
        global: [
          {
            type: ApplicationCommandType.ChatInput,
            description: "AA",
            name: "test",
            contexts: undefined,
            default_member_permissions: undefined,
            description_localizations: undefined,
            handler: undefined,
            integration_types: undefined,
            name_localizations: undefined,
            nsfw: undefined,
            options: [],
            default_permission: undefined,
            dm_permission: undefined
          }
        ]
      } satisfies ApplicationCommandRegisterObject);
    });
  });

  describe("登録したコマンドの取得", () => {
    it("登録したコマンドを取得できる", () => {
      const handler = vi.fn();

      discord.command("ChatInput", { name: "test", description: "AA" }, handler);

      expect(discord.getRegisterObject()).toEqual({
        global: [
          {
            type: ApplicationCommandType.ChatInput,
            description: "AA",
            name: "test",
            contexts: undefined,
            default_permission: undefined,
            default_member_permissions: undefined,
            description_localizations: undefined,
            dm_permission: undefined,
            integration_types: undefined,
            name_localizations: undefined,
            nsfw: undefined,
            options: []
          }
        ]
      } satisfies ApplicationCommandRegisterObject);
    });
  });
});
