const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const session = require("express-session");
const stripe = require("stripe")(
  "sk_test_51Pko55P3UdzrLxGiA22dqcOjk02oTV0OyTG1d79SM7eWtjyDX1kPHpjFIZWlftY65Bp2HqmUqSv7DhlU4N06ms1y0006Lfu8jE"
);
require("dotenv").config();
const routes = require("./routes");
const UserModel = require("./models/Users");
const Product = require("./models/Products");
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
    cookie: {
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production", // Requires HTTPS
    },
    proxy: true,
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
      callbackURL: process.env.GOOGLE_OAUTH_REDIRECT_URI,
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

//stripe

app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
      },
      unit_amount: product.newPrice * 100,
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    billing_address_collection: "required",
    shipping_address_collection: {
      allowed_countries: ["IN", "US"], // Add more countries as needed
    },
    success_url: `${process.env.FRONTEND_LINK}`,
    cancel_url: `${process.env.FRONTEND_LINK}/cancel`,
  });

  res.json({ id: session.id });
});

//stripe webhook
const endpointSecret =
  "whsec_772004fd8c6bd26732bca52d94e1e555d590d358fa03250cff8a6a59c61527ce";

app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    console.log("Webhook verified", event);
  } catch (err) {
    console.error("Webhook Error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      console.log("Payment was successful!", session);
      break;

    case "payment_intent.payment_failed":
      const paymentIntent = event.data.object;
      console.log("Payment failed:", paymentIntent.last_payment_error?.message);
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  // Return a 200 response to acknowledge receipt of the event
  response.send().end();
});

// Route to check the payment status
app.get("/api/order-status/:sessionId", async (req, res) => {
  const { sessionId } = req.params;

  try {
    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Check if the payment was successful or failed
    if (session.payment_status === "paid") {
      return res.json({ status: "paid" });
    } else if (session.payment_status === "failed") {
      return res.json({ status: "failed" });
    } else {
      return res.json({ status: "pending" });
    }
  } catch (error) {
    console.error("Error fetching payment status:", error);
    return res.status(500).json({ status: "error", message: error.message });
  }
});
//stripe-end

//datafetch
// Get all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Backend route to get a product by ID
app.get("/product/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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
