const fs = require('fs');

const calculateStringBeauty = (replacesCount, stringToBeautify) => {
  const chars = stringToBeautify.split('');
  let res = 0;
  let pastChars = {};
  for (const char of chars) {
    if (pastChars[char]) {
      continue;
    }
    pastChars[char] = char;
    let count = replacesCount;
    let leftPointer = 0;
    let rightPointer = 0;
    while (rightPointer <= chars.length) {
      if (stringToBeautify.length - rightPointer == 0) {
        res = Math.max(res, rightPointer - leftPointer);
        break;
      }
      if (count >= 0) {
        if (stringToBeautify[rightPointer] === char) {
          rightPointer += 1;
        } else {
          if (count > 0) {
            rightPointer += 1;
            count -= 1
          } else {
            res = Math.max(res, rightPointer - leftPointer);
            leftPointer += 1;
            if (stringToBeautify[leftPointer - 1] === char) {
              continue;
            } else {
              count = 1;
            }
          }
        }
      }
    }
  }
  return `${res}`;
}


const fileContent = fs.readFileSync("2. Красивая строка/input.txt", "utf8");
const [replacesCountString, stringToBeautify] = fileContent.split('\n');
const result = calculateStringBeauty(Number(replacesCountString), stringToBeautify);
fs.writeFileSync("output.txt", result);