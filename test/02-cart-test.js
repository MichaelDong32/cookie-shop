var cart = require('../models/cart')
var test = require('tape')

test('Cart test works', function(t) {
	t.ok(1, 'test works')
	t.end()
})

test('Get full cart for user id', function(t) {
	cart.getUserFullCart(1)
		.then(function(data){
			console.log('user:',data)
			t.ok(1, 'Got data')
		})
		.catch(function(error){
      t.ok(false, error)
    })
	t.end()
})