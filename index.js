import express from "express";
import { rootGraphqlHTTP } from "./graphql/root.js";
import {
  googleOAuthFailureCallback,
  googleOAuthCallback,
} from "./auth/google_auth.js";
import passport from "passport";
import cookieSession from "cookie-session";

const app = express();

app.use(
  cookieSession({
    name: "google-auth-session",
    keys: ["key1", "key2"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/graphql", rootGraphqlHTTP);

app.get("/auth/google", googleOAuthCallback);

app.get("/auth/google/redirect", googleOAuthFailureCallback, (_req, res) =>
  res.redirect("/")
);

app.get("/auth/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});

app.get("/success", (req, res) => res.send(`welcome ${req.user.email}`));

app.get("/", (req, res) => {
  if (req.user == null) {
    res.send(`<a href='/auth/google'>login</a>`);
  } else {
    const { id, displayName, picture } = req.user;
    res.send(`welcome ${displayName}<br/><img src=${picture} alt='hi'/><a href='/auth/logout'>logout</a>`);
  }
});

app.listen(5000, () => console.log("Now browse to localhost:5000/graphql"));
