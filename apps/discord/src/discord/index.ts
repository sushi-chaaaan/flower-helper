import type { APIInteraction, APIInteractionResponse, APIPingInteraction } from "discord-api-types/v10";

type InteractionWithoutPing = Exclude<APIInteraction, APIPingInteraction>;

const interactionHandler: (interaction: InteractionWithoutPing) => Promise<APIInteractionResponse> = async (interaction) => {};

export { interactionHandler };
