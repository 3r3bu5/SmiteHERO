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
}
