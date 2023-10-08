const express = require("express");
const connect = require("../src/configs/db");
const app = express();
require("dotenv").config();
const passport = require("./configs/google_oauth");
const productapiController = require("../src/controller/productapi.controller");
const port = process.env.PORT || 2345;
//for form work
app.use(
  express.urlencoded({
    extended: true,
  })
);
//end

const { signup, login } = require("../src/controller/auth.controler");
const homeController = require("../src/controller/home.controller");
const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
app.post("/login", signup);
app.post("/home", login);
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
  }),
  (req, res) => {
    const { first_name, last_name } = req.user;
    let displayName = first_name + " " + last_name;
    return res.render("users/index.ejs", { displayName });
  }
);

app.use(express.json());
app.use("/products", productapiController);
app.use("/home", homeController);
app.use("/login", async (req, res) => {
  return res.render("users/login.ejs");
});

app.get("/", async (req, res) => {
  const displayName = req.user
    ? req.user.first_name + " " + req.user.last_name
    : null;
  return res.render("users/index.ejs", { displayName });
});

app.get("/thankyou", async (req, res) => {
  return res.render("users/thankyou.ejs");
});

app.use("/checkout", async (req, res) => {
  return res.render("users/check.ejs");
});

app.use("/cart", async (req, res) => {
  return res.render("users/cart.ejs");
});

app.use("/signup", async (req, res) => {
  return res.render("users/signup.ejs");
});

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, async () => {
  try {
    connect();
    console.log("Listening Port 2345");
  } catch (err) {
    console.log(err.message);
  }
});
