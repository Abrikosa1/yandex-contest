const fs = require('fs')

class Deque {
  elements = [];

  push_front(n) {
    this.elements.unshift(n);
    return 'ok';
  }
  push_back(n) {
    this.elements.push(n);
    return 'ok';
  }
  pop_front() {
    return this.elements.shift() || 'error';
  }
  pop_back() {
    return this.elements.pop() || 'error';
  }
  front() {
    return this.elements[0] || 'error';
  }
  back() {
    return this.elements[this.elements.length - 1] || 'error';
  }
  size() {
    return this.elements.length;
  }
  clear() {
    this.elements = [];
    return 'ok';
  }
  exit() {
    return 'bye';
  }
}

const logDeque = (commands) => {
  let deque = new Deque();
  const log = [];
  for (const command of commands) {
    const [method, param] = command.split(' ');
    log.push(deque[method](param))
    if (method === 'exit') {
      break;
    }
  }

  return log.join('\n');
}


const fileContent = fs.readFileSync("18. Дек с защитой от ошибок/input.txt", "utf8");
const commands = fileContent.toString().trim().split('\n');
const result = logDeque(commands);

fs.writeFileSync("output.txt", result);