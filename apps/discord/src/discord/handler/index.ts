import { type APIInteraction, type APIInteractionResponse, type APIPingInteraction, InteractionType } from "discord-api-types/v10";
import { handlerApplicationCommand } from "./command";

type APIInteractionWithoutPing = Exclude<APIInteraction, APIPingInteraction>;

const handleInteraction: (interaction: APIInteractionWithoutPing) => Promise<APIInteractionResponse> = async (interaction) => {
  if (interaction.type === InteractionType.ApplicationCommand) {
    return handlerApplicationCommand(interaction);
  }

  switch (interaction.type) {
    case InteractionType.MessageComponent:
      return { type: 1 };
    case InteractionType.ApplicationCommandAutocomplete:
      return { type: 1 };
    case InteractionType.ModalSubmit:
      return { type: 1 };
    default:
      return interaction satisfies never;
  }
};

export { handleInteraction };
