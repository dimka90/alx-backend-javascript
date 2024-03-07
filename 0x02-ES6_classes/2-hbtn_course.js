export default class HolbertonCourse {
  constructor(name, length, students = []) {
    // Performing a validation on each instance vairable
    if (typeof (name) !== 'string' || name.trim() === '') {
      throw new TypeError('Name must be A string or Name can not be empty');
    }

    if (typeof (length) !== 'number' || length < 0) {
      throw new TypeError('length Must be a number or must be greater than zero');
    }

    if (!Array.isArray(students)) {
      throw new TypeError('it must be an Array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Creating a getter method for name
  get name() {
    return this._name;
  }

  // Creating a setter for the name
  set name(newName) {
    if (typeof newName !== 'string') throw new TypeError('Name must be a string');
    this._name = newName;
  }

  // creating a getter method for the length
  get length() {
    return this._length;
  }

  // Creating a setter for the name
  set length(newlength) {
    if (typeof newLength !== 'number') throw new TypeError('Length must be a number');
    this._length = newlength;
  }

  get student() {
    return this._students;
  }

  set student(newStudent) {
    if (!Array.isArray(newStudent)) throw new TypeError('Students must be an array');
    this._students.push(newStudent);
  }
}
