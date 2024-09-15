import { csrf } from "hono/csrf";
import { createFactory } from "hono/factory";
import { poweredBy } from "hono/powered-by";
import { requestId } from "hono/request-id";
import { secureHeaders } from "hono/secure-headers";
import { trimTrailingSlash } from "hono/trailing-slash";

type HonoConfig = {
  Bindings: Env;
};

const honoFactory = createFactory<HonoConfig>({
  initApp: (app) => {
    app.use(csrf(), secureHeaders(), trimTrailingSlash(), requestId(), poweredBy());
  }
});

export { honoFactory };
export type { HonoConfig };
