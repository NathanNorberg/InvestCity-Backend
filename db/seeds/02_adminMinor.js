exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('adminMinor').del()
    .then(function () {
      // Inserts seed entries
      return knex('adminMinor').insert([
        {name: 'White Mamba', emailAndLogin: 'mikenorberg@gmail.com', password: 'mikeman', city: 'Mesa', state: 'Arizona', contactNumber: '333-333-3333'},
      ]);
    });
};
