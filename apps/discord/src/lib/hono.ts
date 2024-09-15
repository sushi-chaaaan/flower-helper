import { csrf } from "hono/csrf";
import { createFactory } from "hono/factory";
import { poweredBy } from "hono/powered-by";
import { type RequestIdVariables, requestId } from "hono/request-id";
import { NONCE, type SecureHeadersVariables, secureHeaders } from "hono/secure-headers";
import { trimTrailingSlash } from "hono/trailing-slash";

type HonoConfig = {
  Bindings: Env;
  Variables: {} & RequestIdVariables & SecureHeadersVariables;
};

const honoFactory = createFactory<HonoConfig>({
  initApp: (app) => {
    app.use(csrf(), trimTrailingSlash(), requestId(), poweredBy());
    app.get(
      "*",
      secureHeaders({
        contentSecurityPolicy: {
          scriptSrc: [NONCE]
        }
      })
    );
  }
});

export { honoFactory };
