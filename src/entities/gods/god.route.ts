import { Router } from "express";
import godControllers from "./god.controller";
const godRouter = Router();

godRouter.get("/api/v1/gods", godControllers.getAllGods);

export default godRouter;
