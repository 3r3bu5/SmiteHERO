import { Item } from "../../../shared/item";

export interface itemDAO {
  getAllItems(): Promise<Item[] | undefined>;
  insertItems(Items: Item[]): Promise<Item[]>;
  deleteAllItems(): Promise<void>;
}
