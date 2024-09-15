import { type APIInteraction, type APIInteractionResponse, type APIInteractionResponsePong, InteractionType } from "discord-api-types/v10";
import { DiscordCommand } from "./command";

interface IDiscordBase extends DiscordCommand {
  handleInteraction(interaction: APIInteraction): Promise<APIInteractionResponse>;
}

class Discord extends DiscordCommand implements IDiscordBase {
  async handleInteraction(interaction: APIInteraction): Promise<APIInteractionResponse> {
    if (interaction.type === InteractionType.Ping) {
      return { type: 1 } satisfies APIInteractionResponsePong;
    }

    switch (interaction.type) {
      case InteractionType.ApplicationCommand:
        return await this.handleApplicationCommand(interaction);
      default:
        return interaction satisfies never;
    }
  }
}

export { Discord };
