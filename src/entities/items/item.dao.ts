import { Item } from "./item";

export interface itemDAO {
  getAllItems(): Promise<Item[] | undefined>;
}
