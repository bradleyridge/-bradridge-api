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
    connection: {
      connectionString: `${process.env.DATABASE_URL}?ssl=true`,
      ssl: { rejectUnauthorized: false },
    },
    searchPath: process.env.DATABASE_SCHEMA || 'public',
    migrations: { directory: './lib/database/migrations' },
    seeds: { directory: './lib/database/seeds/production' },
  }
};
