export default function getListStudentIds(students) {
  // checking if the argument passed is an array
  if (Array.isArray(students)) {
    // using the map function on the array extract the each objects id
    return students.map((studentId) => studentId.id);
  }

  return [];
}
