
exports.seed = function(knex) {
  return knex('resources').insert([
        {id: 1, resourceName: 'Printer', description: 'A printer'},
        {id: 2, resourceName: 'Stapler', description: 'It staples'},
        {id:3, resourceName: 'Conference Room'}
  ]);
};
