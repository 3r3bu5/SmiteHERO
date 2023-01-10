import { Router } from "express";
import passport from "passport";
import { signJWT } from "../utils/jwt";

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
      //@ts-ignore
      const jwt = signJWT({ id: req.user._id });
      return res.status(200).send({ jwt });
    }
    return res.status(500).send({ error: "Something went wrong!" });
  }
);

export default authRoute;
