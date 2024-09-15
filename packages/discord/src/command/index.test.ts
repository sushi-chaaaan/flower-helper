import { beforeEach, describe, expect, it, vi } from "vitest";

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

  beforeEach(() => {
    slashBuilderSpy.mockClear();
    userBuilderSpy.mockClear();
    messageBuilderSpy.mockClear();
    discord.clear();
  });

  it("ChatInputなApplication Commandを登録できる", () => {
    const handler = vi.fn();
    discord.command("ChatInput", "test", (b) => b.setName("test").setDescription("A"), handler);

    // コマンドPayloadの生成にはSlashCommandBuilderが使われる
    expect(slashBuilderSpy).toHaveBeenCalledOnce();

    expect(discord.getChatInputCommandMap().get("test")?.payload).toMatchObject({
      type: ApplicationCommandType.ChatInput,
      description: "A",
      name: "test"
    } satisfies RESTPostAPIApplicationCommandsJSONBody);
  });

  it("MessageなContextMenu Application Commandを登録できる", () => {
    const handler = vi.fn();
    discord.command("Message", "test", (b) => b.setName("test"), handler);

    // コマンドPayloadの生成にはContextMenuCommandBuilderが使われる
    expect(messageBuilderSpy).toHaveBeenCalledOnce();

    expect(discord.getMessageCommandMap().get("test")?.payload).toMatchObject({
      type: ApplicationCommandType.Message,
      name: "test"
    } satisfies RESTPostAPIApplicationCommandsJSONBody);
  });

  it("UserなContextMenu Application Commandを登録できる", () => {
    const handler = vi.fn();
    discord.command("User", "test", (b) => b.setName("test"), handler);

    // コマンドPayloadの生成にはContextMenuCommandBuilderが使われる
    expect(userBuilderSpy).toHaveBeenCalledOnce();

    expect(discord.getUserCommandMap().get("test")?.payload).toMatchObject({
      type: ApplicationCommandType.User,
      name: "test"
    } satisfies RESTPostAPIApplicationCommandsJSONBody);
  });
});
