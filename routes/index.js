var express = require('express');
var router = express.Router();
var passport = require('passport')
var products = require('../models/db')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', {});
// });

router.get('/', ensureAuth, function(req, res, next) {
	products.getAllProducts()
	.then(function (data) {
		console.log('we made it to here', data)
		res.render('index', {data: data})
	})
	.catch(function (err) {
		console.log(err)
	})
})

router.get('/login', function (req, res) {

	res.render('login', {})
})

router.post('/login', 
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/login'
	})
)

router.get('/complete', function (req, res) {
	res.render('complete', {})
})

function ensureAuth (req, res, next) {
	if (req.isAuthenticated()) return next()
	res.redirect('/login')
}

module.exports = router;

