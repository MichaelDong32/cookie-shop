
exports.up = function(knex, Promise) {
	console.log('create table')
	return knex.schema.createTableIfNotExists('cart_join', function(table){
		table.integer('cart_id')
		table.integer('product_id')
		})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('cart_join').then(function () {
		console.log('cart_join table was dropped')
	})
};
