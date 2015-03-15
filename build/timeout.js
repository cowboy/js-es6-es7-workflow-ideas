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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aW1lb3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFBZ0IsZUFBZSxHQUFmLGVBQWU7Ozs7O0FBQXhCLFNBQVMsZUFBZSxDQUFDLEVBQUUsRUFBRTtBQUNsQyxTQUFPLFVBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQzVCLGNBQVUsQ0FBQyxZQUFNO0FBQ2YsYUFBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2IsRUFBRSxFQUFFLENBQUMsQ0FBQztHQUNSLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6InNyYy90aW1lb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldE1zQWZ0ZXJEZWxheShtcykge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKG1zKTtcbiAgICB9LCBtcyk7XG4gIH0pO1xufVxuIl19