import * as Sentry from "@sentry/react";

function init() {
  Sentry.init({
    dsn:
      "https://806eeea127b440bc9a260f23d12e5ecb@o433172.ingest.sentry.io/5387830",
  });
}

export default init;
