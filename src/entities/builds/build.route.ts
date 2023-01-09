import { Router } from "express";
import { validate } from "../../middleware/schemaValid.midd";
import buildControllers from "./build.controller";
import { createBuildSchema } from "./build.schema";
const buildRouter = Router();

buildRouter.post(
  "/api/v1/builds",
  validate(createBuildSchema),
  buildControllers.createBuild
);
buildRouter.get("/api/v1/builds", buildControllers.getAllBuilds);

export default buildRouter;
