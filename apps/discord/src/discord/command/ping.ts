import { SlashCommandBuilder } from "@discordjs/builders";
import { InteractionResponseType, MessageFlags } from "discord-api-types/v10";
import type { ChatInputApplicationCommand } from "../types/command";

export const pingCommand = {
  kind: "ChatInput",
  payload: new SlashCommandBuilder().setName("ping").setDescription("Replies with Pong!").toJSON(),
  handler: () => ({
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      content: "Pong!",
      flags: MessageFlags.Ephemeral
    }
  })
} satisfies ChatInputApplicationCommand;
