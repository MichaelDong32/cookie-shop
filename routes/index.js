var express = require('express');
var router = express.Router();
var passport = require('passport')

/* GET home page. */
router.get('/', ensureAuth, function(req, res, next) {

  res.render('index', {});

  res.redirect('/login', {});
});

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
