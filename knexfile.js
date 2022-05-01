// Should come with install of pg 
const parse = require("pg-connection-string").parse;

module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    searchPath: process.env.DATABASE_SCHEMA || 'public',
    migrations: { directory: './lib/database/migrations' },
    seeds: { directory: './lib/database/seeds/development' },
  },
  production: {
    client: 'postgresql',
    // connection: `${process.env.DATABASE_URL}?ssl=true`,
    connection: {
      ...parse(process.env.DATABASE_URL),
      rejectUnauthorized: false,
    },
    searchPath: process.env.DATABASE_SCHEMA || 'public',
    migrations: { directory: './lib/database/migrations' },
    seeds: { directory: './lib/database/seeds/production' },
  }
};
