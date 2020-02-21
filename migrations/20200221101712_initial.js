
exports.up = async function(knex) {
  // Generates Project table  
  await knex.schema.createTable('projects', (table) => {
        table.increments('id');

        table
            .string('projectName')
            .unique()
            .notNullable()
            .index()

        table
            .string('description')

        table
            .boolean('completed')
            .notNullable()
            .defaultTo(false)
        })
    // Generates Resources Table
    await knex.schema.createTable('resources', (table) => {
        table.increments('id');

        table
            .string('resourceName')
            .notNullable()
            .index()

        table
            .string('description')
        })
    // Generates Tasks table
    await knex.schema.createTable('tasks', (table) => {
        table.increments('id')

        table
            .string('taskName')
            .notNullable()
            .index()

        table
            .string('description')
            .notNullable()

        table
            .string('notes')

        table
            .boolean('completed')
            .notNullable()
            .defaultTo(false)

        table
            .integer('projectID')
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
        })
    // Generates table to index resources assigned to projects
    await knex.schema.createTable('projectResources', (table) => {
        table.increments('id')

        table
            .integer('projectID')
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
        
        table
            .integer('resourceID')
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
        })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('projectResources')
    await knex.schema.dropTableIfExists('tasks')
    await knex.schema.dropTableIfExists('resources')  
    await knex.schema.dropTableIfExists('projects')
};
