"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const config = require('12factor-config');

var _default = config({
  nodeEnv: {
    env: 'NODE_ENV',
    type: 'string',
    default: 'development' // default value if not in .env

  },
  host: {
    env: 'HOST',
    type: 'string',
    default: 'http://localhost'
  },
  port: {
    env: 'PORT',
    default: 5000
  }
});

exports.default = _default;
module.exports = exports.default;