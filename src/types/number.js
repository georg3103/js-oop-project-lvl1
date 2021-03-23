import Schema, { schemaValidators } from './schema';

export const numberValidators = {
  min: (num) => (data) => data > num,
  max: (num) => (data) => data < num,
  range: (minNum, maxNum) => (data) => numberValidators.min(minNum)(data)
    && numberValidators.max(maxNum)(data),
  positive: () => (data) => data > 0,
  required: (type) => (data) => schemaValidators.checkType(type)(data),
};

export default class NumberSchema extends Schema {
  positive(num) {
    this.checks.push(this.validators.positive(num));
    return this;
  }

  range(minNum, maxNum) {
    this.checks.push(this.validators.range(minNum, maxNum));
    return this;
  }
}
