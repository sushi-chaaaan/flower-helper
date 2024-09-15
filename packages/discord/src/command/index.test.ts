import { afterEach, describe, expect, it, vi } from "vitest";

import {} from "@discordjs/builders";
import { ApplicationCommandType, type RESTPostAPIApplicationCommandsJSONBody } from "discord-api-types/v10";
import * as DiscordCommand from "./index";

import * as commandBuilder from "../builder/command";

class DiscordCommandTest extends DiscordCommand.DiscordCommand {
  getChatInputCommandMap() {
    return this.chatInputCommandMap;
  }

  getMessageCommandMap() {
    return this.messageCommandMap;
  }

  getUserCommandMap() {
    return this.userCommandMap;
  }
}

describe("DiscordCommand", () => {
  const discord = new DiscordCommandTest();
  const slashBuilderSpy = vi.spyOn(commandBuilder, "getSlashCommandBuilder");
  const userBuilderSpy = vi.spyOn(commandBuilder, "getUserContextMenuCommandBuilder");
  const messageBuilderSpy = vi.spyOn(commandBuilder, "getMessageContextMenuCommandBuilder");

  afterEach(() => {
    slashBuilderSpy.mockClear();
    userBuilderSpy.mockClear();
    messageBuilderSpy.mockClear();
    discord.clear();
  });

  describe(".command()", () => {
    it("ChatInputApplicationCommand を登録できる", () => {
      const handler = vi.fn();
      discord.command("ChatInput", { name: "test", description: "I AM DESCRIPTION" }, (b) => b, handler);

      // コマンドPayloadの生成にはSlashCommandBuilderが使われる
      expect(slashBuilderSpy).toHaveBeenCalledOnce();

      expect(discord.getChatInputCommandMap().get("test")?.payload).toMatchObject({
        type: ApplicationCommandType.ChatInput,
        description: "I AM DESCRIPTION",
        name: "test"
      } satisfies RESTPostAPIApplicationCommandsJSONBody);
    });

    it("MessageContextMenuApplicationCommand を登録できる", () => {
      const handler = vi.fn();
      discord.command("Message", { name: "test" }, (b) => b, handler);

      // コマンドPayloadの生成にはContextMenuCommandBuilderが使われる
      expect(messageBuilderSpy).toHaveBeenCalledOnce();

      expect(discord.getMessageCommandMap().get("test")?.payload).toMatchObject({
        type: ApplicationCommandType.Message,
        name: "test"
      } satisfies RESTPostAPIApplicationCommandsJSONBody);
    });

    it("UserContextMenuApplicationCommand を登録できる", () => {
      const handler = vi.fn();
      discord.command("User", { name: "test" }, (b) => b, handler);

      // コマンドPayloadの生成にはContextMenuCommandBuilderが使われる
      expect(userBuilderSpy).toHaveBeenCalledOnce();

      expect(discord.getUserCommandMap().get("test")?.payload).toMatchObject({
        type: ApplicationCommandType.User,
        name: "test"
      });
    });

    it("任意のコマンドを2つ以上登録できる", () => {
      const handler = vi.fn();
      discord.command("ChatInput", { name: "test", description: "AA" }, (b) => b, handler).command("User", { name: "test2" }, (b) => b, handler);

      expect(slashBuilderSpy).toHaveBeenCalledOnce();
      expect(userBuilderSpy).toHaveBeenCalledOnce();

      expect(discord.getChatInputCommandMap().get("test")?.payload).toMatchObject({
        type: ApplicationCommandType.ChatInput,
        description: "AA",
        name: "test"
      });

      expect(discord.getUserCommandMap().get("test2")?.payload).toMatchObject({
        type: ApplicationCommandType.User,
        name: "test2"
      });
    });

    it("任意のコマンド登録において第3引数のbodyは省略可能である", () => {
      const handler = vi.fn();
      discord
        .command("ChatInput", { name: "test", description: "AA" }, handler)
        .command("Message", { name: "test2" }, handler)
        .command("User", { name: "test3" }, handler);

      expect(slashBuilderSpy).toHaveBeenCalledOnce();
      expect(userBuilderSpy).toHaveBeenCalledOnce();
      expect(messageBuilderSpy).toHaveBeenCalledOnce();
      expect(discord.getChatInputCommandMap().get("test")?.payload).toMatchObject({
        type: ApplicationCommandType.ChatInput,
        description: "AA",
        name: "test"
      });
      expect(discord.getMessageCommandMap().get("test2")?.payload).toMatchObject({
        type: ApplicationCommandType.Message,
        name: "test2"
      });
      expect(discord.getUserCommandMap().get("test3")?.payload).toMatchObject({
        type: ApplicationCommandType.User,
        name: "test3"
      });
    });
  });

  describe(".getRegisterObject()", () => {
    it("登録したコマンドを取得できる", () => {
      const handler = vi.fn();
      discord.command("ChatInput", { name: "test", description: "AA" }, handler);

      const registerObject = discord.getRegisterObject();
      expect(registerObject.global).toEqual([
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
        } satisfies RESTPostAPIApplicationCommandsJSONBody
      ]);
    });
  });
});
