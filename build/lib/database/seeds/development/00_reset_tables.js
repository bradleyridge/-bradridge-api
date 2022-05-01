"use strict";

const deleteNextTable = async (knex, tables) => {
  const table = tables.pop();
  console.log(`- resetting table "${table}"`);
  await knex(table).del();
  if (tables.length > 0) await deleteNextTable(knex, tables);
};

exports.seed = knex => deleteNextTable(knex, ['post']);