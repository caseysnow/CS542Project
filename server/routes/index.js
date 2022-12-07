
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

router.get('/userSettings', async (req, res, next) => {
    res.sendFile('server/views/userSettings.html', {root: '.'});
});

router.get('/userFavorites/:username', async (req, res, next) => {
    let results;
    try{
        results = await db.favoritesList(req.params.username);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/userReviews/:username', async (req, res, next) => {
    let results;
    try{
        results = await db.reviewsList(req.params.username);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/productquery/', async (req, res, next) => {
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

router.get('/newUser', async (req, res, next) => {
    res.sendFile('server/views/newUser.html', {root: '.'});
});

// router.get('/product/:product_id', async (req, res, next) => {
//     let results;
//     try{
//         results = await db.product(req.query.id);
//         // res.sendFile('server/views/product.html', {root: '.'});
//         res.json(results);
//     }catch(e){
//         console.log(e);
//         res.sendStatus(500);
//     }
// });

router.get('/reviewquery/', async (req, res, next) => {
    let results;
    try{
        results = await db.customerReview(req.query.id);
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

router.post('/favoriteAdded', async (req, res, next) => {
    let results;
    console.log("in here");
    try{
        results = await db.addFavorite(req.query.username, req.query.id);
        res.send(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/reviewLeft', async (req, res, next) => {
    let results;
    console.log(req.query.stars);
    try{
        results = await db.addReview(req.query.username, req.query.id, req.query.stars, req.query.review);
        res.send(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/addToCart', async (req, res, next) => {
    let results;
    console.log("in here");
    console.log(req.query.id)
    try{
        results = await db.addToCart(req.query.username, 1, req.query.id);
        res.send(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/deleteFromCart', async (req, res, next) => {
    let results;
    console.log(req.query.id)
    try{
        results = await db.removeFromCart(req.query.username, req.query.product_id);
        // console.log(results);
        res.send(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
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

router.post('/newCart/:username', async (req, res, next) => {
    
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

router.get('/login', async (req, res, next) => {
    
    console.log(req.query.uname);
    console.log(req.query.psw);

    let results;
        try{
            results = await db.login(req.query.uname, req.query.psw);
            res.json(results);
        }
        catch(e){
            console.log(e);
            console.log(e.sqlMessage);
            res.send(e);
        }
});

router.post('/pleaseWork', async (req, res, next) => {
    
    console.log(req.query.uname);
    console.log(req.query.psw);
    console.log(req.query.admin);
    console.log(req.query.addr);

    let results;
        try{
            results = await db.addUser(req.query.uname, req.query.psw, req.query.admin, req.query.addr);
            res.send(results);
            console.log('user added');
            // console.log(results);
        }catch(e){
            console.log(e);
        }
});


module.exports = router; 