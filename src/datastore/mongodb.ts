import { Achievements } from "@ash/shared";
import { Build } from "@ash/shared";
import { God } from "@ash/shared";
import { Item } from "@ash/shared";
import { Player } from "@ash/shared";
import { createUserInterface, User } from "@ash/shared";
import { datastore } from "./datastore";
import mongoose from "mongoose";
import { logger } from "../utils/logger";
import { GodModel } from "../entities/gods/god.model";
import { ItemModel } from "../entities/items/item.model";
import { buildModel } from "../entities/builds/build.model";
import { UserModel } from "../entities/users/user.model";
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

  async auth(user: createUserInterface): Promise<User> {
    const foundUser = await UserModel.findOne({ googleId: user.googleId });
    if (foundUser) {
      return foundUser;
    }
    const createdUser = await UserModel.create({ ...user });
    await createdUser.save();
    return createdUser;
  }
  signup(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  signin(email: string): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }
  async getUserById(id: string): Promise<User | undefined> {
    const user = await UserModel.findById(id);
    if (user) {
      return user;
    }
    return undefined;
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
  async createBuild(
    build: Pick<Build, "authorId" | "godId" | "items" | "mode">
  ): Promise<Build> {
    const createdBuild = await buildModel.create(build);
    const savedBuild = await createdBuild.save();
    return savedBuild;
  }
  async getAllBuilds(): Promise<Build[] | undefined> {
    const builds = await buildModel.find().populate("items");
    return builds;
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
