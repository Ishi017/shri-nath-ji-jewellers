const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

require("dotenv").config();
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_LINK,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

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
