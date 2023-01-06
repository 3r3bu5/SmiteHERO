import { logger } from "../utils/logger";
import { godSeed, itemSeed } from "./god.seed";

export async function seedDB(): Promise<void> {
  try {
    await godSeed();
    await itemSeed();
    logger.info(`seeded`);
  } catch (e) {
    logger.error(`Error: ${e}`);
  }
}
