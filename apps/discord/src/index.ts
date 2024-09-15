import { type APIInteraction, InteractionResponseType, InteractionType } from "discord-api-types/v10";
import { honoFactory } from "./lib/hono";
import { verifyDiscordInteraction } from "./middleware/discord";

const app = honoFactory.createApp();

app.get("/", (c) => {
  return c.text("Hello, World!");
});

app.get("/hello-world", (c) => {
  const requestId = c.get("requestId");
  return c.text(`Hello, World! Request ID: ${requestId}`);
});

app.post("/interactions", verifyDiscordInteraction, async (c) => {
  const interaction = await c.req.json<APIInteraction>();

  if (interaction.type === InteractionType.Ping) {
    return c.json({ type: InteractionResponseType.Pong });
  }

  return c.json({ type: InteractionResponseType.Pong });
});

// ここから下は fallback 的な Routing
app.onError((e, c) => {
  console.error(e);
  return c.text("Internal Server Error", 500);
});

export default app;
