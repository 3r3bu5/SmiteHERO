import { model, Schema } from "mongoose";
import { Achievements } from "../../../shared/types/entities";

const achievementSchema = new Schema<Achievements>(
  {
    AssistedKills: Number,
    CampsCleared: Number,
    Deaths: Number,
    DivineSpree: Number,
    DoubleKills: Number,
    FireGiantKills: Number,
    FirstBloods: Number,
    GodLikeSpree: Number,
    GoldFuryKills: Number,
    Id: Number,
    ImmortalSpree: Number,
    KillingSpree: Number,
    MinionKills: Number,
    Name: String,
    PentaKills: Number,
    PhoenixKills: Number,
    PlayerKills: Number,
    QuadraKills: Number,
    RampageSpree: Number,
    ShutdownSpree: Number,
    SiegeJuggernautKills: Number,
    TowerKills: Number,
    TripleKills: Number,
    UnstoppableSpree: Number,
    WildJuggernautKills: Number,
  },
  {
    timestamps: {
      createdAt: "savedAt",
      updatedAt: false,
    },
  }
);

export const AchievementsModel = model<Achievements>(
  "Achievement",
  achievementSchema
);
