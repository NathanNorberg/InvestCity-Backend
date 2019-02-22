
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('investorInvestmentNotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('investorInvestmentNotes').insert([
        {investor_id: 1, investment_id: 1, noteTitle: 'Test', noteBody: 'Test test test'},
        {investor_id: 1, investment_id: 1, noteTitle: 'Testin', noteBody: 'Woooohooohoho'},
      ]);
    });
};
