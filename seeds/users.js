
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, name: 'user1', email: '', password: 'password1'}),
        knex('users').insert({id: 2, name: 'user2', email: '', password: 'password2'})
      ]);
    });
};
