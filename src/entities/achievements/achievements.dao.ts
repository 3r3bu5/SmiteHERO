import { Achievements } from "../../../shared/achievements";

export interface achDAO {
  getAchievementsByPlayerID(
    playerId: string
  ): Promise<Achievements | undefined>;
}
