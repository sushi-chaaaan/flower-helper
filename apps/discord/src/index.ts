import { type APIInteraction, InteractionType } from "discord-api-types/v10";
import { HTTPException } from "hono/http-exception";
import { handleInteraction } from "./discord/handler";
import { INTERACTION_RESPONSE_PONG } from "./discord/helper/interaction/response";
import { honoFactory } from "./lib/hono";
import { verifyDiscordInteraction } from "./middleware/discord";

const app = honoFactory
  .createApp()
  .onError((e, c) => {
    if (e instanceof HTTPException) {
      return e.getResponse();
    }

    const requestId = c.get("requestId");
    console.error(`app.onError: ${e.message} (requestId: ${requestId})`);
    return c.text("Internal Server Error", 500, { "X-Request-Id": requestId });
  })
  .get("/", (c) => {
    const requestId = c.get("requestId");
    return c.text("Hello, World!", 200, { "X-Request-Id": requestId });
  });

app.post("/interactions", verifyDiscordInteraction, async (c) => {
  const interaction = await c.req.json<APIInteraction>();

  if (interaction.type === InteractionType.Ping) {
    return c.json(INTERACTION_RESPONSE_PONG);
  }

  const response = await handleInteraction(interaction);
  return c.json(response);
});

export default app;
