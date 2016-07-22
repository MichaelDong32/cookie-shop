var users = require('../models/users')
var test = require('tape')

test('Test works', function(t) {
	t.ok(1, 'test works')
	t.end()
})

test('Get user from db', function(t) {
	users.getUser('test.email', 'password1')
		.then(function(data){
			console.log('user:',data)
			t.ok(1, 'Got data')
		})
		.catch(function(error){
      t.ok(false, error)
    })
	t.end()
})