var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET users listing. */
router.get('/product-list', function(req, res, next) {
  // res.send('respond with a resource');
  var sqlStmt = 'SELECT * FROM myOwnDb.APPLE_PRODUCTS ORDER BY PRODUCT_ID';
  db.query(sqlStmt, (error, resultSet)=> {
    if(error){
      console.log("Error to fetch data from products table: ", error);
      return;
    }
    res.render('product-list', {
      title: 'Apple Products Table',
      userData: resultSet
    });
  });
});

module.exports = router;
