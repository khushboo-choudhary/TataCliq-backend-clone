const express = require('express');
// const ejs = require('ejs')
const router = express.Router();
const Product = require('../models/productapi.modle');

router.get('', async(req, res) => {
    try {
        console.log('saurav')
    return res.render("users/index.ejs");
    } catch(err) {
        return res.send('err', err.message);
    }    
})

module.exports = router;