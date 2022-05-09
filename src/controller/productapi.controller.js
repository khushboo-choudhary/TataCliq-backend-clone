
const express = require('express');
// const ejs = require('ejs')
const router = express.Router();
const Product = require('../models/productapi.modle')

router.get('', async(req, res) => {

    try {
        let value = req.query.name;
        if(value == "remanika") {
            let product = await Product.find({title: 'Remanika'});
            // console.log(product);
            return res.render("users/product.ejs", {product})
        }

        if(value == "levis") {
            let product = await Product.find({title: `Levi's`});
            // console.log(product);
            return res.render("users/product.ejs", {product})
        }
        // WES Formals
        if(value == "arrow") {
            let product = await Product.find({title: `Arrow`});
            // console.log(product);
            return res.render("users/product.ejs", {product})
        }

        if(value == "nuonman") {
            let product = await Product.find({title: `Nuon men`});
            // console.log(product);
            return res.render("users/product.ejs", {product})
        }

        if(value == "wesformals") {
            let product = await Product.find({title: `WES Formals`});
            // console.log(product);
            return res.render("users/product.ejs", {product})
        }

        if(value == "wescasuals") {
            let product = await Product.find({title: `WES Casuals`});
            // console.log(product);
            return res.render("users/product.ejs", {product})
        }

        if(value == "eta") {
            let product = await Product.find({title: `ETA`});
            // console.log(product);
            return res.render("users/product.ejs", {product})
        }
       
        if(value == "ascot") {
            let product = await Product.find({title: `Ascot`});
            // console.log(product);
            return res.render("users/product.ejs", {product})
        }

        if(value == "lacoste") {
            let product = await Product.find({title: `LACOSTE`});
            // console.log(product);
            return res.render("users/product.ejs", {product})
        }

    const product = await Product.find().lean().exec();

    return res.render("users/product.ejs", {product});
    // return res.render("users/product.ejs", JSON.stringify(product));
    } catch(err) {
        return res.status(500).send('err', err.message)
    }
})

router.post('', async(req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(200).send(product)
    } catch(err) {
        return res.status(500).send('err', err.message)
    }
})

module.exports = router;