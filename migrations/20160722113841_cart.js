exports.up = function(knex, Promise) {
	console.log('create table')
	return knex.schema.createTableIfNotExists('cart', function(table){
		table.increments('id').primary()
		table.string('user_id')
		table.string('complete')
		})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('cart').then(function () {
		console.log('cart table was dropped')
	})
};
