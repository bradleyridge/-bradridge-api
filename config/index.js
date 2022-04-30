const config = require('12factor-config');

export default config({
  nodeEnv: {
    env: 'NODE_ENV',
    type: 'string',
    default: 'development', // default value if not in .env
  },
  host: {
    env: 'HOST',
    type: 'string',
    default: 'http://localhost',
  },
  port: {
    env: 'PORT',
    default: 5000,
  },
});