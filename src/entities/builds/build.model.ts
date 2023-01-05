import mongoose, { model, Schema, Types } from "mongoose";
import { Build } from "./build";

const buildSchema = new Schema<Build>(
  {
    _id: String,
    authorId: Number,
    godId: Number,
    upvotes: Number,
    downvotes: Number,
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
    mode: Number,
  },
  { timestamps: true }
);

export const buildModel = model<Build>("Build", buildSchema);
