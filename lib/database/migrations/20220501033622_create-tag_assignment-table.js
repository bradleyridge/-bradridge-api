const tableName = 'tag_assignment';

exports.up = async function up(knex) {
  const tableAlreadyExists = await knex.schema.hasTable(tableName);

  if (tableAlreadyExists) {
    return undefined;
  }

  return knex.schema.createTable(tableName, (table) => {
    table.uuid('id').primary();
    table.uuid('tag_id').references('id').on('tag').notNullable();
    table.string('parent_type').default('post');
    table.uuid('parent_id').notNullable();
    table.unique(['tag_id', 'parent_id']);
    table.timestamps(true, true);
  });
};

exports.down = (knex) => knex.schema.dropTableIfExists(tableName);
