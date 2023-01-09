import mongoose, { model, Schema, Types } from "mongoose";
import { Build } from "../../../shared/build";

const buildSchema = new Schema<Build>(
  {
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
