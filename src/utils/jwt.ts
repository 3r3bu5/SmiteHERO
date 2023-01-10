import jwt from "jsonwebtoken";
import { config } from "./config";

interface jwtObject {
  id: string;
}

const JWT_SECRET = config.JWT_SECRET;

export const signJWT = (obj: jwtObject): string => {
  return jwt.sign(obj, JWT_SECRET, {
    expiresIn: "10d",
  });
};

export const verifyJWT = (token: string): jwtObject => {
  return jwt.verify(token, JWT_SECRET) as jwtObject;
};
