import Schema from './schema';

export const objectValidators = {
  shape: (shapeObj) => (data) => Object.entries(shapeObj).every(([key, schema]) => {
    const dataValue = data[key];
    return schema.isValid(dataValue);
  }),
};

export default class ObjectSchema extends Schema {
  shape(shapeObj) {
    this.checks.push(this.validators.shape(shapeObj));
    return this;
  }
}
