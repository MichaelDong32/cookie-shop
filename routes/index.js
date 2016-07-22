var express = require('express');
var router = express.Router();
var products = require('../models/db')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', {});
// });

router.get('/', function(req, res, next) {
	products.getAllProducts()
	.then(function (data) {
		console.log('we made it to here', data)
		res.render('index', {data: data})
	})
	.catch(function (err) {
		console.log(err)
	})
});

router.get('/login', function (req, res) {
	res.render('login', {})
})

router.get('/complete', function (req, res) {
	res.render('complete', {})
})


module.exports = router;

