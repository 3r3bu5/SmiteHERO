import { God } from "../gods/God";

export interface GodDAO {
  getAllGods(): Promise<God[] | undefined>;
}
