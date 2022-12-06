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

// store.user = (username) => {
//     return new Promise((resolve, reject) => {
//         pool.query('SELECT * FROM User WHERE username = ?', [username], (err, results) => {
//             if(err){
//                 return reject(err);
//             }
//             return resolve(results[0]);

//         });
//     });
// };

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
        pool.query('SELECT price, title, category FROM products_view WHERE category LIKE ?', ['%' + category + '%'], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);

        });
    });
};

store.customerReview = (username, productID) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM User WHERE product_id = ? and username = ?', [productID, username], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);

        });
    });
};



module.exports = store;