import { Achievements } from "../../shared/achievements";
import { Build } from "../../shared/build";
import { God } from "../../shared/god";
import { Item } from "../../shared/item";
import { Player } from "../../shared/player";
import { User } from "../../shared/user";
import { datastore } from "./datastore";
import mongoose from "mongoose";
import { logger } from "../utils/logger";
import { GodModel } from "../entities/gods/god.model";
import { ItemModel } from "../entities/items/item.model";
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
  async getAllGods(): Promise<God[] | undefined> {
    const gods: God[] = await GodModel.find();
    return gods;
  }
  async insertGods(gods: God[] | any): Promise<God[]> {
    await this.deleteAllGods();
    const insertedGod = await GodModel.insertMany(gods);
    return insertedGod;
  }
  async deleteAllGods(): Promise<void> {
    await GodModel.deleteMany();
    return;
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
  async getAllItems(): Promise<Item[] | undefined> {
    const items: Item[] = await ItemModel.find();
    return items;
  }
  async insertItems(Items: Item[] | any): Promise<Item[]> {
    await this.deleteAllItems();
    const insertedItems = await ItemModel.insertMany(Items);
    return insertedItems;
  }
  async deleteAllItems(): Promise<void> {
    await ItemModel.deleteMany();
    return;
  }
  getAchievementsByPlayerID(
    playerId: string
  ): Promise<Achievements | undefined> {
    throw new Error("Method not implemented.");
  }
}
