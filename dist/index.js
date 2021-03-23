"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _string = _interopRequireWildcard(require("./types/string"));

var _number = _interopRequireWildcard(require("./types/number"));

var _array = _interopRequireWildcard(require("./types/array"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Validator {
  constructor({
    type
  }) {
    this.type = type;
    this.validators = {
      string: _string.stringValidators,
      number: _number.numberValidators,
      array: _array.arrayValidators
    };
  }

}

exports.default = Validator;

_defineProperty(Validator, "string", () => new _string.default());

_defineProperty(Validator, "number", () => new _number.default());

_defineProperty(Validator, "array", () => new _array.default());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJWYWxpZGF0b3IiLCJjb25zdHJ1Y3RvciIsInR5cGUiLCJ2YWxpZGF0b3JzIiwic3RyaW5nIiwic3RyaW5nVmFsaWRhdG9ycyIsIm51bWJlciIsIm51bWJlclZhbGlkYXRvcnMiLCJhcnJheSIsImFycmF5VmFsaWRhdG9ycyIsIlN0cmluZ1NjaGVtYSIsIk51bWJlclNjaGVtYSIsIkFycmF5U2NoZW1hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRWUsTUFBTUEsU0FBTixDQUFnQjtBQUM3QkMsRUFBQUEsV0FBVyxDQUFDO0FBQUVDLElBQUFBO0FBQUYsR0FBRCxFQUFXO0FBQ3BCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFVBQUwsR0FBa0I7QUFDaEJDLE1BQUFBLE1BQU0sRUFBRUMsd0JBRFE7QUFFaEJDLE1BQUFBLE1BQU0sRUFBRUMsd0JBRlE7QUFHaEJDLE1BQUFBLEtBQUssRUFBRUM7QUFIUyxLQUFsQjtBQUtEOztBQVI0Qjs7OztnQkFBVlQsUyxZQVVILE1BQU0sSUFBSVUsZUFBSixFOztnQkFWSFYsUyxZQVlILE1BQU0sSUFBSVcsZUFBSixFOztnQkFaSFgsUyxXQWNKLE1BQU0sSUFBSVksY0FBSixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmluZ1NjaGVtYSwgeyBzdHJpbmdWYWxpZGF0b3JzIH0gZnJvbSAnLi90eXBlcy9zdHJpbmcnO1xuaW1wb3J0IE51bWJlclNjaGVtYSwgeyBudW1iZXJWYWxpZGF0b3JzIH0gZnJvbSAnLi90eXBlcy9udW1iZXInO1xuaW1wb3J0IEFycmF5U2NoZW1hLCB7IGFycmF5VmFsaWRhdG9ycyB9IGZyb20gJy4vdHlwZXMvYXJyYXknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3Rvcih7IHR5cGUgfSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy52YWxpZGF0b3JzID0ge1xuICAgICAgc3RyaW5nOiBzdHJpbmdWYWxpZGF0b3JzLFxuICAgICAgbnVtYmVyOiBudW1iZXJWYWxpZGF0b3JzLFxuICAgICAgYXJyYXk6IGFycmF5VmFsaWRhdG9ycyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHN0cmluZyA9ICgpID0+IG5ldyBTdHJpbmdTY2hlbWEoKTtcblxuICBzdGF0aWMgbnVtYmVyID0gKCkgPT4gbmV3IE51bWJlclNjaGVtYSgpO1xuXG4gIHN0YXRpYyBhcnJheSA9ICgpID0+IG5ldyBBcnJheVNjaGVtYSgpO1xufVxuIl19