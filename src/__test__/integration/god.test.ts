import { mongodbPersistant } from "../../datastore/mongodb";
import GodDataArr from "../mocks/getgods.json";
const GodStore: mongodbPersistant = (global as any).mongoTestDB;
describe("God datastore ", () => {
  test("Insert new Gods", async () => {
    const gods = await GodStore.insertGods(GodDataArr);
    expect(gods).toBeDefined();
    expect(gods[0]).toHaveProperty("_id");
    expect(gods[0]._id).toBeDefined();
    expect(gods[0]).toHaveProperty("savedAt");
  });
  test("Get all Gods", async () => {
    await GodStore.insertGods(GodDataArr);
    const gods = await GodStore.getAllGods();
    expect(gods).toBeDefined();
    expect(gods?.[0]).toHaveProperty("_id");
    expect(gods?.[0]._id).toBeDefined();
    expect(gods?.[0]).toHaveProperty("savedAt");
  });
  test("Delete all Gods", async () => {
    await GodStore.deleteAllGods();
    const gods = await GodStore.getAllGods();
    expect(gods).toBeDefined();
    expect(gods?.length).toBe(0);
  });
});
