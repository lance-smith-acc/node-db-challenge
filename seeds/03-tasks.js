
exports.seed = function(knex) {
  return knex('tasks').insert([
        {
          id: 1, 
          taskName: 'Fix printer', 
          description: 'Printer is jammed', 
          notes:"Too many cat pictures in printer",
          completed:false, 
          projectID:1
        },

        {
          id: 2, 
          taskName: 'Put paper in printer', 
          description: 'Printer is empty', 
          notes:"Too many cat pictures in printer",
          completed:true, 
          projectID:1
        },

        {
          id:3,
          taskName: 'Fix printer', 
          description: 'Printer is jammed', 
          notes:"Too many cat pictures in printer",
          completed:false,
          projectID:2
        },
  ]);
};
