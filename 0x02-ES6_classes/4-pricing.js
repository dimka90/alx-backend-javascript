import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a Number');
    if (!(currency instanceof Currency)) throw new TypeError('currency  must be a an Instance of Currency');

    this._amount = amount;
    this._currency = currency;
  }

  // Code
  get amount() {
    return this._code;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number' || newAmount < 0) throw new TypeError('Amount must be a number');
    this._newAmount = newAmount;
  }

  // Currency getter
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) throw new TypeError('Currency  must be an instance of Currency');
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || amount < 0) throw new TypeError('Number must be a number');
    if (typeof conversionRate !== 'number' || conversionRate < 0) throw new TypeError('ConversionRate must be a number');

    return amount * conversionRate;
  }
}
