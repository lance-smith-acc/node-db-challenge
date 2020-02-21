
exports.seed = function(knex) {
  return knex('projects').insert([
    {id: 1, projectName: 'Project 1', description: 'Description of project 1', completed:false},
    {id: 2, projectName: 'Project 2', description: 'Description of project 2', completed:true},
    {id:3, projectName: 'Project 3', completed:true}
  ]);
};
