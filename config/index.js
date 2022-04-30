const config = require('12factor-config');

module.exports = config({
  nodeEnv: {
    env: 'NODE_ENV',
    type: 'string',
    required: false, // default
    default: 'develop', // default value if not in .env
    values: ['development', 'staging', 'production'], // allowed values
  },
  host: {
    env: 'HOST',
    type: 'string',
    required: false,
    default: 'localhost',
    // values: ['localhost', 'api.bradridge.dev'],
  },
  port: {
    env: 'PORT',
    default: 5000,
  },
});