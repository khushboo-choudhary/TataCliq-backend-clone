require('dotenv').config();
const express = require("express");
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
}

const signup = async (req, res, next) => {

    try {
        // console.log(req.body)
    let user = await User.findOne({email: req.body.email}).lean().exec();

    if(user) {
        return res.send('User already exists')
    }

    user = await User.create(req.body);

    const Token = newToken(user);
    console.log(user, Token);
    return res.render("users/login.ejs", {user})
} catch(err) {
    return res.send(err.message)
}
}

const login = async (req, res, next) => {
    try {
        // console.log(req.body)
    let user = await User.findOne({email: req.body.email});
    // console.log(user)
    if(!user)
    return res.send('Either user id or password is incorrect');
    const match = user.checkPassword(req.body.password);
    if (!match) {
      return res.send({ message: "Either email or password is incorrect" });
    }

    const Token = newToken(user);
     return res.render("users/index.ejs", { Token });
    } catch(err) {
        return res.send(err.message)
    }
}

module.exports = {signup, login}