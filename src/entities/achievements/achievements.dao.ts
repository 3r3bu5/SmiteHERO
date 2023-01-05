import { Achievements } from "./achievements";

export interface achDAO {
  getAchievementsByPlayerID(
    playerId: string
  ): Promise<Achievements | undefined>;
}
