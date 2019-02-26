
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('investments').del()
    .then(function () {
      // Inserts seed entries
      return knex('investments').insert([
        {category: 'Mixed Use', grouping: 'Other', name: 'Boo', briefDescription: 'This is a test', purchasePrice: '3,000,000', sellingPrice: '15,000,000', grossReturn: '12,000,000', netInvestorReturn: '10,000,000', purchaseDate: '02/02/2012', state: 'Arizona', county: 'Maricopa', city: 'Mesa', location: 'Corner of your butt', projectSize: 'Hugh Jass', status: 'Sold', soldDate: '10/22/2018', detailedDescription: 'Big Property', notesForInvestors: 'Made Us Hella Cash Money',},
        {category: 'Mixed Use', grouping: 'Other', name: 'Yah', briefDescription: 'This is a test', purchasePrice: '3,000,000', sellingPrice: '15,000,000', grossReturn: '12,000,000', netInvestorReturn: '10,000,000', purchaseDate: '02/02/2012', state: 'Arizona', county: 'Maricopa', city: 'Mesa', location: 'Corner of your butt', projectSize: 'Hugh Jass', status: 'Sold', soldDate: '10/22/2018', detailedDescription: 'Big Property', notesForInvestors: 'Made Us Hella Cash Money',},
        {category: 'Mixed Use', grouping: 'Other', name: 'Hell', briefDescription: 'This is a test', purchasePrice: '3,000,000', sellingPrice: '15,000,000', grossReturn: '12,000,000', netInvestorReturn: '10,000,000', purchaseDate: '02/02/2012', state: 'Arizona', county: 'Maricopa', city: 'Mesa', location: 'Corner of your butt', projectSize: 'Hugh Jass', status: 'Sold', soldDate: '10/22/2018', detailedDescription: 'Big Property', notesForInvestors: 'Made Us Hella Cash Money',},
        {category: 'Mixed Use', grouping: 'Other', name: 'Yeah', briefDescription: 'This is a test', purchasePrice: '3,000,000', sellingPrice: '15,000,000', grossReturn: '12,000,000', netInvestorReturn: '10,000,000', purchaseDate: '02/02/2012', state: 'Arizona', county: 'Maricopa', city: 'Mesa', location: 'Corner of your butt', projectSize: 'Hugh Jass', status: 'Sold', soldDate: '10/22/2018', detailedDescription: 'Big Property', notesForInvestors: 'Made Us Hella Cash Money',},
        {category: 'Mixed Use', grouping: 'Other', name: 'Brother', briefDescription: 'This is a test', purchasePrice: '3,000,000', sellingPrice: '15,000,000', grossReturn: '12,000,000', netInvestorReturn: '10,000,000', purchaseDate: '02/02/2012', state: 'Arizona', county: 'Maricopa', city: 'Mesa', location: 'Corner of your butt', projectSize: 'Hugh Jass', status: 'Sold', soldDate: '10/22/2018', detailedDescription: 'Big Property', notesForInvestors: 'Made Us Hella Cash Money',},
        {category: 'Mixed Use', grouping: 'Other', name: 'Yikers', briefDescription: 'This is a test', purchasePrice: '3,000,000', sellingPrice: '15,000,000', grossReturn: '12,000,000', netInvestorReturn: '10,000,000', purchaseDate: '02/02/2012', state: 'Arizona', county: 'Maricopa', city: 'Mesa', location: 'Corner of your butt', projectSize: 'Hugh Jass', status: 'Sold', soldDate: '10/22/2018', detailedDescription: 'Big Property', notesForInvestors: 'Made Us Hella Cash Money',},
      ]);
    });
};
