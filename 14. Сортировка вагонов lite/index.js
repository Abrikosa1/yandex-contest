const fs = require('fs');

const checkIsLastElementEqualToIndex = (array) => {
  if (Number(array[array.length - 1]) === array.length) return true;
  return false;
}

const getIsPossibleToSortTrainCars = (carsAmount, numbers) => {
  const stack = [];
  const result = [];
  for (const number of numbers) {
    if (number < stack[stack.length - 1]) {
      stack.push(Number(number));
    }
    else {
      while (number > stack[stack.length - 1]) {
        result.push(stack.pop());

        if (!checkIsLastElementEqualToIndex(result)) {
          return 'NO';
        }
      }
      stack.push(Number(number))
    }
  }

  return 'YES';
}

const fileContent = fs.readFileSync("14. Сортировка вагонов lite/input.txt", "utf8");
const [carsAmount, numbers] = fileContent.split('\n');
const result = getIsPossibleToSortTrainCars(carsAmount, numbers.split(' '));

fs.writeFileSync("output.txt", result.toString());