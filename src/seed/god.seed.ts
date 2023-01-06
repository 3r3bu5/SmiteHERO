import { getAllGods } from "../smiteAPI/api";
import { logger } from "../utils/logger";
import { mongodbStore } from "../datastore/datastore";
import getItems from "hirez-wrapper/dist/endpoints/smite/getItems";
export async function godSeed(): Promise<void> {
  const gods = await getAllGods();
  await mongodbStore.insertGods(gods);
  logger.info(`Seed Gods Successfully`);
}

export async function itemSeed(): Promise<void> {
  const Item = await getItems("english");
  await mongodbStore.insertItems(Item);
  logger.info(`Seed Items Successfully`);
}
