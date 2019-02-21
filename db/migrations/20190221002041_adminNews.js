exports.up = function(knex, Promise) {
  return knex.schema.createTable('adminNews', (table) => {
      table.increments();
      table.string('newsTitle');
      table.string('newsBody');
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('adminNews')
};
