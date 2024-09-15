import {
  type APIApplicationCommandInteraction,
  type APIMessageApplicationCommandInteraction,
  type APIUserApplicationCommandInteraction,
  ApplicationCommandType,
  type RESTPostAPIContextMenuApplicationCommandsJSONBody
} from "discord-api-types/v10";
import type { RESTPostAPIMessageContextMenuApplicationCommandsJSONBody, RESTPostAPIUserContextMenuApplicationCommandsJSONBody } from "./types";

export const isMessageApplicationCommandInteraction = (
  interaction: APIApplicationCommandInteraction
): interaction is APIMessageApplicationCommandInteraction => {
  return interaction.data.type === ApplicationCommandType.Message;
};

export const isUserApplicationCommandInteraction = (
  interaction: APIApplicationCommandInteraction
): interaction is APIUserApplicationCommandInteraction => {
  return interaction.data.type === ApplicationCommandType.User;
};

export const isRESTPostAPIMessageContextMenuApplicationCommandsJSONBody = (
  body: RESTPostAPIContextMenuApplicationCommandsJSONBody
): body is RESTPostAPIMessageContextMenuApplicationCommandsJSONBody => {
  return body.type === ApplicationCommandType.Message;
};

export const isRESTPostAPIUserContextMenuApplicationCommandsJSONBody = (
  body: RESTPostAPIContextMenuApplicationCommandsJSONBody
): body is RESTPostAPIUserContextMenuApplicationCommandsJSONBody => {
  return body.type === ApplicationCommandType.User;
};
