import type { APIInteraction, APIInteractionResponsePong } from "discord-api-types/v10";

export const INTERACTION_RESPONSE_PONG: APIInteractionResponsePong = { type: 1 };

export const pongHandler = (interaction: APIInteraction) => INTERACTION_RESPONSE_PONG;
