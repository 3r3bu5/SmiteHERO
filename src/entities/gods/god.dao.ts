import { God } from "../../../shared/god";

export interface GodDAO {
  getAllGods(): Promise<God[] | undefined>;
  insertGods(gods: God[]): Promise<God[]>;
  deleteAllGods(): Promise<void>;
}
