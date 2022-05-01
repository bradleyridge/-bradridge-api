"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koa = _interopRequireDefault(require("koa"));

var _koaCompose = _interopRequireDefault(require("koa-compose"));

var _koaLogger = _interopRequireDefault(require("koa-logger"));

var _config = _interopRequireDefault(require("./config"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa.default();
if (_config.default.nodeEnv === 'development') app.use((0, _koaLogger.default)());
app.use((0, _koaCompose.default)(_routes.default));
var _default = app;
exports.default = _default;
module.exports = exports.default;