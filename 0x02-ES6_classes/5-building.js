export default class Building{
constructor(sqft)
{
    if (typeof sqft !== 'number') throw new TypeError("sqft must be a number");

    this._sqft = sqft
}
// setting  a getter class for sqft
get sqft()
{
    return this._sqft;
}

evacuationWarningMessage()
{

    throw new TypeError('Class extending Building must override evacuationWarningMessage');
}
}