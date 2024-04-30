// importing the readline module
const readline = require('readline');

// creating the interface

const userinput = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout,
  },
);

// creating user question

userinput.question('Welcome to Holberton School, what is your name?', (input) => {
  console.log('Your name is: ', input);

  userinput.close();
});
