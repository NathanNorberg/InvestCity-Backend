
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('investments').del()
    .then(function () {
      // Inserts seed entries
      return knex('investments').insert([
        {id: 1, category: 'Mixed Use', grouping: 'Other', name: 'Test', briefDescription: 'This is a test', purchasePrice: '$3,000,000', sellingPrice: '15,000,000', grossReturn: '12,000,000', netInvestorReturn: '10,000,000', purchaseDate: '02/02/2012', state: 'Arizona', county: 'Maricopa', city: 'Mesa', location: 'Corner of your butt', projectSize: 'Hugh Jass', status: 'Sold', soldDate: '02/02/2018', detailedDescription: 'Big Property', notesForInvestors: 'Made Us Hella Cash Money',},
        {id: 2, category: 'Mixed Use', grouping: 'Other', name: 'Test', briefDescription: 'This is a test', purchasePrice: '$3,000,000', sellingPrice: '15,000,000', grossReturn: '12,000,000', netInvestorReturn: '10,000,000', purchaseDate: '02/02/2012', state: 'Arizona', county: 'Maricopa', city: 'Mesa', location: 'Corner of your butt', projectSize: 'Hugh Jass', status: 'Sold', soldDate: '02/02/2018', detailedDescription: 'Big Property', notesForInvestors: 'Made Us Hella Cash Money',},
        {id: 3, category: 'Mixed Use', grouping: 'Other', name: 'Test', briefDescription: 'This is a test', purchasePrice: '$3,000,000', sellingPrice: '15,000,000', grossReturn: '12,000,000', netInvestorReturn: '10,000,000', purchaseDate: '02/02/2012', state: 'Arizona', county: 'Maricopa', city: 'Mesa', location: 'Corner of your butt', projectSize: 'Hugh Jass', status: 'Sold', soldDate: '02/02/2018', detailedDescription: 'Big Property', notesForInvestors: 'Made Us Hella Cash Money',},
        {id: 4, category: 'Mixed Use', grouping: 'Other', name: 'Test', briefDescription: 'This is a test', purchasePrice: '$3,000,000', sellingPrice: '15,000,000', grossReturn: '12,000,000', netInvestorReturn: '10,000,000', purchaseDate: '02/02/2012', state: 'Arizona', county: 'Maricopa', city: 'Mesa', location: 'Corner of your butt', projectSize: 'Hugh Jass', status: 'Sold', soldDate: '02/02/2018', detailedDescription: 'Big Property', notesForInvestors: 'Made Us Hella Cash Money',},
        {id: 5, category: 'Mixed Use', grouping: 'Other', name: 'Test', briefDescription: 'This is a test', purchasePrice: '$3,000,000', sellingPrice: '15,000,000', grossReturn: '12,000,000', netInvestorReturn: '10,000,000', purchaseDate: '02/02/2012', state: 'Arizona', county: 'Maricopa', city: 'Mesa', location: 'Corner of your butt', projectSize: 'Hugh Jass', status: 'Sold', soldDate: '02/02/2018', detailedDescription: 'Big Property', notesForInvestors: 'Made Us Hella Cash Money',},
        {id: 6, category: 'Mixed Use', grouping: 'Other', name: 'Test', briefDescription: 'This is a test', purchasePrice: '$3,000,000', sellingPrice: '15,000,000', grossReturn: '12,000,000', netInvestorReturn: '10,000,000', purchaseDate: '02/02/2012', state: 'Arizona', county: 'Maricopa', city: 'Mesa', location: 'Corner of your butt', projectSize: 'Hugh Jass', status: 'Sold', soldDate: '02/02/2018', detailedDescription: 'Big Property', notesForInvestors: 'Made Us Hella Cash Money',},
      ]);
    });
};
