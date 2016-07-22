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