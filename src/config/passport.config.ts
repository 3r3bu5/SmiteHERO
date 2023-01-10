import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import { mongodbStore } from "../datastore/datastore";
import { config } from "../utils/config";
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = config;

const GoogleStrategy = passportGoogle.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      const newUser = await mongodbStore.auth({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails?.[0].value,
        username: profile.emails?.[0].value.split("@")[0],
      });
      if (newUser) {
        done(null, newUser);
      }
    }
  )
);
