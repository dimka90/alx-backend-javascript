export default class Currency {
  constructor(code, name) {

    if (typeof(code ) !== 'string') throw new TypeError('Code must be a string');
    if (typeof(name) !== 'string') throw new TypeError('Name must be a string') 
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
    if (typeof(newCode ) !== 'string') throw new TypeError('Code must be a string');
    this._code = newCode;
  }

  // Creating a getter class for the currency name
  get name() {
    return this._code;
  }

  // Creating a setter class for the currency code
  set name(newName) {
    if (typeof(newName) !== 'string') throw new TypeError('Name must be a string') 
    this._name = newName;
  }
}
