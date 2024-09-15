import { isChatInputApplicationCommandInteraction } from "discord-api-types/utils/v10";
import type { APIApplicationCommandInteraction, APIInteractionResponsePong } from "discord-api-types/v10";
import { findRegisteredCommandHandler } from "../commands";
import { isMessageApplicationCommandInteraction, isUserApplicationCommandInteraction } from "../helper/interaction/guard";
import { pongHandler } from "../helper/interaction/response";

export const handlerApplicationCommand = async (interaction: APIApplicationCommandInteraction) => {
  if (isChatInputApplicationCommandInteraction(interaction)) {
    return (findRegisteredCommandHandler("ChatInput", interaction.data.name) ?? pongHandler)(interaction);
  }

  if (isMessageApplicationCommandInteraction(interaction)) {
    return (findRegisteredCommandHandler("Message", interaction.data.name) ?? pongHandler)(interaction);
  }

  if (isUserApplicationCommandInteraction(interaction)) {
    return (findRegisteredCommandHandler("User", interaction.data.name) ?? pongHandler)(interaction);
  }

  return interaction satisfies never;
};
