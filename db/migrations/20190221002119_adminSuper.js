exports.up = function(knex, Promise) {
  return knex.schema.createTable('adminSuper', (table) => {
      table.increments();
      table.string('name');
      table.string('emailAndLogin');
      table.text('password');
      table.text('city');
      table.text('state');
      table.text('contactNumber');
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('adminSuper')
};
