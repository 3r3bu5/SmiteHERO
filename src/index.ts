import { createServer } from "./utils/createServer";
import {} from "express";
import { logger } from "./utils/logger";
import { config } from "./utils/config";
import { mongodbStore } from "./datastore/datastore";

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
  }); try {
    await mongodbStore.connect(config.DATABASE_URL)
    logger.info(`Connected to DB successfully`)
  } catch (e) {
    logger.error(`Something went wrong ${e}`);
    process.exit(1);
  }
  signals.forEach((signal) => {
    process.on(signal, () => {
      gracefulShutdown({ signal, server });
    });
  });
}
startServer();
