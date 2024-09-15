import { verifyKey } from "discord-interactions";
import { HTTPException } from "hono/http-exception";
import { honoFactory } from "../lib/hono";

const createUnauthorizedResponse = (error: string) =>
  new Response("Unauthorized", {
    status: 401,
    headers: {
      Authenticate: `error="${error}"`
    }
  });

export const verifyDiscordInteraction = honoFactory.createMiddleware(async (c, next) => {
  const signature = c.req.header("X-Signature-Ed25519");
  const timestamp = c.req.header("X-Signature-Timestamp");

  if (signature == null || timestamp == null) {
    throw new HTTPException(401, {
      res: createUnauthorizedResponse("missing_signature")
    });
  }

  const rawBody = await c.req.raw.clone().text();
  const isValid = await verifyKey(rawBody, signature, timestamp, c.env.DISCORD_PUBLIC_KEY);

  if (!isValid) {
    throw new HTTPException(401, { res: createUnauthorizedResponse("invalid_signature") });
  }

  await next();
});
