"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.schemaValidators = void 0;

var _getDataType = _interopRequireDefault(require("../utils/getDataType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

const schemaValidators = {
  checkType: type => data => (0, _getDataType.default)(type, data)
};
exports.schemaValidators = schemaValidators;

var _addValidator = new WeakSet();

var _checkType = new WeakSet();

class Schema {
  constructor({
    type,
    validators
  }) {
    _checkType.add(this);

    _addValidator.add(this);

    this.type = type;
    this.validators = validators;
    this.checks = [];

    _classPrivateMethodGet(this, _checkType, _checkType2).call(this);
  }

  isValid(data) {
    return this.checks.every(check => check(data));
  }

  required() {
    _classPrivateMethodGet(this, _addValidator, _addValidator2).call(this, this.validators.required(this.type));

    return this;
  }

}

exports.default = Schema;

function _addValidator2(validator) {
  this.checks.push(validator);
}

function _checkType2() {
  _classPrivateMethodGet(this, _addValidator, _addValidator2).call(this, schemaValidators.checkType(this.type));

  return this;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9zY2hlbWEuanMiXSwibmFtZXMiOlsic2NoZW1hVmFsaWRhdG9ycyIsImNoZWNrVHlwZSIsInR5cGUiLCJkYXRhIiwiU2NoZW1hIiwiY29uc3RydWN0b3IiLCJ2YWxpZGF0b3JzIiwiY2hlY2tzIiwiaXNWYWxpZCIsImV2ZXJ5IiwiY2hlY2siLCJyZXF1aXJlZCIsInZhbGlkYXRvciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRU8sTUFBTUEsZ0JBQWdCLEdBQUc7QUFDOUJDLEVBQUFBLFNBQVMsRUFBR0MsSUFBRCxJQUFXQyxJQUFELElBQVUsMEJBQVlELElBQVosRUFBa0JDLElBQWxCO0FBREQsQ0FBekI7Ozs7Ozs7QUFJUSxNQUFNQyxNQUFOLENBQWE7QUFDMUJDLEVBQUFBLFdBQVcsQ0FBQztBQUFFSCxJQUFBQSxJQUFGO0FBQVFJLElBQUFBO0FBQVIsR0FBRCxFQUF1QjtBQUFBOztBQUFBOztBQUNoQyxTQUFLSixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLSSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkOztBQUNBO0FBQ0Q7O0FBV0RDLEVBQUFBLE9BQU8sQ0FBQ0wsSUFBRCxFQUFPO0FBQ1osV0FBTyxLQUFLSSxNQUFMLENBQVlFLEtBQVosQ0FBbUJDLEtBQUQsSUFBV0EsS0FBSyxDQUFDUCxJQUFELENBQWxDLENBQVA7QUFDRDs7QUFFRFEsRUFBQUEsUUFBUSxHQUFHO0FBQ1QsMkVBQW1CLEtBQUtMLFVBQUwsQ0FBZ0JLLFFBQWhCLENBQXlCLEtBQUtULElBQTlCLENBQW5COztBQUNBLFdBQU8sSUFBUDtBQUNEOztBQXhCeUI7Ozs7d0JBUVhVLFMsRUFBVztBQUN4QixPQUFLTCxNQUFMLENBQVlNLElBQVosQ0FBaUJELFNBQWpCO0FBQ0Q7O3VCQUVhO0FBQ1oseUVBQW1CWixnQkFBZ0IsQ0FBQ0MsU0FBakIsQ0FBMkIsS0FBS0MsSUFBaEMsQ0FBbkI7O0FBQ0EsU0FBTyxJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0RGF0YVR5cGUgZnJvbSAnLi4vdXRpbHMvZ2V0RGF0YVR5cGUnO1xuXG5leHBvcnQgY29uc3Qgc2NoZW1hVmFsaWRhdG9ycyA9IHtcbiAgY2hlY2tUeXBlOiAodHlwZSkgPT4gKGRhdGEpID0+IGdldERhdGFUeXBlKHR5cGUsIGRhdGEpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IoeyB0eXBlLCB2YWxpZGF0b3JzIH0pIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IHZhbGlkYXRvcnM7XG4gICAgdGhpcy5jaGVja3MgPSBbXTtcbiAgICB0aGlzLiNjaGVja1R5cGUoKTtcbiAgfVxuXG4gICNhZGRWYWxpZGF0b3IgKHZhbGlkYXRvcikge1xuICAgIHRoaXMuY2hlY2tzLnB1c2godmFsaWRhdG9yKVxuICB9XG5cbiAgI2NoZWNrVHlwZSAoKSB7XG4gICAgdGhpcy4jYWRkVmFsaWRhdG9yKHNjaGVtYVZhbGlkYXRvcnMuY2hlY2tUeXBlKHRoaXMudHlwZSkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNWYWxpZChkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tzLmV2ZXJ5KChjaGVjaykgPT4gY2hlY2soZGF0YSkpO1xuICB9XG5cbiAgcmVxdWlyZWQoKSB7XG4gICAgdGhpcy4jYWRkVmFsaWRhdG9yKHRoaXMudmFsaWRhdG9ycy5yZXF1aXJlZCh0aGlzLnR5cGUpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl19