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
  const log = commands.reduce((acc, command) => {
    const [method, param] = command.split(' ');
    if (method === 'exit') {
      stack = null;
      acc.push('bye');
    }
    if (stack) acc.push(stack[method](param));
    return acc;
  }, []);
  return log.join('\n');
}

const fs = require('fs')
const fileContent = fs.readFileSync("input.txt", "utf8");
const commands = fileContent.toString().trim().split('\n');
const result = logStack(commands);

fs.writeFileSync("output.txt", result);