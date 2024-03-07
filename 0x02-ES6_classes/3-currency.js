export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // a function that displays a currency name with it code
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Creating a getter class for the currency code
  get code() {
    return this._code;
  }

  // Creating a setter class for the currency code
  set code(newCode) {
    this._code = newCode;
  }

  // Creating a getter class for the currency name
  get name() {
    return this._code;
  }

  // Creating a setter class for the currency code
  set name(newName) {
    this._name = newName;
  }
}
