require("dotenv").config();

const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(process.env.MONGODB_URL);
};
// mongodb+srv://khushboo:<password>@cluster0.cfj9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
