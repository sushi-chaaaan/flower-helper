import type { RESTPutAPIApplicationCommandsJSONBody } from "discord-api-types/v10";

import typia from "typia";

const validateRESTPutAPIApplicationCommandsJSONBody = typia.createValidate<RESTPutAPIApplicationCommandsJSONBody>();

export { validateRESTPutAPIApplicationCommandsJSONBody };
