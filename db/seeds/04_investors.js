
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('investors').del()
    .then(function () {
      // Inserts seed entries
      return knex('investors').insert([
        {id: 1, name: 'Nathan Norberg', entityName: 'NMN', emailAndLogin: 'n@n.com', confirmPassword: 'asdf', password: 'asdf', address: '111 E 1', city: 'Mesa', state: 'Arizona', contactNumber: '111-111-1111', mobileNumber: '111-111-1111', status: 'Active', notesForInvestors: 'Super Dope dude with lots of money'},
        {id: 2, name: 'Mike Norberg', entityName: 'MSN', emailAndLogin: 'm@n.com', confirmPassword: 'asdf', password: 'asdf', address: '111 E 1', city: 'Phoenix', state: 'Arizona', contactNumber: '222-222-2222', mobileNumber: '222-222-2222', status: 'Inactive', notesForInvestors: 'MONEY MONEY MONEY'},
        {id: 3, name: 'Mindy Norberg', entityName: 'MAN', emailAndLogin: 'mn@n.com', confirmPassword: 'asdf', password: 'asdf', address: '111 E 1', city: 'Coronado', state: 'California', contactNumber: '333-333-3333', mobileNumber: '333-333-3333', status: 'Active', notesForInvestors: 'Likes to invest in medical stuffs'},
      ]);
    });
};
