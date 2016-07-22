
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cart_join').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cart_join').insert({cart_id: 1, product_id: 2})
      ]);
    });
};
