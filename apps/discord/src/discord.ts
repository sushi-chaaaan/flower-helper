import { Discord } from "@repo/discord";
import { type APIInteractionResponseChannelMessageWithSource, MessageFlags } from "discord-api-types/v10";

export const discordInteractionApp = new Discord().command(
  "ChatInput",
  { name: "ping", description: "ping pong" },
  () => ({ type: 4, data: { content: "pong!", flags: MessageFlags.Ephemeral } }) satisfies APIInteractionResponseChannelMessageWithSource
);
