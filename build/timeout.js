"use strict";

var _core = require("babel-runtime/core-js")["default"];

exports.getMsAfterDelay = getMsAfterDelay;
Object.defineProperty(exports, "__esModule", {
  value: true
});

function getMsAfterDelay(ms) {
  return new _core.Promise(function (resolve) {
    setTimeout(function () {
      resolve(ms);
    }, ms);
  });
}
//# sourceMappingURL=timeout.js.map