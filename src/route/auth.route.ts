import { Request, Response, Router } from "express";
import passport from "passport";
import { authMiddleware } from "../middleware/auth.midd";
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
      // @ts-ignore
      const jwt = signJWT({ id: req.user._id });
      res.setHeader("Set-Cookie", `jwt=${jwt};Path=/;Max-Age=3600`);
      return res.redirect("http://localhost:3000/auth/success");
    }
    return res.status(500).send({ error: "Something went wrong!" });
  }
);

authRoute.get("/auth/user", authMiddleware, (req: Request, res: Response) => {
  if (req.user) {
    console.log(req.user);
    // @ts-ignore
    const jwt = signJWT({ id: req.user._id });
    return res.status(200).send({ user: req.user, jwt });
  }
  return res.status(500).send({ error: "Something went wrong!" });
});

export default authRoute;
