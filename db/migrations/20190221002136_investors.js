exports.up = function(knex, Promise) {
  return knex.schema.createTable('investors', (table) => {
      table.increments();
      table.text('name');
      table.text('entityName');
      table.text('emailAndLogin');
      table.text('confirmPassword');
      table.text('password');
      table.text('address');
      table.text('city');
      table.text('state');
      table.text('contactNumber');
      table.text('mobileNumber');
      table.text('status');
      table.text('notesForInvestors');
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('investors')
};
