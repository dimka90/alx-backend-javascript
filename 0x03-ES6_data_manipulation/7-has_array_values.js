export default function hasValuesFromArray(setArray, element) {
// a function that checks if a set has a particular method using
// the set inbuilt has method
  for (const number of element) {
    if (!setArray.has(number)) {
      return false;
    }
  }
  return true;
}
