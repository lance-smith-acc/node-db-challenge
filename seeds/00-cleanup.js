
exports.seed = async function(knex) {
  await knex("projectResources").truncate()
  await knex("tasks").truncate()
  await knex("resources").truncate()
  await knex("projects").truncate()
};