const fs = require('fs');

const getSequence = (number) => {
  const dp = [];
  dp[0] = 0;
  dp[1] = 2;
  dp[2] = 4;
  dp[3] = 7;
  let i = 4;
  while (i <= number) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    i += 1;
  }
  return dp[number].toString()
}

const fileContent = fs.readFileSync("21. Три единицы подряд/input.txt", "utf8");

const result = getSequence(Number(fileContent));

fs.writeFileSync("output.txt", result);
