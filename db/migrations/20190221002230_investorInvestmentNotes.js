exports.up = function(knex, Promise) {
  return knex.schema.createTable('investorInvestmentNotes', (table) => {
      table.increments();
      table.integer('investor_id')
     .references('id')
     .inTable('investors')
     .onDelete('CASCADE')
     .notNullable()
     .index();
     table.integer('investment_id')
     .references('id')
     .inTable('investments')
     .onDelete('CASCADE')
     .notNullable()
     .index();
      table.string('noteTitle');
      table.string('noteBody');
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('investorInvestmentNotes')
};
