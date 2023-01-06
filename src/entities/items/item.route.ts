import { Router } from "express";
import itemController from "./item.controller";
const itemRouter = Router();
itemRouter.get("/api/v1/items", itemController.getAllItems);

export default itemRouter;
