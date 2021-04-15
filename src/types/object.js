import Schema from './schema';

export default class ObjectSchema extends Schema {
  shape(shapeObj) {
    this.checks.push(this.validators.shape(shapeObj));
    return this;
  }
}
