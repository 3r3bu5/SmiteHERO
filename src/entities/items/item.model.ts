import { model, Schema, Types } from "mongoose";
import { Item } from "./Item";

const itemSchema = new Schema<Item>(
  {
    ActiveFlag: String,
    ChildItemId: Number,
    DeviceName: String,
    IconId: Number,
    ItemDescription: {
      Description: String,
      Menuitems: {
        Description: String,
        Value: String,
      },
      SecondaryDescription: String,
    },
    ItemId: Number,
    ItemTier: Number,
    Price: Number,
    RestrictedRoles: String,
    RootItemId: Number,
    ShortDesc: String,
    StartingItem: Boolean,
    Type: String,
    itemIcon_URL: String,
  },
  {
    timestamps: {
      createdAt: "savedAt",
    },
  }
);
itemSchema.pre("save", function (next) {
  this._id = new Types.ObjectId(this.ItemId);
  next();
});

export const PlayerModel = model<Item>("Item", itemSchema);
