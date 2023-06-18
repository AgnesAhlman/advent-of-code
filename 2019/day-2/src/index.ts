import fs from 'fs';
import path from 'path';

const test = (numbers: number[]) => {
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
      console.log('multiply!');
      const newNumber = firstNumber * secondNumber;

      arr[numberOfIndex3] = newNumber;

      console.log(newNumber, numberOfIndex3, numbers);
    }
    if (optCode === 99) {
      console.log('end program');
    }
  }
  return arr;
};

// const testInput = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
// test(testInput);

try {
  // Read the input file
  const filePath = path.join(__dirname, '../input.txt');
  const data = fs.readFileSync(filePath, 'utf8');

  // Split the data into an array of numbers
  const numbers: number[] = data.trim().split(',').map(Number);
  const testprogram = test(numbers);
  console.log(testprogram);
} catch (e) {
  console.error(e);
}
