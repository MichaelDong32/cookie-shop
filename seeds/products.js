
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('products').insert({id: 1, name: 'The Good Cookie', description: 'Goodness in a cookie', price: 2.50, image_url: 'http://milkbarstore.com/main/wp-content/uploads/2015/03/Cookies_Compost1_5001-e1430965439160.jpg'}),
        knex('products').insert({id: 2, name: 'The Crunchy Cookie', description: 'Crunchiness in a cookie', price: 2.50, image_url: 'http://milkbarstore.com/main/wp-content/uploads/2015/03/cookies_cornflake2_hi1-e1430965423870.jpg'}),
        knex('products').insert({id: 3, name: 'The Corn Cookie', description: 'Corn in a cookie', price: 4.20, image_url: 'http://milkbarstore.com/main/wp-content/uploads/2012/05/cookies_corn_2014-e1430965207857.jpg'}),
        knex('products').insert({id: 4, name: 'The Blueberry and Cream Cookie', description: 'Blueberry and cream in a cookie', price: 3.00, image_url: 'http://milkbarstore.com/main/wp-content/uploads/2015/03/Cookie_blueberry_20141-e1430965490454.jpg'})
      ]);
    });
};
