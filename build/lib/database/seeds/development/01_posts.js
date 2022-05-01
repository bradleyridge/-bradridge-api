"use strict";

const posts = [{
  id: '6fc3ad7d-2f82-4ea3-be01-92ccdd995741',
  title: 'My first post',
  message: 'Pretty interesting, right?'
}];

exports.seed = knex => {
  const tableName = 'post';
  console.log(`- seeding table "${tableName}" (${posts.length})`);
  return knex(tableName).insert(posts);
};