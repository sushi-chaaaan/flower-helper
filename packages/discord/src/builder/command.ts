import { ContextMenuCommandBuilder, SlashCommandBuilder } from "@discordjs/builders";
import type { ApplicationCommandType } from "discord-api-types/v10";

const userCommandType = 2 satisfies ApplicationCommandType.User;
const messageCommandType = 3 satisfies ApplicationCommandType.Message;

export type SlashCommandBuilderArgs = {
  name: string;
  description: string;
};

export const getSlashCommandBuilder = ({ name, description }: SlashCommandBuilderArgs) =>
  new SlashCommandBuilder().setName(name).setDescription(description);

export type MessageContextMenuCommandBuilderArgs = {
  name: string;
};

export const getMessageContextMenuCommandBuilder = ({ name }: MessageContextMenuCommandBuilderArgs) =>
  new ContextMenuCommandBuilder().setType(messageCommandType).setName(name);

export type UserContextMenuCommandBuilderArgs = {
  name: string;
};

export const getUserContextMenuCommandBuilder = ({ name }: UserContextMenuCommandBuilderArgs) =>
  new ContextMenuCommandBuilder().setType(userCommandType).setName(name);
