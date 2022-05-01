const tableName = 'tag';

exports.up = async function up(knex) {
  const tableAlreadyExists = await knex.schema.hasTable(tableName);

  if (tableAlreadyExists) {
    return undefined;
  }

  return knex.schema.createTable(tableName, (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable(); // stored as text
    table.timestamps(true, true);
  });
};

exports.down = (knex) => knex.schema.dropTableIfExists(tableName);
