import { model, Schema } from "mongoose";
import { Player } from "@ash/shared";

const stats = {
  Leaves: Number,
  Losses: Number,
  Name: String,
  Points: Number,
  PrevRank: Number,
  Rank: Number,
  Rank_Stat: Number,
  Season: Number,
  Tier: Number,
  Trend: Number,
  Wins: Number,
};
const playerSchema = new Schema<Player>(
  {
    ActivePlayerId: Number,
    Avatar_URL: String,
    Created_Datetime: String,
    HoursPlayed: Number,
    Last_Login_Datetime: String,
    Leaves: Number,
    Level: Number,
    Losses: Number,
    MasteryLevel: Number,
    MergedPlayers: String,
    Name: String,
    Personal_Status_Message: String,
    Rank_Stat_Conquest: Number,
    Rank_Stat_Conquest_Controller: Number,
    Rank_Stat_Duel: Number,
    Rank_Stat_Duel_Controller: Number,
    Rank_Stat_Joust: Number,
    Rank_Stat_Joust_Controller: Number,
    RankedConquest: stats,
    RankedConquestController: stats,
    RankedDuel: stats,
    RankedDuelController: stats,
    RankedJoust: stats,
    RankedJoustController: stats,
    Region: String,
    TeamId: String,
    Team_Name: String,
    Tier_Conquest: String,
    Tier_Duel: String,
    Tier_Joust: String,
    Total_Achievements: String,
    Total_Worshippers: String,
    Wins: String,
    hz_gamer_tag: String,
    hz_player_name: String,
  },
  {
    timestamps: {
      createdAt: "savedAt",
      updatedAt: false,
    },
  }
);

export const PlayerModel = model<Player>("Player", playerSchema);
