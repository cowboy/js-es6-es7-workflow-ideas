"use strict";

var _core = require("babel-runtime/core-js")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

function getMsAfterDelay(ms) {
  return new _core.Promise(function (resolve) {
    setTimeout(function () {
      resolve(ms);
    }, ms);
  });
}

function resultAfter(s) {
  var ms;
  return _regeneratorRuntime.async(function resultAfter$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return getMsAfterDelay(1000 * s);

      case 2:
        ms = context$1$0.sent;
        return context$1$0.abrupt("return", "<" + ms + ">");

      case 4:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
}

function doStuff() {
  var promises, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, n, results, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, result;

  return _regeneratorRuntime.async(function doStuff$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        console.log("promises");
        promises = [];
        _iteratorNormalCompletion = true;
        _didIteratorError = false;
        _iteratorError = undefined;
        context$1$0.prev = 5;

        for (_iterator = _core.$for.getIterator([1, 3, 2, 4]); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          n = _step.value;

          console.log("push resultAfter(%d)", n);
          promises.push(resultAfter(n));
        }
        context$1$0.next = 13;
        break;

      case 9:
        context$1$0.prev = 9;
        context$1$0.t0 = context$1$0["catch"](5);
        _didIteratorError = true;
        _iteratorError = context$1$0.t0;

      case 13:
        context$1$0.prev = 13;
        context$1$0.prev = 14;

        if (!_iteratorNormalCompletion && _iterator["return"]) {
          _iterator["return"]();
        }

      case 16:
        context$1$0.prev = 16;

        if (!_didIteratorError) {
          context$1$0.next = 19;
          break;
        }

        throw _iteratorError;

      case 19:
        return context$1$0.finish(16);

      case 20:
        return context$1$0.finish(13);

      case 21:
        console.log(promises);

        console.log("results");
        results = [];
        _iteratorNormalCompletion2 = true;
        _didIteratorError2 = false;
        _iteratorError2 = undefined;
        context$1$0.prev = 27;
        _iterator2 = _core.$for.getIterator(promises);

      case 29:
        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
          context$1$0.next = 39;
          break;
        }

        n = _step2.value;
        context$1$0.next = 33;
        return n;

      case 33:
        result = context$1$0.sent;

        console.log("push result %s", result);
        results.push(result);

      case 36:
        _iteratorNormalCompletion2 = true;
        context$1$0.next = 29;
        break;

      case 39:
        context$1$0.next = 45;
        break;

      case 41:
        context$1$0.prev = 41;
        context$1$0.t1 = context$1$0["catch"](27);
        _didIteratorError2 = true;
        _iteratorError2 = context$1$0.t1;

      case 45:
        context$1$0.prev = 45;
        context$1$0.prev = 46;

        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
          _iterator2["return"]();
        }

      case 48:
        context$1$0.prev = 48;

        if (!_didIteratorError2) {
          context$1$0.next = 51;
          break;
        }

        throw _iteratorError2;

      case 51:
        return context$1$0.finish(48);

      case 52:
        return context$1$0.finish(45);

      case 53:
        console.log(results);

      case 54:
      case "end":
        return context$1$0.stop();
    }
  }, null, this, [[5, 9, 13, 21], [14,, 16, 20], [27, 41, 45, 53], [46,, 48, 52]]);
}

doStuff();
//# sourceMappingURL=index.js.map