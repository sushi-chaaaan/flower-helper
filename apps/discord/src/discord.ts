import { Discord } from "@repo/discord";
import { type APIInteractionResponseChannelMessageWithSource, MessageFlags } from "discord-api-types/v10";

export const discordInteractionApp = new Discord().command(
  "ChatInput",
  "ping",
  (b) => b.setName("ping").setDescription("Ping!"),
  () => ({ type: 4, data: { content: "pong!", flags: MessageFlags.Ephemeral } }) satisfies APIInteractionResponseChannelMessageWithSource
);
