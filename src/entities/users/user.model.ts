import { Schema, model } from "mongoose";
import { User } from "../../../shared/user";

const stringWithReqAndUnique = {
  type: String,
  required: true,
  unique: true,
};
const userSchema = new Schema<User>(
  {
    id: stringWithReqAndUnique,
    username: stringWithReqAndUnique,
    email: stringWithReqAndUnique,
    steamId: {
      type: String,
      unique: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    inGameUsername: {
      type: String,
      unique: true,
    },
    karma: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const UserModel = model<User>("User", userSchema);
