var express = require('express');
var router = express.Router();

/* GET /users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res) {
	res.render('newUser', {})
})

router.get('/:id/cart', function(req, res) {
	res.render('shoppingCart', {/* the products in the cart */})
})

module.exports = router;
