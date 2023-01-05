import { logger } from "../utils/logger";
import { godSeed } from "./god.seed";

export async function seedDB(): Promise<void> {
  try {
    await godSeed();
    logger.info(`seeded`);
  } catch (e) {
    logger.error(`Error: ${e}`);
  }
}
