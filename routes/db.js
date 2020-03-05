var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("Into controller");
    const uri = "mongodb://abinaya:abinaya123@ds163822.mlab.com:63822/heroku_35jpdx04";
    try {
        var result = [];
         MongoClient.connect(uri, function(err, db) {
             if(err) throw err;
             db.collection('user_info', function (err, collection) {
                 collection.find().toArray(function(err, items) {
                     if(err) throw err;
                     result.push(items);
                     res.render("db", {"items": result});
                 });

             });
         });

    } catch (e) {
        console.error(e);
    }

});

module.exports = router;

