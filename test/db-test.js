var db = require('../models/db')
var test = require('tape')

test('Test works', function(t) {
	t.ok(1, 'test works')
	t.end()
})


test('Get products from db', function(t) {
	db.getAllProducts()
		.then(function(data){
			console.log(data)
			t.ok(1, 'Got data')
		})
		.catch(function(error){
      t.ok(false, error)
    })
	t.end()
})

test('Get user data from db', function(t){
	db.getUserData(1)
		.then(function(data){
			console.log(data)
			t.ok(1)
		})
		.catch(function(error){
			t.ok(false,error)
		})
	t.end()
})

test ('Get user cart from db', function(t){
	db.getUserCart(2)
		.then(function(data){
			console.log(data)
			t.ok(1)
		})
		.catch(function(error){
			t.ok(false,error)
		})
	t.end()
})