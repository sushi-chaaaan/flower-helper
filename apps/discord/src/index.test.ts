import { HTTPException } from "hono/http-exception";
import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";
import app from "./index";

describe("Hono Routes", () => {
  const testApp = app
    .get("/error", (c) => {
      if (c.req.header("error") === "true") {
        throw new Error("Test Error");
      }
      return c.text("OK");
    })
    .post("/secure", (c) => {
      if (c.req.header("Authorization") !== "Bearer test") {
        throw new HTTPException(401, {
          res: new Response("Unauthorized", {
            status: 401,
            headers: {
              Authenticate: 'error="invalid_token"'
            }
          })
        });
      }
      return c.text("OK");
    });
  const client = testClient(testApp);

  it("GET / は Hello, World! を返す", async () => {
    const response = await client.index.$get();
    expect(response.status).toBe(200);
    expect(await response.text()).toBe("Hello, World!");
    expect(response.headers.get("X-Request-Id")).toBeDefined();
  });

  it("HTTPException が発生すると app.onError が呼ばれる AND HTTPException のレスポンスが返される", async () => {
    const response = await client.secure.$post();
    expect(response.status).toBe(401);
    expect(await response.text()).toBe("Unauthorized");
    expect(response.headers.get("Authenticate")).toBe('error="invalid_token"');
  });

  it("任意の例外が発生すると app.onError が呼ばれる", async () => {
    const response = await client.error.$get({}, { headers: { error: "true" } });
    expect(response.status).toBe(500);
    expect(await response.text()).toBe("Internal Server Error");
  });
});
