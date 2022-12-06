const mysql = require('mysql')

const pool = mysql.createPool({
    user: 'admin',
    password:'password',
    host: 'cs542.c6tpbldt3a1p.us-east-1.rds.amazonaws.com',
    database: 'ApplianceStore'
});

let store = {}

store.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM Cart', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);

        });
    });
};

store.getUsername = (username) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM User WHERE username = ?', [username], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);

        });
    });
};

store.login = (username, password) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM User WHERE username = ? and password = ?', [username, password], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);

        });
    });
};

store.addUser = (username, password, admin, address) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO User (username, password, isAdmin, address) VALUES(?, ?, ?, ?)', [username, password, parseInt(admin), address], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);

        });
    });
};

store.cart = (username) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM Cart WHERE username = ?', [username], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);

        });
    });
};

store.createCart = (username) => {
    return new Promise((resolve, reject) => {
        const cart_id = Math.floor(Math.random()*20000);
        pool.query('INSERT INTO Cart (cart_id, username) VALUES(?, ?)', [username, cart_id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);

        });
    });
};

store.product = (productID) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM Product WHERE product_id = ?', [productID], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);

        });
    });
};

store.productByCat = (category) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT product_id, price, title, category FROM products_view WHERE category LIKE ?', ['%' + category + '%'], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);

        });
    });
};

store.customerReview = (username, productID) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT num_stars, description FROM CustomerReview WHERE username = ? and product_id = ?', [productID, username], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

store.addFavorite = (username, productID) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO Favorite (username, product_id) VALUES(?, ?)', [username, productID], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

store.favoritesList = (username) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT title FROM Product WHERE product_id IN (SELECT product_id from Favorite where username = ?)', [username], (err, results) => {
            if(err){
                return reject(err);
            }
            // console.log(results);
            return resolve(results);
        });
    });
};

store.reviewsList = (username) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT title FROM Product WHERE product_id IN (SELECT product_id FROM CustomerReview WHERE username = ?)', [username], (err, results) => {
            if(err){
                return reject(err);
            }
            console.log(results);
            return resolve(results);
        });
    });
};

store.customerReview = (productID) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT num_stars, description FROM CustomerReview WHERE product_id = ?', [productID], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};


module.exports = store;