import { ContextMenuCommandBuilder, SlashCommandBuilder } from "@discordjs/builders";
import type { ApplicationCommandType } from "discord-api-types/v10";

const userCommandType = 2 satisfies ApplicationCommandType.User;
const messageCommandType = 3 satisfies ApplicationCommandType.Message;

export const getSlashCommandBuilder = () => new SlashCommandBuilder();

export const getUserContextMenuCommandBuilder = () => new ContextMenuCommandBuilder().setType(userCommandType);

export const getMessageContextMenuCommandBuilder = () => new ContextMenuCommandBuilder().setType(messageCommandType);
