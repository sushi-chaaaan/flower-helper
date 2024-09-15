import type { APIInteraction } from "discord-api-types/v10";
import { HTTPException } from "hono/http-exception";
import { discordInteractionApp } from "./discord";
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
    return c.text("Internal Server Error", 500);
  })
  .get("/", (c) => {
    return c.text("Hello, World!");
  });

app.post("/interactions", verifyDiscordInteraction, async (c) => {
  const interaction = await c.req.json<APIInteraction>();

  const response = await discordInteractionApp.handleInteraction(interaction);
  return c.json(response);
});

export default app;
