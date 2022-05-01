"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koaRoute = _interopRequireDefault(require("koa-route"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _posts = _interopRequireDefault(require("./posts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// routes
const routeDefinitions = [..._posts.default];
console.log(`Building ${routeDefinitions.length} routes:`);
const routes = routeDefinitions.map(({
  httpMethod,
  routePath,
  handle
}) => {
  console.log(`- ${httpMethod.toUpperCase()} ${routePath}`);
  return _koaRoute.default[httpMethod](routePath, handle);
});
var _default = [(0, _koaBodyparser.default)(), ...routes];
exports.default = _default;
module.exports = exports.default;