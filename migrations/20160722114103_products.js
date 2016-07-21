
exports.up = function(knex, Promise) {
	console.log('create table')
	return knex.schema.createTableIfNotExists('products', function(table){
		table.increments('id').primary()
		table.string('name')
		table.string('description')
		table.string('price')
		table.string('image_url')
		})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('products').then(function () {
		console.log('products table was dropped')
	})
};
