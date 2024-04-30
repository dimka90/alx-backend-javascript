const fs = require('fs');

function countStudents(filePath) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(filePath, 'utf8').trim().split('\n');

    // Parse the CSV data into an array of objects
    const students = data.map((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      return {
        firstname, lastname, age, field,
      };
    });

    // Count the number of students in each field and create lists of first names
    const counts = {};
    const lists = {};
    students.forEach((student) => {
      if (student.field !== 'field') { // Ignore the header
        counts[student.field] = counts[student.field] ? counts[student.field] + 1 : 1;
        lists[student.field] = lists[student.field] ? [...lists[student.field],
          student.firstname] : [student.firstname];
      }
    });

    // Log the total number of students and the number of students
    // in each field along with their lists
    console.log(`Number of students: ${students.length - 1}`); // Exclude header from the count
    for (const field in counts) {
      if (Object.prototype.hasOwnProperty.call(counts, field)) {
        console.log(`Number of students in ${field}: ${counts[field]}. List: ${lists[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
