import { Request, Response } from "express";
import { mongodbStore } from "../../datastore/datastore";
import { logger } from "../../utils/logger";

const getAllGods = async (req: Request, res: Response) => {
  try {
    const gods = await mongodbStore.getAllGods();
    res.status(200).json({ gods });
  } catch (e) {
    res.sendStatus(500);
    logger.error(`Something Went Wrong, Error: ${e}`);
  }
};

export default {
  getAllGods,
};
