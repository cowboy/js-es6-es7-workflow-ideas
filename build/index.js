"use strict";

var _core = require("babel-runtime/core-js")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var getMsAfterDelay = require("./timeout").getMsAfterDelay;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBUSxlQUFlLFdBQU8sV0FBVyxFQUFqQyxlQUFlOztBQUV2QixTQUFlLFdBQVcsQ0FBQyxDQUFDO01BQ3RCLEVBQUU7Ozs7O2VBQVMsZUFBZSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7OztBQUFwQyxVQUFFO2tEQUNLLEVBQUU7Ozs7Ozs7Q0FDZDs7QUFFRCxTQUFlLE9BQU87TUFFaEIsUUFBUSxrRkFTSCxDQUFDLEVBRE4sT0FBTyx1RkFFTCxNQUFNOzs7OztBQVhaLGVBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEIsZ0JBQVEsR0FBRyxFQUFFOzs7Ozs7QUFDakIsZ0RBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFBakIsV0FBQzs7QUFDUixpQkFBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QyxrQkFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCxlQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUV0QixlQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25CLGVBQU8sR0FBRyxFQUFFOzs7Ozs0Q0FDRixRQUFROzs7Ozs7OztBQUFiLFNBQUM7O2VBQ1csQ0FBQzs7O0FBQWhCLGNBQU07O0FBQ1YsZUFBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN0QyxlQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsZUFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7OztDQUN0Qjs7QUFFRCxPQUFPLEVBQUUsQ0FBQyIsImZpbGUiOiJzcmMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldE1zQWZ0ZXJEZWxheX0gZnJvbSAnLi90aW1lb3V0JztcblxuYXN5bmMgZnVuY3Rpb24gcmVzdWx0QWZ0ZXIocykge1xuICB2YXIgbXMgPSBhd2FpdCBnZXRNc0FmdGVyRGVsYXkoMTAwMCAqIHMpO1xuICByZXR1cm4gYDwke21zfT5gO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkb1N0dWZmKCkge1xuICBjb25zb2xlLmxvZygncHJvbWlzZXMnKTtcbiAgdmFyIHByb21pc2VzID0gW107XG4gIGZvciAobGV0IG4gb2YgWzEsIDMsIDIsIDRdKSB7XG4gICAgY29uc29sZS5sb2coJ3B1c2ggcmVzdWx0QWZ0ZXIoJWQpJywgbik7XG4gICAgcHJvbWlzZXMucHVzaChyZXN1bHRBZnRlcihuKSk7XG4gIH1cbiAgY29uc29sZS5sb2cocHJvbWlzZXMpO1xuXG4gIGNvbnNvbGUubG9nKCdyZXN1bHRzJyk7XG4gIHZhciByZXN1bHRzID0gW107XG4gIGZvciAobGV0IG4gb2YgcHJvbWlzZXMpIHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgbjtcbiAgICBjb25zb2xlLmxvZygncHVzaCByZXN1bHQgJXMnLCByZXN1bHQpO1xuICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICB9XG4gIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xufVxuXG5kb1N0dWZmKCk7XG4iXX0=