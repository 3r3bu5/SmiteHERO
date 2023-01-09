import { Request, Response } from "express";
import { mongodbStore } from "../../datastore/datastore";
import { logger } from "../../utils/logger";

const createBuild = async (req: Request, res: Response) => {
  const { mode, items, godId, authorId } = req.body;
  try {
    const build = await mongodbStore.createBuild({
      authorId,
      items,
      godId,
      mode,
    });
    res.status(201).json(build);
  } catch (e) {
    res.sendStatus(500);
    logger.error(`Something Went Wrong, Error: ${e}`);
  }
};
const getAllBuilds = async (req: Request, res: Response) => {
  try {
    const builds = await mongodbStore.getAllBuilds();
    res.status(200).json(builds);
  } catch (e) {
    res.sendStatus(500);
    logger.error(`Something Went Wrong, Error: ${e}`);
  }
};

export default {
  createBuild,
  getAllBuilds,
};
