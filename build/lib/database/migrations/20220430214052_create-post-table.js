"use strict";

const tableName = 'post';

exports.up = async function up(knex) {
  const tableAlreadyExists = await knex.schema.hasTable(tableName);

  if (tableAlreadyExists) {
    return undefined;
  }

  return knex.schema.createTable(tableName, table => {
    table.uuid('id').primary();
    table.string('title').notNullable(); // stored as text

    table.string('message').notNullable(); // stored as raw HTML

    table.timestamps(true, true);
  });
};

exports.down = knex => knex.schema.dropTableIfExists(tableName);