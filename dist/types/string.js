"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StringValidators = void 0;

var _schema = _interopRequireWildcard(require("./schema"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StringValidators = {
  minLength: length => data => data.length >= length,
  contains: str => data => data.includes(str),
  required: type => data => _schema.schemaValidators.checkType(type)(data)
};
exports.StringValidators = StringValidators;

class StringSchema extends _schema.default {
  minLength(length) {
    this.checks.push(validations.minLength(length));
    return this;
  }

  contains(str) {
    this.checks.push(validations.contains(str));
    return this;
  }

}

exports.default = StringSchema;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9zdHJpbmcuanMiXSwibmFtZXMiOlsiU3RyaW5nVmFsaWRhdG9ycyIsIm1pbkxlbmd0aCIsImxlbmd0aCIsImRhdGEiLCJjb250YWlucyIsInN0ciIsImluY2x1ZGVzIiwicmVxdWlyZWQiLCJ0eXBlIiwic2NoZW1hVmFsaWRhdG9ycyIsImNoZWNrVHlwZSIsIlN0cmluZ1NjaGVtYSIsIlNjaGVtYSIsImNoZWNrcyIsInB1c2giLCJ2YWxpZGF0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFTyxNQUFNQSxnQkFBZ0IsR0FBRztBQUM5QkMsRUFBQUEsU0FBUyxFQUFHQyxNQUFELElBQWFDLElBQUQsSUFBVUEsSUFBSSxDQUFDRCxNQUFMLElBQWVBLE1BRGxCO0FBRTlCRSxFQUFBQSxRQUFRLEVBQUdDLEdBQUQsSUFBVUYsSUFBRCxJQUFVQSxJQUFJLENBQUNHLFFBQUwsQ0FBY0QsR0FBZCxDQUZDO0FBRzlCRSxFQUFBQSxRQUFRLEVBQUdDLElBQUQsSUFBV0wsSUFBRCxJQUFVTSx5QkFBaUJDLFNBQWpCLENBQTJCRixJQUEzQixFQUFpQ0wsSUFBakM7QUFIQSxDQUF6Qjs7O0FBTVEsTUFBTVEsWUFBTixTQUEyQkMsZUFBM0IsQ0FBa0M7QUFDL0NYLEVBQUFBLFNBQVMsQ0FBQ0MsTUFBRCxFQUFTO0FBQ2hCLFNBQUtXLE1BQUwsQ0FBWUMsSUFBWixDQUFpQkMsV0FBVyxDQUFDZCxTQUFaLENBQXNCQyxNQUF0QixDQUFqQjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVERSxFQUFBQSxRQUFRLENBQUNDLEdBQUQsRUFBTTtBQUNaLFNBQUtRLE1BQUwsQ0FBWUMsSUFBWixDQUFpQkMsV0FBVyxDQUFDWCxRQUFaLENBQXFCQyxHQUFyQixDQUFqQjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQVQ4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY2hlbWEsIHsgc2NoZW1hVmFsaWRhdG9ycyB9IGZyb20gJy4vc2NoZW1hJztcblxuZXhwb3J0IGNvbnN0IFN0cmluZ1ZhbGlkYXRvcnMgPSB7XG4gIG1pbkxlbmd0aDogKGxlbmd0aCkgPT4gKGRhdGEpID0+IGRhdGEubGVuZ3RoID49IGxlbmd0aCxcbiAgY29udGFpbnM6IChzdHIpID0+IChkYXRhKSA9PiBkYXRhLmluY2x1ZGVzKHN0ciksXG4gIHJlcXVpcmVkOiAodHlwZSkgPT4gKGRhdGEpID0+IHNjaGVtYVZhbGlkYXRvcnMuY2hlY2tUeXBlKHR5cGUpKGRhdGEpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5nU2NoZW1hIGV4dGVuZHMgU2NoZW1hIHtcbiAgbWluTGVuZ3RoKGxlbmd0aCkge1xuICAgIHRoaXMuY2hlY2tzLnB1c2godmFsaWRhdGlvbnMubWluTGVuZ3RoKGxlbmd0aCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29udGFpbnMoc3RyKSB7XG4gICAgdGhpcy5jaGVja3MucHVzaCh2YWxpZGF0aW9ucy5jb250YWlucyhzdHIpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl19