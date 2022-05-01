"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bookshelf = _interopRequireDefault(require("bookshelf"));

var _bookshelfUuid = _interopRequireDefault(require("bookshelf-uuid"));

var _knex = _interopRequireDefault(require("knex"));

var _knexfile = _interopRequireDefault(require("../knexfile"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const knexConfiguration = _knexfile.default[_index.default.nodeEnv];
const knex = (0, _knex.default)(knexConfiguration);
const bookshelf = (0, _bookshelf.default)(knex);
bookshelf.plugin(_bookshelfUuid.default);
var _default = bookshelf;
exports.default = _default;
module.exports = exports.default;