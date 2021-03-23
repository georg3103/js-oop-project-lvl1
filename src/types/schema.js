import getDataType from '../utils/getDataType';

export const schemaValidators = {
  checkType: (type) => (data) => getDataType(type, data),
};

export default class Schema {
  constructor({ type, validators }) {
    this.type = type;
    this.validators = validators;
    this.checks = [];
    this.#checkType();
  }

  #addValidator(validator) {
    this.checks.push(validator);
  }

  #checkType() {
    this.#addValidator(schemaValidators.checkType(this.type));
    return this;
  }

  isValid(data) {
    return this.checks.every((check) => check(data));
  }

  required() {
    this.#addValidator(this.validators.required(this.type));
    return this;
  }
}
