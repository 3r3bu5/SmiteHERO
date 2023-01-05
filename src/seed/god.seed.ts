import { GodModel } from "../entities/gods/god.model";
import { getAllGods } from "../smiteAPI/api";
import { logger } from "../utils/logger";

export async function godSeed(): Promise<void> {
  const gods = await getAllGods();
  // TODO: use the datastoe insted
  await GodModel.deleteMany();
  const insertedGod = await GodModel.insertMany(gods);
  logger.info(insertedGod);
}
