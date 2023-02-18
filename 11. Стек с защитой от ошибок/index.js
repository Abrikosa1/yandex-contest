const fs = require('fs')

class Stack {
  elements = [];

  push(n) {
    this.elements.push(n);
    return 'ok';
  }
  pop() {
    return this.elements.pop() || 'error';
  }
  size() {
    return this.elements.length;
  }
  clear() {
    this.elements = [];
    return 'ok';
  }
  back() {
    return this.elements[this.elements.length - 1] || 'error';
  }
  exit() {
    return 'bye';
  }
}

const logStack = (commands) => {
  let stack = new Stack();
  const log = [];
  for (const command of commands) {
    const [method, param] = command.split(' ');
    if (method === 'exit') {
      log.push(stack[method]());
      break;
    }
    else log.push(stack[method](param))
  }

  return log.join('\n');
}


const fileContent = fs.readFileSync("11. Стек с защитой от ошибок/input.txt", "utf8");
const commands = fileContent.toString().trim().split('\n');
const result = logStack(commands);

fs.writeFileSync("output.txt", result);