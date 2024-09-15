import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// ここから下は fallback 的な Routing
app.onError((e, c) => {
  console.error(e);
  return c.text("Internal Server Error", 500);
});

export default app;
