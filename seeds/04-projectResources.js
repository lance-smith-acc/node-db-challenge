
exports.seed = function(knex) {
  return knex('projectResources').insert([
        {id: 1, projectID:1, resourceID:1},
        {id: 2, projectID:1, resourceID:2},
        {id:3, projectID:2, resourceID:3},
  ]);
};
