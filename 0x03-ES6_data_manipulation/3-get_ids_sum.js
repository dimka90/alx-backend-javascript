export default function (students) {
// a function that use the reduce function to calculate the total id of srudents
  return students.reduce((accumulator, currentvalue) => accumulator + currentvalue.id, 0);
}
