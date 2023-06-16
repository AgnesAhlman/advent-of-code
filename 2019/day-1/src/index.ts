const fs = require('fs');
const path = require('path');

const fuelForSingleModule = (mass: number): number => {
  return Math.floor(mass / 3) - 2;
};

const calculateTotalFuel = (masses: number[]) => {
  const totalFuel = masses.reduce((acc: number, currentMass: number) => {
    const fuel = fuelForSingleModule(currentMass);
    return acc + fuel;
  }, 0);

  return totalFuel;
};

try {
  // Read the input file
  const filePath = path.join(__dirname, '../input.txt');
  const data = fs.readFileSync(filePath, 'utf8');

  // Split the data into an array of numbers
  const masses: number[] = data.trim().split('\n').map(Number);
  const totalFuel = calculateTotalFuel(masses);
  console.log(totalFuel);
} catch (e) {
  console.error(e);
}
