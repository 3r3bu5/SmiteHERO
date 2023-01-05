import { Player } from "./player";

export interface playerDAO {
  getPlayerByName(name: string): Promise<Player | undefined>;
  getPlayerById(id: string): Promise<Player | undefined>;
}
