import Schema from './schema';

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
