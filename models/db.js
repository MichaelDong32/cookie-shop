var Knex = require('knex')
var knexConfig = require('../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function getAllProducts() {
	return knex.select().table('products')
}

function getUserData (id) {
	return knex.select().table('users').where({id})
}

function getUserCart (id) {
	return knex.select().table('cart').where({user_id:id, complete:false})
}

function getCart(id) {
	return knex.from('cart_join').where({cart_id:id}).innerJoin('products', 'cart_join.product_id', 'products.id')
}

module.exports = {
	getAllProducts,
	getUserData,
	getUserCart,
	getCart
}

