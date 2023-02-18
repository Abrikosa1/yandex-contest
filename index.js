const calculateStringBeuty = (inputString) => {
  const [replacesCountString, stringToBeutify] = inputString.split('\n');
  const replacesCount = Number(replacesCountString) + 1;

  // for (const [index, char] of stringToBeutify.split('').entries()) {
  //   console.log(index, char);
  // }
  const repeatedChars = {};
  for (let i = 0; i < stringToBeutify.length; i++) {
    // if (stringToBeutify[i] === stringToBeutify[i + 1]){
    //   repeatedChars[stringToBeutify[i]] = (repeatedChars[stringToBeutify[i]] || 0) + 1; 
    // }
    const current = repeatedChars[stringToBeutify[i]];
    if (current) {
      const { count, idx, maxBeauty } = current;
      const isEqualToReplaceCount = i - idx[idx.length - 1] === replacesCount;
      const isMoreThanReplaceCount = i - idx[idx.length - 1] > replacesCount;
      const isLessThanReplaceCount = i - idx[idx.length - 1] < replacesCount;


      let newIdx = [];
      if (isEqualToReplaceCount) {
        console.log(maxBeauty);
        // console.log(stringToBeutify[i]);
        newIdx = [idx[idx.length - 1], i]
      } else if (isLessThanReplaceCount) {
        // console.log(stringToBeutify[i]);
        // newIdx = [idx[idx.length - 1], i]
      }
      else if (isMoreThanReplaceCount) {
        // newIdx = [i];
      }
      repeatedChars[stringToBeutify[i]] = { count: count + 1, idx: newIdx }
      // [...idx, i]
    } else {
      repeatedChars[stringToBeutify[i]] = {
        count: (repeatedChars[stringToBeutify[i]] || 0) + 1, idx: [i], maxBeauty: replacesCount
      }
    }
  }
  console.log(repeatedChars);

  return inputString;
}


const fs = require('fs')
const fileContent = fs.readFileSync("input.txt", "utf8");
const result = calculateStringBeuty(fileContent.toString());

fs.writeFileSync("output.txt", result);