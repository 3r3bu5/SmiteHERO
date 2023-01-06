import { createServer } from "./utils/createServer";
import { logger } from "./utils/logger";
import { config } from "./utils/config";
import { mongodbStore } from "./datastore/datastore";
import { getConsumption } from "./smiteAPI/api";
import { seedDB } from "./seed/seed";
import godRouter from "./entities/gods/god.route";
import cors from "cors";
import itemRouter from "./entities/items/item.route";
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
  server.use(cors());
  server.use(godRouter);
  server.use(itemRouter);

  server.listen(config.PORT, config.HOST, () => {
    logger.info(`App is up and runinng on ${config.PORT}`);
  });
  try {
    await mongodbStore.connect(config.DATABASE_URL);
    logger.info(`Connected to DB successfully`);
    const dataUsed = await getConsumption();
    logger.info(` API Data consumped today ${JSON.stringify(dataUsed)}`);
    config.SEED_DB ? await seedDB() : logger.info(`Starting with no seeding`);
  } catch (e) {
    logger.error(`Something went wrong ${e}`);
    process.exit(0);
  }
  signals.forEach((signal) => {
    process.on(signal, () => {
      gracefulShutdown({ signal, server });
    });
  });
}
startServer();
