const fs = require('fs');

const getSequence = (deskLength, stepLength) => {
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  let i = 3;
  for (i; i <= stepLength; i++) {
    dp[i] = 2 * dp[i - 1];
  }
  for (i; i <= deskLength; i++) {
    dp[i] = 2 * dp[i - 1] - dp[i - stepLength - 1];
  }
  return dp[deskLength].toString();
}

const fileContent = fs.readFileSync("22. Кузнечик/input.txt", "utf8");
const [N, stepLength] = fileContent.split(' ');
const result = getSequence(Number(N), Number(stepLength));

fs.writeFileSync("output.txt", result);
