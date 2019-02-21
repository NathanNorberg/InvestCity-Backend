exports.up = function(knex, Promise) {
  return knex.schema.createTable('investorEntities', (table) => {
      table.increments();
      table.integer('investor_id')
       .references('id')
       .inTable('investors')
       .onDelete('CASCADE')
       .notNullable()
       .index();
      table.string('name');
      table.string('entityNotes');
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('investorEntities')
};
