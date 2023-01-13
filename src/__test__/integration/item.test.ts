import { mongodbPersistant } from "../../datastore/mongodb";
import ItemDataArr from "../mocks/getitems.json";
const itemStore: mongodbPersistant = (global as any).mongoTestDB;
describe("God datastore ", () => {
  test("Insert new Gods", async () => {
    const items = await itemStore.insertItems(ItemDataArr);
    expect(items).toBeDefined();
    expect(items[0]).toHaveProperty("_id");
    expect(items[0]._id).toBeDefined();
    expect(items[0]).toHaveProperty("savedAt");
  });
  test("Get all items", async () => {
    await itemStore.insertItems(ItemDataArr);
    const items = await itemStore.getAllItems();
    expect(items).toBeDefined();
    expect(items?.[0]).toHaveProperty("_id");
    expect(items?.[0]._id).toBeDefined();
    expect(items?.[0]).toHaveProperty("savedAt");
  });
  test("Delete all items", async () => {
    await itemStore.deleteAllItems();
    const items = await itemStore.getAllItems();
    expect(items).toBeDefined();
    expect(items?.length).toBe(0);
  });
});
