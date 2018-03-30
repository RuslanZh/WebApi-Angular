// blogRoutes.js

var express = require('express');
var app = express();
var blogRoutes = express.Router();

// // Require Item model in our routes module
// var Coin = require('../models/Coin');

// Defined get data(index or listing) route
blogRoutes.route('/').get(function (req, res) {
//    Coin.find(function (err, coins){
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.json(coins);
//     }
//   });
    res.json([
        {
            author: 'Ruslan',
            text: 'text'
        }
    ]);
});

module.exports = blogRoutes;