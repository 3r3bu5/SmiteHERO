import { Router } from "express";
import buildControllers from "./build.controller";
const buildRouter = Router();

buildRouter.post("/api/v1/builds", buildControllers.createBuild);
buildRouter.get("/api/v1/builds", buildControllers.getAllBuilds);

export default buildRouter;
