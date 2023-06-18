import fs from 'fs';
import path from 'path';

const program = (numbers: number[]) => {
  for (let i = 0; i < numbers.length; i += 4) {
    const optCode = numbers[i];
    const firstIndex = numbers[i + 1];
    const secondIndex = numbers[i + 2];
    const outputPos = numbers[i + 3];

    const noun = numbers[firstIndex];
    const verb = numbers[secondIndex];

    if (optCode === 1) {
      numbers[outputPos] = noun + verb;
    }
    if (optCode === 2) {
      numbers[outputPos] = noun * verb;
    }
    if (optCode === 99) {
      console.log('end program');
      break;
    }
  }
  return numbers[0];
};

try {
  // Read the input file
  const filePath = path.join(__dirname, '../input.txt');
  const data = fs.readFileSync(filePath, 'utf8');

  // Split the data into an array of numbers
  const memory: number[] = data.trim().split(',').map(Number);

  const targetOutput = 19690720;
  let noun = 0;
  let verb = 0;

  // Find the noun and verb that produce the target output
  for (noun = 0; noun <= 99; noun++) {
    for (verb = 0; verb <= 99; verb++) {
      // Create a new copy of the program
      const memoryCopy = [...memory];

      memoryCopy[1] = noun;
      memoryCopy[2] = verb;

      const output = program(memoryCopy);

      if (output === targetOutput) {
        const answer = 100 * noun + verb;
        console.log('Answer:', answer);

        noun = 100;
        verb = 100;
      }
    }
  }

  memory[1] = 12;
  memory[2] = 2;
  const finalOutput = program(memory);
  console.log('finalOutput', finalOutput);
} catch (e) {
  console.error(e);
}
