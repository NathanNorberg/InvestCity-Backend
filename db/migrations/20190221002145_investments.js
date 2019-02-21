exports.up = function(knex, Promise) {
  return knex.schema.createTable('investments', (table) => {
      table.increments();
      table.string('category');
      table.text('grouping');
      table.string('name');
      table.text('briefDescription');
      table.text('purchasePrice');
      table.text('sellingPrice');
      table.text('grossReturn');
      table.text('netInvestorReturn');
      table.text('purchaseDate');
      table.text('state');
      table.text('county');
      table.text('city');
      table.text('location');
      table.text('projectSize');
      table.text('status');
      table.text('soldDate');
      table.text('detailedDescription');
      table.text('notesForInvestors');
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('investments')
};
