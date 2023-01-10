import { Achievements } from "@ash/shared";

export interface achDAO {
  getAchievementsByPlayerID(
    playerId: string
  ): Promise<Achievements | undefined>;
}
