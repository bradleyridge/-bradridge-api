"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (Model, state) => new Model().save(state, {
  method: 'insert'
});

exports.default = _default;
module.exports = exports.default;