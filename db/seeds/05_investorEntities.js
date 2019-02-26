
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('investorEntities').del()
    .then(function () {
      // Inserts seed entries
      return knex('investorEntities').insert([
        {investor_id: 1, name: 'nugman222', address: '1234 Pong Lane', city: 'Mesa', state: 'Arizona', contactNumber: '111-111-1111', mobileNumber: '111-111-1111', entityNotes: 'secondary thingy'},
      ]);
    });
};
