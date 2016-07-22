
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('products').insert({id: 1, name: 'The Good Cookie', description: 'Goodness in a cookie', price: 5.00, image_url: ''}),
        knex('products').insert({id: 2, name: 'The Crunchy Cookie', description: 'Crunchiness in a cookie', price: 5.00, image_url: ''}),
        knex('products').insert({id: 3, name: 'The Corn Cookie', description: 'Corn in a cookie', price: 5.00, image_url: ''}),
        knex('products').insert({id: 4, name: 'The Blueberry and Cream Cookie', description: 'Blueberry and cream in a cookie', price: 5.00, image_url: ''})
      ]);
    });
};
