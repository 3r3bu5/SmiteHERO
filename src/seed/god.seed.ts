import { getAllGods } from "../smiteAPI/api";
import { logger } from "../utils/logger";
import { mongodbStore } from "../datastore/datastore";
export async function godSeed(): Promise<void> {
  const gods = await getAllGods();
  await mongodbStore.insertGods(gods);
  logger.info(`Seed Gods Successfully`);
}
