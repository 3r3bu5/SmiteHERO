import { Achievements } from "../entities/achievements/achievements";
import { Build } from "../entities/builds/build";
import { God } from "../entities/gods/god";
import { Item } from "../entities/items/item";
import { Player } from "../entities/players/player";
import { User } from "../entities/users/user";
import { datastore } from "./datastore";
import mongoose from "mongoose";
import { logger } from "../utils/logger";
export class mongodbPersistant implements datastore {
  async connect(DATABASE_URL: string) {
    try {
      mongoose.set("strictQuery", false);
      await mongoose.connect(DATABASE_URL);
    } catch (err) {
     logger.error("Something went wrong!, err: ", err);
      process.exit();
    }
  }
  async close() {
    try {
      await mongoose.disconnect();
    } catch (err) {
     logger.error("Something went wrong!, err: ", err);
    }
  }

  signup(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  signin(email: string): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }
  getAllGods(): Promise<God[] | undefined> {
    throw new Error("Method not implemented.");
  }
  getPlayerByName(name: string): Promise<Player | undefined> {
    throw new Error("Method not implemented.");
  }
  getPlayerById(id: string): Promise<Player | undefined> {
    throw new Error("Method not implemented.");
  }
  createBuild(build: Build): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getAllBuilds(): Promise<Build[] | undefined> {
    throw new Error("Method not implemented.");
  }
  getBuildById(id: string): Promise<Build | undefined> {
    throw new Error("Method not implemented.");
  }
  getBuildsByGod(godId: string): Promise<Build[] | undefined> {
    throw new Error("Method not implemented.");
  }
  getAllItems(): Promise<Item[] | undefined> {
    throw new Error("Method not implemented.");
  }
  getAchievementsByPlayerID(
    playerId: string
  ): Promise<Achievements | undefined> {
    throw new Error("Method not implemented.");
  }
}
