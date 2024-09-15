import {
  type APIApplicationCommandInteraction,
  type APIMessageApplicationCommandInteraction,
  type APIUserApplicationCommandInteraction,
  ApplicationCommandType
} from "discord-api-types/v10";

const isMessageApplicationCommandInteraction = (
  interaction: APIApplicationCommandInteraction
): interaction is APIMessageApplicationCommandInteraction => {
  return interaction.data.type === ApplicationCommandType.Message;
};

const isUserApplicationCommandInteraction = (interaction: APIApplicationCommandInteraction): interaction is APIUserApplicationCommandInteraction => {
  return interaction.data.type === ApplicationCommandType.User;
};

export { isMessageApplicationCommandInteraction, isUserApplicationCommandInteraction };
