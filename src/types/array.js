import Schema from './schema';

export default class ArraySchema extends Schema {
  sizeof(size) {
    this.checks.push(this.validators.sizeof(size));
    return this;
  }
}
