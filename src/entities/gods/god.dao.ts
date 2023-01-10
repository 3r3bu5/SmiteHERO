import { God } from "@ash/shared";

export interface GodDAO {
  getAllGods(): Promise<God[] | undefined>;
  insertGods(gods: God[]): Promise<God[]>;
  deleteAllGods(): Promise<void>;
}
