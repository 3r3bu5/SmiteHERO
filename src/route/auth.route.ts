import { Router } from "express";
import passport from "passport";
import { UserDocument } from "../entities/users/user.model";
import { signJWT } from "../utils/jwt";

declare global {
  namespace Express {
    interface User extends UserDocument {
      _id?: any;
    }
  }
}
const authRoute = Router();
authRoute.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
    session: false,
  })
);

authRoute.get(
  "/auth/google/redirect",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    if (req.user) {
      const jwt = signJWT({ id: req.user._id });
      return res.status(200).send({ jwt });
    }
    return res.status(500).send({ error: "Something went wrong!" });
  }
);

export default authRoute;
