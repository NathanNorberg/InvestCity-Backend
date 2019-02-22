
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('adminSuper').del()
    .then(function () {
      // Inserts seed entries
      return knex('adminSuper').insert([
        {name: 'Nugman', emailAndLogin: 'nugnorberg@gmail.com', password: 'nugman', city: 'Mesa', state: 'Arizona', contactNumber: '123-456-7890'},
      ]);
    });
};
