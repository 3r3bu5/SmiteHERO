import express from "express";
import cors from "cors";
import { authMiddleware } from "../middleware/auth.midd";
import godRouter from "../entities/gods/god.route";
import itemRouter from "../entities/items/item.route";
import authRoute from "../route/auth.route";
import buildRouter from "../entities/builds/build.route";
import "../config/passport.config";
import passport from "passport";
export function createServer() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(godRouter);
  app.use(itemRouter);
  app.use(authRoute);
  app.use(authMiddleware);
  app.use(buildRouter);

  return app;
}
