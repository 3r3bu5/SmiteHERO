import { NextFunction, Request, Response } from "express";
import { mongodbStore } from "../datastore/datastore";
import { verifyJWT } from "../utils/jwt";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ", 2);
    if (!token) {
      return res.status(401).send({ error: "Unauthorized Access" });
    }

    const userId = verifyJWT(token[1]);
    const user = await mongodbStore.getUserById(userId.id);
    if (!user) {
      return res.status(401).send({ error: "Unauthorized Access" });
    }
    res.locals.userId = userId.id;
    next();
  } catch (err) {
    next(err);
  }
};
