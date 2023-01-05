import { achDAO } from "../entities/achievements/achievements.dao";
import { buildDAO } from "../entities/builds/build.dao";
import { GodDAO } from "../entities/gods/god.dao";
import { itemDAO } from "../entities/items/item.dao";
import { playerDAO } from "../entities/players/player.dao";
import { userDAO } from "../entities/users/user.dao";
import { mongodbPersistant } from "./mongodb";

export interface datastore
  extends userDAO,
    GodDAO,
    playerDAO,
    buildDAO,
    itemDAO,
    achDAO {}

export const mongodbStore = new mongodbPersistant();
