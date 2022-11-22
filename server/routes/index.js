
const express = require('express');
const db = require('../db')

const router = express.Router();


// router.get('/',function(req,res) {
    
//   });

router.get('/', async (req, res, next) => {
    try{
        let results = await db.all();
        // res.json(results);
        
        res.sendFile('/Users/caseysnow/Desktop/bum/server/views/index.html');
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
});

router.get('/cart/', async (req, res, next) => {
    res.sendFile('/Users/caseysnow/Desktop/bum/server/views/cart.html');
});


router.get('/cart/:username', async (req, res, next) => {
    
    let results;
    try{
        results = await db.cart(req.params.username);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/results', async (req, res, next) => {
    
    console.log(req.query.searchInput);
    let results;
    try{
        results = await db.productByCat(req.query.searchInput);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});


module.exports = router; 