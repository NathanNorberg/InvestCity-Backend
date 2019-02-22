
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('adminNews').del()
    .then(function () {
      // Inserts seed entries
      return knex('adminNews').insert([
        {newsTitle: 'Big Changes Coming', newsBody: 'Stay Tuned for more information.'},
        {newsTitle: 'InvestCity', newsBody: 'This is a test news post from InvestCity.'},
        {newsTitle: 'What is News', newsBody: 'InvestCity is the new investment manager.'},
      ]);
    });
};
