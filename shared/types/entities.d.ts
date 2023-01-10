export interface Achievements {
  _id: string;
  AssistedKills: number;
  CampsCleared: number;
  Deaths: number;
  DivineSpree: number;
  DoubleKills: number;
  FireGiantKills: number;
  FirstBloods: number;
  GodLikeSpree: number;
  GoldFuryKills: number;
  Id: number;
  ImmortalSpree: number;
  KillingSpree: number;
  MinionKills: number;
  Name: string;
  PentaKills: number;
  PhoenixKills: number;
  PlayerKills: number;
  QuadraKills: number;
  RampageSpree: number;
  ShutdownSpree: number;
  SiegeJuggernautKills: number;
  TowerKills: number;
  TripleKills: number;
  UnstoppableSpree: number;
  WildJuggernautKills: number;
  savedAt: Date;
}
// build
export interface Build {
  authorId: number;
  godId: number;
  upvotes?: number;
  downvotes?: number;
  items: string[];
  mode: number;
  _id: string;
  savedAt: Date;
  updatedAt: Date;
}
// god
export interface Menuitem {
  description: string;
  value: string;
}

export interface Rankitem {
  description: string;
  value: string;
}

export interface Description {
  cooldown: string;
  cost: string;
  description: string;
  menuitems: Menuitem[];
  rankitems: Rankitem[];
}

export interface Ability {
  Description: Description;
  Id: number;
  Summary: string;
  URL: string;
}

export interface God {
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  AbilityId1: number;
  AbilityId2: number;
  AbilityId3: number;
  AbilityId4: number;
  AbilityId5: number;
  Ability_1: Ability;
  Ability_2: Ability;
  Ability_3: Ability;
  Ability_4: Ability;
  Ability_5: Ability;
  AttackSpeed: number;
  AttackSpeedPerLevel: number;
  AutoBanned: string;
  Cons: string;
  HP5PerLevel: number;
  Health: number;
  HealthPerFive: number;
  HealthPerLevel: number;
  Lore: string;
  MP5PerLevel: number;
  MagicProtection: number;
  MagicProtectionPerLevel: number;
  MagicalPower: number;
  MagicalPowerPerLevel: number;
  Mana: number;
  ManaPerFive: number;
  ManaPerLevel: number;
  Name: string;
  OnFreeRotation: string;
  Pantheon: string;
  PhysicalPower: number;
  PhysicalPowerPerLevel: number;
  PhysicalProtection: number;
  PhysicalProtectionPerLevel: number;
  Pros: string;
  Roles: string;
  Speed: number;
  Title: string;
  Type: string;
  abilityDescription1: Description;
  abilityDescription2: Description;
  abilityDescription3: Description;
  abilityDescription4: Description;
  abilityDescription5: Description;
  basicAttack: Description;
  godAbility1_URL: string;
  godAbility2_URL: string;
  godAbility3_URL: string;
  godAbility4_URL: string;
  godAbility5_URL: string;
  godCard_URL: string;
  godIcon_URL: string;
  id: number;
  latestGod: string;
  _id: string;
  savedAt: Date;
}

export interface ItemDescription {
  Description: string;
  Menuitems: Menuitem[];
  SecondaryDescription?: any;
}

export interface Item {
  ActiveFlag: string;
  ChildItemId: number;
  DeviceName: string;
  IconId: number;
  ItemDescription: ItemDescription;
  ItemId: number;
  ItemTier: number;
  Price: number;
  RestrictedRoles: string;
  RootItemId: number;
  ShortDesc: string;
  StartingItem: boolean;
  Type: string;
  itemIcon_URL: string;
  _id: string;
  savedAt: Date;
}

// player
export interface stats {
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
  RankedConquest: stats;
  RankedConquestController: stats;
  RankedDuel: stats;
  RankedDuelController: stats;
  RankedJoust: stats;
  RankedJoustController: stats;
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
  _id: string;
  savedAt: Date;
}
// user
export interface User {
  username: string;
  email: string;
  steamId: string;
  inGameUsername: string;
  karma: number;
  googleId: string;
  active: true;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface createUserInterface {
  googleId: string;
  name: string;
  email: string | undefined;
  username: string | undefined;
}
