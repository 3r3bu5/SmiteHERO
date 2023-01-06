import { logger } from "../utils/logger";
import { godSeed } from "./god.seed";
import { itemSeed } from "./item.seed";

export async function seedDB(): Promise<void> {
  try {
    await godSeed();
    await itemSeed();
    logger.info(`seeded`);
  } catch (e) {
    logger.error(`Error: ${e}`);
  }
}
