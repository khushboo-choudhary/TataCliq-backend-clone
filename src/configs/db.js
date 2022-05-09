require('dotenv').config();

const mongoose = require("mongoose")

module.exports = () => {
    return mongoose.connect(`mongodb+srv://khushboo:${process.env.DB_PASS}@cluster0.cfj9f.mongodb.net/product?retryWrites=true&w=majority`)
}
// mongodb+srv://khushboo:<password>@cluster0.cfj9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority