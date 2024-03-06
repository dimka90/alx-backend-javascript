export default function returnHowManyArguments(...args) {
  let count = 0;

  for (const i in args) {
    if (Object.prototype.hasOwnProperty.call(args, i)) {
      count += 1;
    }
  }

  return count;
}
