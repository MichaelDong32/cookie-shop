
exports.up = function(knex, Promise) {
	console.log('create table')
	return knex.schema.createTableIfNotExists('users', function(table){
		table.increments('id').primary()
		table.string('name')
		table.string('email')
		table.string('password')
		})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users').then(function () {
		console.log('users table was dropped')
	})
};
