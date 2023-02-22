const fs = require('fs');

const calculateStringBeauty = (replacesCount, stringToBeautify) => {
  const chars = stringToBeautify.split('');
  let res = 0;
  let pastChars = {};
  for (const char of chars) {
    if (pastChars[char]) {
      continue;
    }
    console.log(char);
    let count = replacesCount;
    let max = 0;
    let leftPointer = 0;
    let rightPointer = 0;
    while (rightPointer < chars.length - 1) {
      if (count < 0) {
        if (chars[leftPointer] === char) {
          count = 0
        } else {
          count = 1;
          max = 0;
        }
        leftPointer++;
      } else {
        if (chars[rightPointer] !== char) {
          count--;
          max++;
        }
        if (count >= 0) {
          max++;
        }
        rightPointer++;
      }
    }
    res = res > max ? res : max;
    pastChars[char] = res;
  }
  return `${res}`;
}


const fileContent = fs.readFileSync("2. Красивая строка/input.txt", "utf8");
const [replacesCountString, stringToBeautify] = fileContent.split('\n');
const result = calculateStringBeauty(Number(replacesCountString), stringToBeautify);
fs.writeFileSync("output.txt", result);