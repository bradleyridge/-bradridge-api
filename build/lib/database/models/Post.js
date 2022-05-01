"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.update = exports.model = exports.getById = exports.destroy = exports.create = exports.Model = void 0;

var _bookshelf = _interopRequireDefault(require("../../../config/bookshelf"));

var _utils = require("../../../lib/utils");

var _constants = require("../../../lib/utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _bookshelf.default.model('Post', {
  tableName: 'post',
  hasTimestamps: true,
  idAttribute: 'id',
  uuid: true // hidden: [], // hidden unless explicitly requested

});

exports.Model = Model;
const model = {
  id: {
    type: _constants.ATTRIBUTE_TYPES.UUID,
    required: false
  },
  title: {
    type: _constants.ATTRIBUTE_TYPES.STRING,
    required: true
  },
  message: {
    type: _constants.ATTRIBUTE_TYPES.STRING,
    required: true
  }
};
exports.model = model;

const validate = (state, options) => _utils.db.validate(model, state, options);

exports.validate = validate;

const create = state => _utils.db.create(Model, state);

exports.create = create;

const destroy = id => _utils.db.destroy(Model, id);

exports.destroy = destroy;

const getById = (id, options) => _utils.db.getById(Model, id, options);

exports.getById = getById;

const update = (state, options) => _utils.db.update(Model, state, options);

exports.update = update;