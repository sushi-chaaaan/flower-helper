import { ApplicationCommandType, InteractionContextType } from "discord-api-types/v10";
import { afterEach, describe, expect, it, vi } from "vitest";
import * as commandBuilder from "../builder/command";
import { DiscordCommand } from "./index";
import type { ApplicationCommandRegisterObject } from "./interface";

describe("DiscordCommand コマンド登録操作", () => {
  const discord = new TestDiscordCommand();
  const slashBuilderSpy = vi.spyOn(commandBuilder, "getSlashCommandBuilder");
  const userBuilderSpy = vi.spyOn(commandBuilder, "getUserContextMenuCommandBuilder");
  const messageBuilderSpy = vi.spyOn(commandBuilder, "getMessageContextMenuCommandBuilder");

  afterEach(() => {
    slashBuilderSpy.mockClear();
    userBuilderSpy.mockClear();
    messageBuilderSpy.mockClear();
    discord.clear();
  });

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

  it("ChatInputApplicationCommand をオプションありで登録できる", () => {
    const handler = vi.fn();

    discord.command(
      "ChatInput",
      { name: "test", description: "I AM DESCRIPTION" },
      (b) => b.addStringOption((i) => i.setName("input").setDescription("input").setAutocomplete(true).setMinLength(1)),
      handler
    );

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
          integration_types: undefined,
          name_localizations: undefined,
          nsfw: undefined,
          options: [
            {
              name: "input",
              description: "input",
              description_localizations: undefined,
              max_length: undefined,
              min_length: 1,
              name_localizations: undefined,
              required: false,
              type: 3,
              choices: undefined,
              autocomplete: true
            }
          ],
          default_permission: undefined,
          dm_permission: undefined
        }
      ]
    } satisfies ApplicationCommandRegisterObject);
  });

  it("SubcommandのあるChatInputApplicationCommand を登録できる", () => {
    const handler = vi.fn();

    discord.command(
      "ChatInput",
      { name: "test", description: "I AM DESCRIPTION" },
      (b) => b.addSubcommand((s) => s.setName("sub").setDescription("HOGEHOGE")),
      handler
    );

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
          integration_types: undefined,
          name_localizations: undefined,
          nsfw: undefined,
          options: [
            {
              name: "sub",
              description: "HOGEHOGE",
              description_localizations: undefined,
              name_localizations: undefined,
              type: 1,
              options: []
            }
          ],
          default_permission: undefined,
          dm_permission: undefined
        }
      ]
    } satisfies ApplicationCommandRegisterObject);
  });

  it("SubcommandGroupのあるChatInputApplicationCommand を登録できる", () => {
    const handler = vi.fn();

    discord.command(
      "ChatInput",
      { name: "test", description: "I AM DESCRIPTION" },
      (b) =>
        b.addSubcommandGroup((s) =>
          s
            .setName("sub")
            .setDescription("HOGEHOGE")
            .addSubcommand((s) => s.setName("sub2").setDescription("HOGEHOGE2"))
        ),
      handler
    );

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
          integration_types: undefined,
          name_localizations: undefined,
          nsfw: undefined,
          options: [
            {
              name: "sub",
              description: "HOGEHOGE",
              description_localizations: undefined,
              name_localizations: undefined,
              type: 2,
              options: [
                {
                  description: "HOGEHOGE2",
                  description_localizations: undefined,
                  name: "sub2",
                  name_localizations: undefined,
                  type: 1,
                  options: []
                }
              ]
            }
          ],
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

describe("DiscordCommand コマンド取得操作", () => {
  const discord = new TestDiscordCommand();
  const slashBuilderSpy = vi.spyOn(commandBuilder, "getSlashCommandBuilder");
  const userBuilderSpy = vi.spyOn(commandBuilder, "getUserContextMenuCommandBuilder");
  const messageBuilderSpy = vi.spyOn(commandBuilder, "getMessageContextMenuCommandBuilder");

  afterEach(() => {
    slashBuilderSpy.mockClear();
    userBuilderSpy.mockClear();
    messageBuilderSpy.mockClear();
    discord.clear();
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

class TestDiscordCommand extends DiscordCommand {
  /**
   * 登録されたコマンドを全て削除する。テストで使うと便利。
   *
   * @example
   * ```typescript
   * import { describe, afterEach } from "vitest";
   *
   * describe("DiscordCommand", () => {
   *  const discord = new DiscordCommand();
   *
   *  afterEach(() => {
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
