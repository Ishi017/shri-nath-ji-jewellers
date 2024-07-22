const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const session = require("express-session");

require("dotenv").config();
const routes = require("./routes");
const UserModel = require("./models/Users");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_LINK,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "ddlbljdaljbaljbludkbdg",
    resave: false,
    saveUninitialized: true,
  })
);


app.get("/", (req, res) => {
  res.send("Welcome to the application!");
});

// setuppassport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy(
    {
      clientID: process.env.GOOGLE_OAUTH_CLIENTID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENTSECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await UserModel.findOne({ googleId: profile.id });
        if (!user) {
          user = await UserModel.findOne({ email: profile.emails[0].value });
        }

        if (user) {
          user.googleId = profile.id;
          user.name = profile.displayName;
          user.image = profile.photos[0].value;

          await user.save();
        } else {
          user = new UserModel({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
          });

          await user.save();
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/login/success", async (req, res) => {
  if (req.user) {
    res.status(200).json({ message: "user Login", user: req.user });
  } else {
    res.status(400).json({ message: "Not Authorized" });
  }
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);



app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: `${process.env.FRONTEND_LINK}/mens-category`,
    failureRedirect: `${process.env.FRONTEND_LINK}`,
  })
);

app.use("/", routes);

mongoose
  .connect(`mongodb+srv://${process.env.DB_CONNECTION_STRING}`)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.listen(5174, () => {
  console.log("Server started on PORT 5174");
});
