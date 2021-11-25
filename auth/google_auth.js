import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import fs from "fs";
import path from "path";

const __dirname = path.resolve(path.dirname(""));
const configPath = path.join(__dirname, "/config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new Strategy(
    {
      clientID: config.oauth.google.cliend_id,
      clientSecret: config.oauth.google.api_key,
      callbackURL: config.oauth.google.redirect_uri,
    },
    (accessToken, refreshToken, profile, done) => {
      const { id, displayName } = profile;
      const picture = profile.photos[0].value.replace(/_normal/, "");
      done(null, { id, displayName, picture  });
    }
  )
);

export const googleOAuthCallback = passport.authenticate("google", {
  scope: ["profile"],
});

export const googleOAuthFailureCallback = passport.authenticate("google", {
  failureRedirect: "/",
});
