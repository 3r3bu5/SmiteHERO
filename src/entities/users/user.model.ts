import { Schema, model, Document } from "mongoose";
import { User } from "../../../shared/user";

export type UserDocument = Document & {
  username: string;
  email: string;
  googleId: string;
  steamId: string;
  active: boolean;
  inGameUsername: string;
  karma: number;
  createdAt: string;
  updatedAt: string;
};

const stringWithReqAndUnique = {
  type: String,
  required: true,
  unique: true,
};
const userSchema = new Schema<UserDocument>(
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

export const UserModel = model<UserDocument>("User", userSchema);
