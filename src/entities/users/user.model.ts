import { Schema, model } from "mongoose";
import { User } from "@ash/shared";

const stringWithReqAndUnique = {
  type: String,
  required: true,
  unique: true,
};
const userSchema = new Schema<User>(
  {
    username: stringWithReqAndUnique,
    email: stringWithReqAndUnique,
    steamId: {
      type: String,
      default: "",
    },
    googleId: {
      type: String,
      unique: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    inGameUsername: {
      type: String,
      default: "",
    },
    karma: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const UserModel = model<User>("User", userSchema);
