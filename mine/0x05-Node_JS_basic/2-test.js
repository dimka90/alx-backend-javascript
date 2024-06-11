const read = require('fs')

const data = read.readFileSync('database.csv','utf-8').trim().split('\n')
const value = data.map((line) =>
{
    const [firstname, lastname, age, field] = line.split(',');
      return {
        firstname, lastname, age, field,
      };
})
console.log(value)