
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('investmentInvestors').del()
    .then(function () {
      // Inserts seed entries
      return knex('investmentInvestors').insert([
        {investment_id: 1, investor_id: 1, capitalInvested: '30'},
        {investment_id: 1, investor_id: 2, capitalInvested: '50'},
        {investment_id: 2, investor_id: 3, capitalInvested: '60'},
      ]);
    });
};
