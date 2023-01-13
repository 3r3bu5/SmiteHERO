import { createUserInterface, User } from "@ash/shared";
import mongoose from "mongoose";
import { mongodbPersistant } from "../../datastore/mongodb";

const UserStore: mongodbPersistant = (global as any).mongoTestDB;
describe("UserStore", () => {
  const testUser: createUserInterface = {
    googleId: "211256554",
    name: "assh",
    email: "example@gmail.com",
    username: "example",
  };
  const fakeId = new mongoose.Types.ObjectId().toString();
  it("should create or return a new user", async () => {
    const user: User = await UserStore.auth(testUser);
    expect(user).toBeDefined();
    expect(user).toHaveProperty("_id");
    expect(user).toHaveProperty("googleId");
    expect(user.active).toBe(true);
    expect(user.googleId).toStrictEqual(testUser.googleId);
  });
  //create a test for getUserById
  it("should return undefined for user who doesnt exits", async () => {
    const userById: User | undefined = await UserStore.getUserById(fakeId);
    expect(userById).toBeUndefined();
  });
});
