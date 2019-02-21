
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('adminNews').del()
    .then(function () {
      // Inserts seed entries
      return knex('adminNews').insert([
        {id: 1, newsTitle: 'Big Changes Coming', newsBody: 'Stay Tuned for more information.'},
        {id: 2, newsTitle: 'InvestCity', newsBody: 'This is a test news post from InvestCity.'},
        {id: 3, newsTitle: 'What is News', newsBody: 'InvestCity is the new investment manager.'},
      ]);
    });
};
