
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('investmentInvestors').del()
    .then(function () {
      // Inserts seed entries
      return knex('investmentInvestors').insert([
        {investment_id: 1, investor_id: 1, investorEntity_id: 2, capitalInvested: '3,000,000'},
        {investment_id: 1, investor_id: 2, investorEntity_id: 4, capitalInvested: '5,000,000'},
        {investment_id: 2, investor_id: 3, investorEntity_id: 6, capitalInvested: '6,000,000'},
        {investment_id: 2, investor_id: 4, investorEntity_id: 8, capitalInvested: '600,000'},
        {investment_id: 3, investor_id: 5, investorEntity_id: 10, capitalInvested: '500,000'},
        {investment_id: 3, investor_id: 6, investorEntity_id: 12, capitalInvested: '400,000'},
        {investment_id: 4, investor_id: 7, investorEntity_id: 14, capitalInvested: '750,000'},
        {investment_id: 4, investor_id: 8, investorEntity_id: 16, capitalInvested: '650,000'},
        {investment_id: 5, investor_id: 9, investorEntity_id: 18, capitalInvested: '1,000,000'},
        {investment_id: 5, investor_id: 10, investorEntity_id: 20, capitalInvested: '850,000'},
        {investment_id: 6, investor_id: 11, investorEntity_id: 22, capitalInvested: '600,000'},
        {investment_id: 6, investor_id: 12, investorEntity_id: 24, capitalInvested: '720,000'},
        {investment_id: 7, investor_id: 13, investorEntity_id: 26, capitalInvested: '200,000'},
        {investment_id: 7, investor_id: 1, investorEntity_id: 1, capitalInvested: '150,000'},
        {investment_id: 8, investor_id: 2, investorEntity_id: 3, capitalInvested: '225,000'},
        {investment_id: 8, investor_id: 3, investorEntity_id: 5, capitalInvested: '1,500,000'},
        {investment_id: 9, investor_id: 4, investorEntity_id: 7, capitalInvested: '2,750,000'},
        {investment_id: 9, investor_id: 5, investorEntity_id: 9, capitalInvested: '1,250,000'},
        {investment_id: 10, investor_id: 6, investorEntity_id: 11, capitalInvested: '420,000'},
        {investment_id: 10, investor_id: 7, investorEntity_id: 13, capitalInvested: '350,000'},
        {investment_id: 11, investor_id: 8, investorEntity_id: 15, capitalInvested: '650,000'},
        {investment_id: 11, investor_id: 9, investorEntity_id: 17, capitalInvested: '1,350,000'},
        {investment_id: 12, investor_id: 10, investorEntity_id: 19, capitalInvested: '2,400,000'},
        {investment_id: 12, investor_id: 11, investorEntity_id: 21, capitalInvested: '2,200,000'},
        {investment_id: 13, investor_id: 12, investorEntity_id: 23, capitalInvested: '4,500,000'},
        {investment_id: 13, investor_id: 13, investorEntity_id: 25, capitalInvested: '920,000'},
      ]);
    });
};
