export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
    if (typeof sqft !== 'number') throw new TypeError('sqft must be a number');
    this._sqft = sqft;
  }

  // setting  a getter class for sqft
  get sqft() {
    return this._sqft;
  }
}
