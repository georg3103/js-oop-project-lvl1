"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ArrayValidators = void 0;

var _schema = _interopRequireDefault(require("./schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ArrayValidators = {
  sizeof: size => data => data.length === size,
  required: () => data => Array.isArray(data)
};
exports.ArrayValidators = ArrayValidators;

class ArraySchema extends _schema.default {
  sizeof(size) {
    this.checks.push(validations.sizeof(size));
    return this;
  }

}

exports.default = ArraySchema;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9hcnJheS5qcyJdLCJuYW1lcyI6WyJBcnJheVZhbGlkYXRvcnMiLCJzaXplb2YiLCJzaXplIiwiZGF0YSIsImxlbmd0aCIsInJlcXVpcmVkIiwiQXJyYXkiLCJpc0FycmF5IiwiQXJyYXlTY2hlbWEiLCJTY2hlbWEiLCJjaGVja3MiLCJwdXNoIiwidmFsaWRhdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLE1BQU1BLGVBQWUsR0FBRztBQUM3QkMsRUFBQUEsTUFBTSxFQUFHQyxJQUFELElBQVdDLElBQUQsSUFBVUEsSUFBSSxDQUFDQyxNQUFMLEtBQWdCRixJQURmO0FBRTdCRyxFQUFBQSxRQUFRLEVBQUUsTUFBT0YsSUFBRCxJQUFVRyxLQUFLLENBQUNDLE9BQU4sQ0FBY0osSUFBZDtBQUZHLENBQXhCOzs7QUFLUSxNQUFNSyxXQUFOLFNBQTBCQyxlQUExQixDQUFpQztBQUM5Q1IsRUFBQUEsTUFBTSxDQUFDQyxJQUFELEVBQU87QUFDWCxTQUFLUSxNQUFMLENBQVlDLElBQVosQ0FBaUJDLFdBQVcsQ0FBQ1gsTUFBWixDQUFtQkMsSUFBbkIsQ0FBakI7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFKNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJztcblxuZXhwb3J0IGNvbnN0IEFycmF5VmFsaWRhdG9ycyA9IHtcbiAgc2l6ZW9mOiAoc2l6ZSkgPT4gKGRhdGEpID0+IGRhdGEubGVuZ3RoID09PSBzaXplLFxuICByZXF1aXJlZDogKCkgPT4gKGRhdGEpID0+IEFycmF5LmlzQXJyYXkoZGF0YSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJheVNjaGVtYSBleHRlbmRzIFNjaGVtYSB7XG4gIHNpemVvZihzaXplKSB7XG4gICAgdGhpcy5jaGVja3MucHVzaCh2YWxpZGF0aW9ucy5zaXplb2Yoc2l6ZSkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXX0=