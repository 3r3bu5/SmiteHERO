import { model, Schema, Types } from "mongoose";
import { God } from "./God";

const Menuitem = {
  description: String,
  value: String,
};

const Rankitem = {
  description: String,
  value: String,
};

const Description = {
  cooldown: String,
  cost: String,
  description: String,
  menuitems: [Menuitem],
  rankitems: [Rankitem],
};

const Ability = {
  Description: Description,
  Id: Number,
  Summary: String,
  URL: String,
};

const godSchema = new Schema<God>(
  {
    Ability1: String,
    Ability2: String,
    Ability3: String,
    Ability4: String,
    Ability5: String,
    AbilityId1: Number,
    AbilityId2: Number,
    AbilityId3: Number,
    AbilityId4: Number,
    AbilityId5: Number,
    Ability_1: Ability,
    Ability_2: Ability,
    Ability_3: Ability,
    Ability_4: Ability,
    Ability_5: Ability,
    AttackSpeed: Number,
    AttackSpeedPerLevel: Number,
    AutoBanned: String,
    Cons: String,
    HP5PerLevel: Number,
    Health: Number,
    HealthPerFive: Number,
    HealthPerLevel: Number,
    Lore: String,
    MP5PerLevel: Number,
    MagicProtection: Number,
    MagicProtectionPerLevel: Number,
    MagicalPower: Number,
    MagicalPowerPerLevel: Number,
    Mana: Number,
    ManaPerFive: Number,
    ManaPerLevel: Number,
    Name: String,
    OnFreeRotation: String,
    Pantheon: String,
    PhysicalPower: Number,
    PhysicalPowerPerLevel: Number,
    PhysicalProtection: Number,
    PhysicalProtectionPerLevel: Number,
    Pros: String,
    Roles: String,
    Speed: Number,
    Title: String,
    Type: String,
    abilityDescription1: Description,
    abilityDescription2: Description,
    abilityDescription3: Description,
    abilityDescription4: Description,
    abilityDescription5: Description,
    basicAttack: Description,
    godAbility1_URL: String,
    godAbility2_URL: String,
    godAbility3_URL: String,
    godAbility4_URL: String,
    godAbility5_URL: String,
    godCard_URL: String,
    godIcon_URL: String,
    id: Number,
    latestGod: String,
  },
  {
    timestamps: {
      createdAt: "savedAt",
    },
  }
);
godSchema.pre("save", function (next) {
  (this._id = new Types.ObjectId(this.id)), next();
});

export const GodModel = model<God>("God", godSchema);
