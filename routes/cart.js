var express = require('express');
var router = express.Router();

/* GET /cart shopping cart. */
router.get('/', function(req, res) {
	res.render('shoppingCart', {/* the products in the cart */})
})

router.post('/cart/:productId', function(req, res) {
	// add an item to the cart
})