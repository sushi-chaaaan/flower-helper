import type { APIApplicationCommandInteraction, APIInteractionResponse, RESTPostAPIApplicationCommandsJSONBody } from "discord-api-types/v10";

type ApplicationCommandHandler = (interaction: APIApplicationCommandInteraction) => APIInteractionResponse;

type ApplicationCommand = {
  handler: ApplicationCommandHandler;
  payload: RESTPostAPIApplicationCommandsJSONBody;
};

export type { ApplicationCommand, ApplicationCommandHandler };
