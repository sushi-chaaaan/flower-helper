import type { ApplicationCommandType, RESTPostAPIContextMenuApplicationCommandsJSONBody } from "discord-api-types/v10";

export interface RESTPostAPIMessageContextMenuApplicationCommandsJSONBody extends RESTPostAPIContextMenuApplicationCommandsJSONBody {
  type: ApplicationCommandType.Message;
}

export interface RESTPostAPIUserContextMenuApplicationCommandsJSONBody extends RESTPostAPIContextMenuApplicationCommandsJSONBody {
  type: ApplicationCommandType.User;
}
