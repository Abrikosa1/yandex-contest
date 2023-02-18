const fs = require('fs')

const calculateHistogram = (inputString) => {
  const alphabet = ['.', '!', '?', ':', '-', ',', ';', '(', ')', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const charsWithCount = {};
  let maxCount = 0;
  for (const char of inputString.split('')) {
    if (alphabet.includes(char)) {
      const charCode = String(char).charCodeAt(0);
      charsWithCount[charCode] = (charsWithCount[charCode] || 0) + 1;
      maxCount = maxCount > charsWithCount[charCode] ? maxCount : charsWithCount[charCode]
    }
  }

  const histogramRows = [];
  for (i = maxCount; i >= 1; i--) {
    let histogramRow = [];
    for (const [index, [char, count]] of Object.entries(charsWithCount).entries()) {
      histogramRow[index] = count >= i ? '#' : ' ';
    }
    histogramRows.push(histogramRow.join(''))
  }
  const charsFromCodes = Object.keys(charsWithCount).map(char => String.fromCharCode(char)).join('');
  histogramRows.push(charsFromCodes)

  return histogramRows.join('\n');
}

const fileContent = fs.readFileSync("1. Гистограмма/input.txt", "utf8");
const result = calculateHistogram(fileContent.toString());

fs.writeFileSync("output.txt", result)


