import { Request, Response } from "express";
import { mongodbStore } from "../../datastore/datastore";
import { logger } from "../../utils/logger";
import { Item } from "@ash/shared";

export const getAllItems = async (req: Request, res: Response) => {
  try {
    const items: Item[] | undefined = await mongodbStore.getAllItems();
    res.json({ items });
  } catch (e) {
    res.sendStatus(500);
    logger.error(e);
  }
};

export default {
  getAllItems,
};
