const fs = require('fs')

class Queue {
  elements = [];

  push(n) {
    this.elements.push(n);
    return 'ok';
  }
  pop() {
    return this.elements.shift() || 'error';
  }
  size() {
    return this.elements.length;
  }
  clear() {
    this.elements = [];
    return 'ok';
  }
  front() {
    return this.elements[0] || 'error';
  }
  exit() {
    return 'bye';
  }
}

const logQueue = (commands) => {
  let queue = new Queue();
  const log = [];
  for (const command of commands) {
    const [method, param] = command.split(' ');
    log.push(queue[method](param))
    if (method === 'exit') {
      break;
    }
  }

  return log.join('\n');
}


const fileContent = fs.readFileSync("16. Очередь с защитой от ошибок/input.txt", "utf8");
const commands = fileContent.toString().trim().split('\n');
const result = logQueue(commands);

fs.writeFileSync("output.txt", result);