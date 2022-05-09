
const mongoose =require("mongoose");

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    mainPrice : {type: Number, required: true},
    discontPrice : {type: Number, required: true},
    image: {type: String, required: true}
})

module.exports = mongoose.model('products', productSchema);