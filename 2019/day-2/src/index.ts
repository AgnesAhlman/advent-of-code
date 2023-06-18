import fs from 'fs';
import path from 'path';

const program = (numbers: number[]) => {
  let arr = numbers;

  for (let i = 0; i < arr.length; i += 4) {
    const optCode = arr[i];
    const firstIndex = arr[i + 1];
    const secondIndex = arr[i + 2];
    const numberOfIndex3 = arr[i + 3];

    const firstNumber = arr[firstIndex];
    const secondNumber = arr[secondIndex];

    if (optCode === 1) {
      const totalSum = firstNumber + secondNumber;
      arr[numberOfIndex3] = totalSum;
    }
    if (optCode === 2) {
      const newNumber = firstNumber * secondNumber;
      arr[numberOfIndex3] = newNumber;
    }
    if (optCode === 99) {
      console.log('end program');
    }
  }
  return arr[0];
};

try {
  // Read the input file
  const filePath = path.join(__dirname, '../input.txt');
  const data = fs.readFileSync(filePath, 'utf8');

  // Split the data into an array of numbers
  const numbers: number[] = data.trim().split(',').map(Number);

  const targetOutput = 19690720;
  let noun = 0;
  let verb = 0;

  // Find the noun and verb that produce the target output
  for (noun = 0; noun <= 99; noun++) {
    for (verb = 0; verb <= 99; verb++) {
      // Create a new copy of the program
      const programCopy = [...numbers];

      // Set the noun and verb values
      programCopy[1] = noun;
      programCopy[2] = verb;

      // Run the program
      const output = program(programCopy);

      if (output === targetOutput) {
        // Found the correct noun and verb
        console.log('Noun:', noun);
        console.log('Verb:', verb);

        // Calculate the answer
        const answer = 100 * noun + verb;
        console.log('Answer:', answer);

        // Exit the loops
        noun = 100;
        verb = 100;
      }
    }
  }

  numbers[1] = 12;
  numbers[2] = 2;
  const finalOutput = program(numbers);
  console.log('finalOutput', finalOutput);
} catch (e) {
  console.error(e);
}
