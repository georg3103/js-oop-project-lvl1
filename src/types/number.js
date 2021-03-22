/* eslint-disable implicit-arrow-linebreak */
import getDataType from '../utils/getDataType';

import Schema from './schema';

const validations = {
  checkType: (type) => (data) => getDataType(type, data),
  min: (num) => (data) => data > num,
  max: (num) => (data) => data < num,
  range: (minNum, maxNum) => (data) =>
    validations.min(minNum)(data) && validations.max(maxNum)(data),
  positive: () => (data) => data > 0,
  required: (type) => (data) => validations.checkType(type)(data),
};

export default class NumberSchema extends Schema {
  constructor() {
    super({ type: 'number' });
  }

  required() {
    this.checks.push(validations.required(this.type));
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
