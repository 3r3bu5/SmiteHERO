import { createServer } from "./utils/createServer";
import {} from "express";
import { logger } from "./utils/logger";
import { config } from "./utils/config";

const signals = ["SIGINT", "SIGTERM", "SIGHIP"] as const;
async function gracefulShutdown({
  signal,
  server,
}: {
  signal: typeof signals[number];
  server: Awaited<ReturnType<typeof createServer>>;
}) {
  logger.info(`Received Signale ${signal}`);
  server.response.destroy();
  process.exit(0);
}

async function startServer() {
  const server = createServer();
  server.listen(config.PORT, config.HOST, () => {
    logger.info(`App is up and runinng on ${config.PORT}`);
  });
  signals.forEach((signal) => {
    process.on(signal, () => {
      gracefulShutdown({ signal, server });
    });
  });
}
startServer();
