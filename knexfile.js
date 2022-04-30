module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    searchPath: process.env.DATABASE_SCHEMA || 'public',
    migrations: { directory: './lib/database/migrations' },
  }
};
