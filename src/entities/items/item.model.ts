import { model, Schema, Types } from "mongoose";
import { Item } from "../../../shared/item";

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

export const ItemModel = model<Item>("Item", itemSchema);
