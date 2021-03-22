/* eslint-disable implicit-arrow-linebreak */
import getDataType from '../utils/getDataType';

const validations = {
  checkType: (type) => (data) => type === getDataType(data),
  min: (num) => (data) => data > num,
  max: (num) => (data) => data < num,
  range: (minNum, maxNum) => (data) =>
    validations.min(minNum)(data) && validations.max(maxNum)(data),
  positive: () => (data) => data > 0,
  required: () => (data) => validations.checkType('number')(data),
};

export default class NumberSchema {
  constructor() {
    this.type = 'number';
    this.checks = [validations.checkType(this.type)];
  }

  isValid(data) {
    return this.checks
      .reduce((acc, check) => (!acc ? acc : check(data)), true);
  }

  required() {
    this.checks.push(validations.required());
    return this;
  }

  positive(num) {
    this.checks.push(validations.positive(num));
    return this;
  }

  range(minNum, maxNum) {
    this.checks.push(validations.range(minNum, maxNum));
    return this;
  }

  static create = () => new NumberSchema();
}
