"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (Model, state, {
  primaryKey = 'id'
} = {}) => new Model().where({
  [primaryKey]: state[primaryKey]
}).save(state, {
  method: 'update'
});

exports.default = _default;
module.exports = exports.default;