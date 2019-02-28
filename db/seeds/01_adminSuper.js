
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('adminSuper').del()
    .then(function () {
      // Inserts seed entries
      return knex('adminSuper').insert([
        {name: 'Nug', emailAndLogin: 'nug@gmail.com', password: 'nug', city: 'Mesa', state: 'Arizona', contactNumber: '123-456-7890'},
      ]);
    });
};
