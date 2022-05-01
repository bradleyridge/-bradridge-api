"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (Model, id, options = {
  require: false
}) => new Model({
  id
}).fetch(options);

exports.default = _default;
module.exports = exports.default;