export default function getStudentsByLocation(students, city) {
// a function that checks for a match in an array
  return students.filter((student) => student.location === city);
}
