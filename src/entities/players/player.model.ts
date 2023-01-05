import { model, Schema, Types } from "mongoose";
import { Player } from "./player";

const playerSchema = new Schema<Player>(
  {
    Id: {
      type: Number,
      required: true,
      unique: true,
    },
    ActivePlayerId: {
      type: Number,
      required: true,
      unique: true,
    },
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
    RankedConquest: {
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
    },
    RankedConquestController: {
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
    },
    RankedDuel: {
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
    },
    RankedDuelController: {
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
    },
    RankedJoust: {
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
    },
    RankedJoustController: {
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
    },
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
    },
  }
);
playerSchema.pre("save", function (next) {
  this._id = new Types.ObjectId(this.Id);
  next();
});

export const PlayerModel = model<Player>("Player", playerSchema);