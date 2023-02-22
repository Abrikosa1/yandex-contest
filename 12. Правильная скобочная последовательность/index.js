const fs = require('fs');

const getIsInputStringCorrect = (string) => {
  const opening = ['[', '{', '('];
  const closing = [']', '}', ')'];
  const stack = [];

  for (const char of string) {
    if (closing.includes(char)) {
      if (stack.length === 0 || opening.indexOf(stack[stack.length - 1]) !== closing.indexOf(char)) {
        return 'no';
      } else {
        stack.pop();
      }
    }
    else if (opening.includes(char)) {
      stack.push(char);
      continue;
    }
  }

  return Boolean(stack.length) ? 'no' : 'yes';
}

const fileContent = fs.readFileSync("12. Правильная скобочная последовательность/input.txt", "utf8");

const result = getIsInputStringCorrect(fileContent.toString());

fs.writeFileSync("output.txt", result);