"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NumberValidators = void 0;

var _schema = _interopRequireWildcard(require("./schema"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const NumberValidators = {
  min: num => data => data > num,
  max: num => data => data < num,
  range: (minNum, maxNum) => data => NumberValidators.min(minNum)(data) && NumberValidators.max(maxNum)(data),
  positive: () => data => data > 0,
  required: type => data => _schema.schemaValidators.checkType(type)(data)
};
exports.NumberValidators = NumberValidators;

class NumberSchema extends _schema.default {
  positive(num) {
    this.checks.push(validations.positive(num));
    return this;
  }

  range(minNum, maxNum) {
    this.checks.push(validations.range(minNum, maxNum));
    return this;
  }

}

exports.default = NumberSchema;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9udW1iZXIuanMiXSwibmFtZXMiOlsiTnVtYmVyVmFsaWRhdG9ycyIsIm1pbiIsIm51bSIsImRhdGEiLCJtYXgiLCJyYW5nZSIsIm1pbk51bSIsIm1heE51bSIsInBvc2l0aXZlIiwicmVxdWlyZWQiLCJ0eXBlIiwic2NoZW1hVmFsaWRhdG9ycyIsImNoZWNrVHlwZSIsIk51bWJlclNjaGVtYSIsIlNjaGVtYSIsImNoZWNrcyIsInB1c2giLCJ2YWxpZGF0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFTyxNQUFNQSxnQkFBZ0IsR0FBRztBQUM5QkMsRUFBQUEsR0FBRyxFQUFHQyxHQUFELElBQVVDLElBQUQsSUFBVUEsSUFBSSxHQUFHRCxHQUREO0FBRTlCRSxFQUFBQSxHQUFHLEVBQUdGLEdBQUQsSUFBVUMsSUFBRCxJQUFVQSxJQUFJLEdBQUdELEdBRkQ7QUFHOUJHLEVBQUFBLEtBQUssRUFBRSxDQUFDQyxNQUFELEVBQVNDLE1BQVQsS0FBcUJKLElBQUQsSUFBVUgsZ0JBQWdCLENBQUNDLEdBQWpCLENBQXFCSyxNQUFyQixFQUE2QkgsSUFBN0IsS0FDaENILGdCQUFnQixDQUFDSSxHQUFqQixDQUFxQkcsTUFBckIsRUFBNkJKLElBQTdCLENBSnlCO0FBSzlCSyxFQUFBQSxRQUFRLEVBQUUsTUFBT0wsSUFBRCxJQUFVQSxJQUFJLEdBQUcsQ0FMSDtBQU05Qk0sRUFBQUEsUUFBUSxFQUFHQyxJQUFELElBQVdQLElBQUQsSUFBVVEseUJBQWlCQyxTQUFqQixDQUEyQkYsSUFBM0IsRUFBaUNQLElBQWpDO0FBTkEsQ0FBekI7OztBQVNRLE1BQU1VLFlBQU4sU0FBMkJDLGVBQTNCLENBQWtDO0FBQy9DTixFQUFBQSxRQUFRLENBQUNOLEdBQUQsRUFBTTtBQUNaLFNBQUthLE1BQUwsQ0FBWUMsSUFBWixDQUFpQkMsV0FBVyxDQUFDVCxRQUFaLENBQXFCTixHQUFyQixDQUFqQjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVERyxFQUFBQSxLQUFLLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFpQjtBQUNwQixTQUFLUSxNQUFMLENBQVlDLElBQVosQ0FBaUJDLFdBQVcsQ0FBQ1osS0FBWixDQUFrQkMsTUFBbEIsRUFBMEJDLE1BQTFCLENBQWpCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBVDhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjaGVtYSwgeyBzY2hlbWFWYWxpZGF0b3JzIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5leHBvcnQgY29uc3QgTnVtYmVyVmFsaWRhdG9ycyA9IHtcbiAgbWluOiAobnVtKSA9PiAoZGF0YSkgPT4gZGF0YSA+IG51bSxcbiAgbWF4OiAobnVtKSA9PiAoZGF0YSkgPT4gZGF0YSA8IG51bSxcbiAgcmFuZ2U6IChtaW5OdW0sIG1heE51bSkgPT4gKGRhdGEpID0+IE51bWJlclZhbGlkYXRvcnMubWluKG1pbk51bSkoZGF0YSlcbiAgICAmJiBOdW1iZXJWYWxpZGF0b3JzLm1heChtYXhOdW0pKGRhdGEpLFxuICBwb3NpdGl2ZTogKCkgPT4gKGRhdGEpID0+IGRhdGEgPiAwLFxuICByZXF1aXJlZDogKHR5cGUpID0+IChkYXRhKSA9PiBzY2hlbWFWYWxpZGF0b3JzLmNoZWNrVHlwZSh0eXBlKShkYXRhKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlclNjaGVtYSBleHRlbmRzIFNjaGVtYSB7XG4gIHBvc2l0aXZlKG51bSkge1xuICAgIHRoaXMuY2hlY2tzLnB1c2godmFsaWRhdGlvbnMucG9zaXRpdmUobnVtKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByYW5nZShtaW5OdW0sIG1heE51bSkge1xuICAgIHRoaXMuY2hlY2tzLnB1c2godmFsaWRhdGlvbnMucmFuZ2UobWluTnVtLCBtYXhOdW0pKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl19