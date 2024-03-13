export default function cleanSet(set, startString) {
  let result = ' ';

  // looping through the values of the set

  for (const element of set) {
    // checking to see if a there is a match

    if (element.startsWith(startString)) {
      result += `${element.substring(startString.length)}-`;
    }
  }
  if (result.length > 0) {
    result = result.slice(0, -1);
  }

  return result;
}
