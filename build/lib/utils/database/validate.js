"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validator = _interopRequireDefault(require("validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validatorsByType = {
  string: value => {
    return typeof value === 'string';
  },
  integer: _validator.default.isInt,
  uuid: _validator.default.isUUID
};

const validate = (model, inputState, options = {
  errorOnRequired: true
}) => Object.keys(model).reduce((output, key) => {
  const {
    type,
    required
  } = model[key];
  const value = inputState[key];
  const {
    errors,
    state
  } = output;

  if (!value || value === '') {
    if (options.errorOnRequired && required) errors.push(`Missing required field "key"`);
    return {
      errors,
      state
    };
  }

  if (!validatorsByType[type](value)) errors.push(`Invalid value for field "${key}" (expected ${type})`);else state[key] = value;
  return {
    errors,
    state
  };
}, {
  errors: [],
  state: {}
});

var _default = validate;
exports.default = _default;
module.exports = exports.default;