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
  numbers[1] = 12;
  numbers[2] = 2;
  const finalOutput = program(numbers);
  console.log('finalOutput', finalOutput);
} catch (e) {
  console.error(e);
}
