const fs = require('fs');

const getNearestCheaperCity = (prices) => {
  const stack = [];
  const result = [];
  for (const [index, price] of prices.entries()) {
    if (!stack[stack.length - 1] || price >= Number(stack[stack.length - 1][0])) {
      stack.push([price, index])
      result[index] = -1;
    }
    else {
      while (stack[stack.length - 1] && price < Number(stack[stack.length - 1][0])) {
        const [_, lastIndex] = stack.pop();
        result[lastIndex] = index;
      }
      stack.push([price, index]);
      result[index] = -1;
    }
  }
  return result.join(' ');
}

const fileContent = fs.readFileSync("15. Великое Лайнландское переселение/input.txt", "utf8");
const [_, prices] = fileContent.split('\n');
const result = getNearestCheaperCity(prices.split(' '));

fs.writeFileSync("output.txt", result.toString());