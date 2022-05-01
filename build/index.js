"use strict";

var _config = _interopRequireDefault(require("./config"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(`Init app with env:\n ${JSON.stringify(_config.default, null, 4)}\n`);

_app.default.listen(_config.default.port);