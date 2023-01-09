export interface RankedConquest {
  Leaves: number;
  Losses: number;
  Name: string;
  Points: number;
  PrevRank: number;
  Rank: number;
  Rank_Stat: number;
  Season: number;
  Tier: number;
  Trend: number;
  Wins: number;
}

export interface RankedConquestController {
  Leaves: number;
  Losses: number;
  Name: string;
  Points: number;
  PrevRank: number;
  Rank: number;
  Rank_Stat: number;
  Season: number;
  Tier: number;
  Trend: number;
  Wins: number;
}

export interface RankedDuel {
  Leaves: number;
  Losses: number;
  Name: string;
  Points: number;
  PrevRank: number;
  Rank: number;
  Rank_Stat: number;
  Season: number;
  Tier: number;
  Trend: number;
  Wins: number;
}

export interface RankedDuelController {
  Leaves: number;
  Losses: number;
  Name: string;
  Points: number;
  PrevRank: number;
  Rank: number;
  Rank_Stat: number;
  Season: number;
  Tier: number;
  Trend: number;
  Wins: number;
}

export interface RankedJoust {
  Leaves: number;
  Losses: number;
  Name: string;
  Points: number;
  PrevRank: number;
  Rank: number;
  Rank_Stat: number;
  Season: number;
  Tier: number;
  Trend: number;
  Wins: number;
}

export interface RankedJoustController {
  Leaves: number;
  Losses: number;
  Name: string;
  Points: number;
  PrevRank: number;
  Rank: number;
  Rank_Stat: number;
  Season: number;
  Tier: number;
  Trend: number;
  Wins: number;
}

export interface Player {
  ActivePlayerId: number;
  Avatar_URL: string;
  Created_Datetime: string;
  HoursPlayed: number;
  Id: number;
  Last_Login_Datetime: string;
  Leaves: number;
  Level: number;
  Losses: number;
  MasteryLevel: number;
  MergedPlayers?: any;
  Name: string;
  Personal_Status_Message: string;
  Rank_Stat_Conquest: number;
  Rank_Stat_Conquest_Controller: number;
  Rank_Stat_Duel: number;
  Rank_Stat_Duel_Controller: number;
  Rank_Stat_Joust: number;
  Rank_Stat_Joust_Controller: number;
  RankedConquest: RankedConquest;
  RankedConquestController: RankedConquestController;
  RankedDuel: RankedDuel;
  RankedDuelController: RankedDuelController;
  RankedJoust: RankedJoust;
  RankedJoustController: RankedJoustController;
  Region: string;
  TeamId: number;
  Team_Name: string;
  Tier_Conquest: number;
  Tier_Duel: number;
  Tier_Joust: number;
  Total_Achievements: number;
  Total_Worshippers: number;
  Wins: number;
  hz_gamer_tag?: any;
  hz_player_name: string;
}
