var db = require('../models/db')

function getUserFullCart(id) {
	return new Promise(function(resolve, reject) {
		db.getUserCart(id)
			.then(function(cart) {
				console.log('cart!!!',cart)
				db.getCart(cart[0].id)
					.then(function(fullCart){
						resolve(fullCart)
					})
					.catch(function(error){
						reject(error)
					})
			})
			.catch(function(error){
				reject(error)
			})

	})
}

module.exports = {
	getUserFullCart
}