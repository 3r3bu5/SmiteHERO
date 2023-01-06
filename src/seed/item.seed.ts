import { mongodbStore } from "../datastore/datastore";
import { getAllItems } from "../smiteAPI/api";
import { logger } from "../utils/logger";

export async function itemSeed(): Promise<void> {
  const Item = await getAllItems();
  await mongodbStore.insertItems(Item);
  logger.info(`Seed Items Successfully`);
}
