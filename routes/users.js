var express = require('express');
var router = express.Router();

/* GET /users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res) {
	res.render('newUser', {})
})

router.post('/', function(req, res) {
	// add new user to db
})

module.exports = router;
