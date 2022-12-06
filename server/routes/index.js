
const express = require('express');
const db = require('../db')
const router = express.Router();


// router.get('/',function(req,res) {
    
//   });

router.get('/', async (req, res, next) => {
    res.sendFile('server/views/index.html', {root: '.'});
});

router.get('/cart/', async (req, res, next) => {
    res.sendFile('server/views/cart.html', {root: '.'});
});

router.get('/product', async (req, res, next) => {
    res.sendFile('server/views/product.html', {root: '.'});
});

router.get('/productquery/', async (req, res, next) => {

router.get('/newUser', async (req, res, next) => {
    res.sendFile('server/views/newUser.html', {root: '.'});
});

router.get('/product/:product_id', async (req, res, next) => {
    let results;
    try{
        results = await db.product(req.query.id);
        // res.sendFile('server/views/product.html', {root: '.'});
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
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
    res.sendFile('server/views/results.html', {root: '.'});
});

router.get('/searchRes', async (req, res, next) => {
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

router.get('/newCart/:username', async (req, res, next) => {
    
    // console.log(req.query.searchInput);
    let results;
    try{
        results = await db.createCart(req.params.username);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/loggedIn', async (req, res, next) => {
    res.sendFile('server/views/loggedIn.html', {root: '.'});
});

router.get('/pleaseWork', async (req, res, next) => {
    
    // console.log(req.query.uname);
    // console.log(req.query.psw);
    // console.log(req.query.admin);
    // console.log(req.query.addr);

    let results;

    try{
        results = await db.getUsername(req.query.uname);
        console.log(results);
        // res.json(results);
        try{
            if(req.query.addr == null){
                results = await db.login(req.query.uname, req.query.psw);
                res.json(results);
            }
            else{
                results = await db.addUser(req.query.uname, req.query.psw, req.query.admin, req.query.addr);
                res.json(results);
                console.log(results);
            }
            // console.log(results);
            // user.displayUser(results);
        }catch(e){
            console.log(e.sqlMessage);
            res.send(e);

        }
    }catch(e){
        console.log(e);
        //should make this cannot find username
    }
});


module.exports = router; 