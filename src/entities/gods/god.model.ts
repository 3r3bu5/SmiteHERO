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

const itemDescription = {
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
    Ability1: {
      type: "String",
    },
    Ability2: {
      type: "String",
    },
    Ability3: {
      type: "String",
    },
    Ability4: {
      type: "String",
    },
    Ability5: {
      type: "String",
    },
    AbilityId1: {
      type: "Number",
    },
    AbilityId2: {
      type: "Number",
    },
    AbilityId3: {
      type: "Number",
    },
    AbilityId4: {
      type: "Number",
    },
    AbilityId5: {
      type: "Number",
    },
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: {
            type: "String",
          },
          cost: {
            type: "String",
          },
          description: {
            type: "String",
          },
          menuitems: {
            type: ["Mixed"],
          },
          rankitems: {
            type: ["Mixed"],
          },
        },
      },
      Id: {
        type: "Number",
      },
      Summary: {
        type: "String",
      },
      URL: {
        type: "String",
      },
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: {
            type: "String",
          },
          cost: {
            type: "String",
          },
          description: {
            type: "String",
          },
          menuitems: {
            type: ["Mixed"],
          },
          rankitems: {
            type: ["Mixed"],
          },
        },
      },
      Id: {
        type: "Number",
      },
      Summary: {
        type: "String",
      },
      URL: {
        type: "String",
      },
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: {
            type: "String",
          },
          cost: {
            type: "String",
          },
          description: {
            type: "String",
          },
          menuitems: {
            type: ["Mixed"],
          },
          rankitems: {
            type: ["Mixed"],
          },
        },
      },
      Id: {
        type: "Number",
      },
      Summary: {
        type: "String",
      },
      URL: {
        type: "String",
      },
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: {
            type: "String",
          },
          cost: {
            type: "String",
          },
          description: {
            type: "String",
          },
          menuitems: {
            type: ["Mixed"],
          },
          rankitems: {
            type: ["Mixed"],
          },
        },
      },
      Id: {
        type: "Number",
      },
      Summary: {
        type: "String",
      },
      URL: {
        type: "String",
      },
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: {
            type: "String",
          },
          cost: {
            type: "String",
          },
          description: {
            type: "String",
          },
          menuitems: {
            type: ["Mixed"],
          },
          rankitems: {
            type: ["Mixed"],
          },
        },
      },
      Id: {
        type: "Number",
      },
      Summary: {
        type: "String",
      },
      URL: {
        type: "String",
      },
    },
    AttackSpeed: {
      type: "Number",
    },
    AttackSpeedPerLevel: {
      type: "Number",
    },
    AutoBanned: {
      type: "String",
    },
    Cons: {
      type: "String",
    },
    HP5PerLevel: {
      type: "Number",
    },
    Health: {
      type: "Number",
    },
    HealthPerFive: {
      type: "Number",
    },
    HealthPerLevel: {
      type: "Number",
    },
    Lore: {
      type: "String",
    },
    MP5PerLevel: {
      type: "Number",
    },
    MagicProtection: {
      type: "Number",
    },
    MagicProtectionPerLevel: {
      type: "Number",
    },
    MagicalPower: {
      type: "Number",
    },
    MagicalPowerPerLevel: {
      type: "Number",
    },
    Mana: {
      type: "Number",
    },
    ManaPerFive: {
      type: "Number",
    },
    ManaPerLevel: {
      type: "Number",
    },
    Name: {
      type: "String",
    },
    OnFreeRotation: {
      type: "String",
    },
    Pantheon: {
      type: "String",
    },
    PhysicalPower: {
      type: "Number",
    },
    PhysicalPowerPerLevel: {
      type: "Number",
    },
    PhysicalProtection: {
      type: "Number",
    },
    PhysicalProtectionPerLevel: {
      type: "Number",
    },
    Pros: {
      type: "String",
    },
    Roles: {
      type: "String",
    },
    Speed: {
      type: "Number",
    },
    Title: {
      type: "String",
    },
    Type: {
      type: "String",
    },
    abilityDescription1: {
      itemDescription: {
        cooldown: {
          type: "String",
        },
        cost: {
          type: "String",
        },
        description: {
          type: "String",
        },
        menuitems: {
          type: ["Mixed"],
        },
        rankitems: {
          type: ["Mixed"],
        },
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: {
          type: "String",
        },
        cost: {
          type: "String",
        },
        description: {
          type: "String",
        },
        menuitems: {
          type: ["Mixed"],
        },
        rankitems: {
          type: ["Mixed"],
        },
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: {
          type: "String",
        },
        cost: {
          type: "String",
        },
        description: {
          type: "String",
        },
        menuitems: {
          type: ["Mixed"],
        },
        rankitems: {
          type: ["Mixed"],
        },
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: {
          type: "String",
        },
        cost: {
          type: "String",
        },
        description: {
          type: "String",
        },
        menuitems: {
          type: ["Mixed"],
        },
        rankitems: {
          type: ["Mixed"],
        },
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: {
          type: "String",
        },
        cost: {
          type: "String",
        },
        description: {
          type: "String",
        },
        menuitems: {
          type: ["Mixed"],
        },
        rankitems: {
          type: ["Mixed"],
        },
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: {
          type: "String",
        },
        cost: {
          type: "String",
        },
        description: {
          type: "String",
        },
        menuitems: {
          type: ["Mixed"],
        },
        rankitems: {
          type: "Array",
        },
      },
    },
    godAbility1_URL: {
      type: "String",
    },
    godAbility2_URL: {
      type: "String",
    },
    godAbility3_URL: {
      type: "String",
    },
    godAbility4_URL: {
      type: "String",
    },
    godAbility5_URL: {
      type: "String",
    },
    godCard_URL: {
      type: "String",
    },
    godIcon_URL: {
      type: "String",
    },
    id: {
      type: "Number",
    },
    latestGod: {
      type: "String",
    },
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
