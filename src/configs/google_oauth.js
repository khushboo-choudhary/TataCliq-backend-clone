require("dotenv").config();
const passport = require("passport");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://tatacliq-website.onrender.com/",
      // callbackURL: "http://localhost:2345/auth/google/callback",
      passReqToCallback: true,
    },

    async function (request, accessToken, refreshToken, profile, done) {
      let user = await User.findOne({ email: profile?.email }).lean().exec();
      console.log(profile);
      if (!user) {
        user = await User.create({
          first_name: profile?.given_name,
          last_name: profile?.family_name,
          email: profile?.email,
          password: uuidv4(),
        });
      }
      // res.send(user);
      //   console.log(user);
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return done(err, user);
      // });

      // console.log("user", user);
      return done(null, user);
    }
  )
);
module.exports = passport;
