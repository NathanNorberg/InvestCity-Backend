exports.up = function(knex, Promise) {
  return knex.schema.createTable('investmentInvestors', (table) => {
      table.increments();
      table.integer('investment_id')
           .references('id')
           .inTable('investments')
           .onDelete('CASCADE')
           .notNullable()
           .index();
      table.integer('investor_id')
           .references('id')
           .inTable('investors')
           .onDelete('CASCADE')
           .notNullable()
           .index();
      table.text('capitalInvested');
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('investmentInvestors')
};
