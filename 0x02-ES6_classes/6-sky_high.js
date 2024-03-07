import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);

    if (typeof floors !== 'number') throw new TypeError('Floor is not a number');

    this._floors = floors;
  }

  // creating a getter for floor instance attribute
  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
