import Schema from './schema';

export default class StringSchema extends Schema {
  minLength(length) {
    this.checks.push(this.validators.minLength(length));
    return this;
  }

  contains(str) {
    this.checks.push(this.validators.contains(str));
    return this;
  }
}
