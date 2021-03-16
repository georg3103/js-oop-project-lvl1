import { getDataType } from '../utils';

const validations = {
  checkType: (type) => (data) => type === getDataType(data),
  minLength: (length) => (data) => data.length >= length,
  contains: (str) => (data) => data.includes(str),
  required: () => (data) => !!data.length,
};

export default class StringSchema {
  constructor() {
    this.type = 'string';
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

  minLength(length) {
    this.checks.push(validations.minLength(length));
    return this;
  }

  contains(str) {
    this.checks.push(validations.contains(str));
    return this;
  }

  static create = () => new StringSchema();
}
