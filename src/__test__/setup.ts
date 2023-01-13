import nock from "nock";
import { mongodbPersistant } from "../datastore/mongodb";
import { config } from "../utils/config";

const db: mongodbPersistant = (global as any).mongoTestDB;
beforeAll(async () => {
  nock.cleanAll();
  nock.disableNetConnect();
  nock.enableNetConnect("localhost");
  if (process.env.NODE_ENV === "test" && config.MONGO_TEST_URI) {
    await db.connect(config.MONGO_TEST_URI);
  }
});
afterEach(async () => {
  nock.cleanAll();
  await db.truncate("User");
  await db.truncate("Item");
  await db.truncate("God");
  await db.truncate("Build");
});

afterAll(async () => {
  nock.enableNetConnect();
  nock.restore();
});
