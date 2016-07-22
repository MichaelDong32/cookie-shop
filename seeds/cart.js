
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cart').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cart').insert({id: 1, user_id: 'user_1', complete: 'false'}),
        knex('cart').insert({id: 2, user_id: 'user_2', complete: 'true'}),
        knex('cart').insert({id: 3, user_id: 'user_3', complete: 'false'})
      ]);
    });
};
