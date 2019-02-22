
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('investorEntities').del()
    .then(function () {
      // Inserts seed entries
      return knex('investorEntities').insert([
        {investor_id: 1, name: 'nugman222', entityNotes: 'secondary thingy'},
      ]);
    });
};
