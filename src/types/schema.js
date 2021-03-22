/* eslint-disable implicit-arrow-linebreak */
import getDataType from '../utils/getDataType';

const validations = {
  checkType: (type) => (data) => getDataType(type, data),
};

export default class Schema {
  constructor({ type }) {
    this.type = type;
    this.checks = [validations.checkType(this.type)];
  }

  isValid(data) {
    return this.checks
      .reduce((acc, check) => (!acc ? acc : check(data)), true);
  }
}
