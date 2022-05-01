"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routePath = exports.httpMethod = exports.handle = void 0;

var Post = _interopRequireWildcard(require("../../lib/database/models/Post"));

var _utils = require("../../lib/utils");

var _constants = require("../../lib/utils/constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const routePath = '/posts';
exports.routePath = routePath;
const httpMethod = _constants.HTTP_METHODS.POST;
exports.httpMethod = httpMethod;

const handle = async ctx => {
  const {
    errors,
    state
  } = Post.validate(ctx.request.body || {});
  if (errors.length > 0) ctx.throw(_constants.STATUS_CODES.EXPECTATION_FAILED, `Failed to validate state: ${errors.join(', ')}`);
  const post = await Post.create(state);

  if (!post) {
    ctx.status = _constants.STATUS_CODES.ERROR;
    return ctx;
  }

  ctx.status = _constants.STATUS_CODES.CREATED;
  ctx.body = post.toJSON();
  return ctx;
};

exports.handle = handle;