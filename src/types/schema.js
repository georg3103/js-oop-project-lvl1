import getDataType from '../utils/getDataType';

export const schemaValidators = {
  checkType: (type) => (data) => getDataType(type, data) || data == null,
};

export default class Schema {
  constructor({ type, validators }) {
    this.type = type;
    this.validators = validators;
    this.checks = [];
    this.checkType();
  }

  addCheck(check) {
    this.checks.push(check);
  }

  checkType() {
    this.addCheck(schemaValidators.checkType(this.type));
    return this;
  }

  isValid(data) {
    console.warn(data, this.isRequired);
    if (!this.isRequired) {
      const isPresent = data == null;
      if (!isPresent) return true;
    }
    return this.checks.every((check) => check(data));
  }

  required() {
    this.addCheck(this.validators.required(this.type));
    this.isRequired = true;
    return this;
  }
}
