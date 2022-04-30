const config = require('12factor-config');

module.exports = config({
  nodeEnv: {
    env: 'NODE_ENV',
    type: 'string',
    default: 'development', // default value if not in .env
  },
  host: {
    env: 'HOST',
    type: 'string',
    default: 'localhost',
    // values: ['localhost', 'api.bradridge.dev'],
  },
  port: {
    env: 'PORT',
    default: 5000,
  },
});