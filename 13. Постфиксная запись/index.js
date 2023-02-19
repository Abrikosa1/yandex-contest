const fs = require('fs');

const calculatePostfixExpression = (string) => {
  const stack = [];
  for (const char of string.split(' ')) {
    if (Number.isInteger(Number(char))) {
      stack.push(char);
    }
    else {
      const last = stack.pop();
      const first = stack.pop();
      stack.push(eval(`(${first})${char}(${last})`))
    }
  }
  return stack.pop();
}

const fileContent = fs.readFileSync("13. Постфиксная запись/input.txt", "utf8");

const result = calculatePostfixExpression(fileContent);

fs.writeFileSync("output.txt", result.toString());