const fs = require('fs')
const cardsCount = 10;
const limit = Math.pow(10, 6);

const getIsFirstCardWins = (firstCard, secondCard) => {
  if (firstCard === 0 && secondCard === 9) {
    return true;
  }
  if (firstCard === 9 && secondCard === 0) {
    return false;
  }
  return firstCard > secondCard;
}

const playWarCardGameParty = (firstPlayerCards, secondPlayerCards) => {
  let winner = [null, 0];
  while (firstPlayerCards.length < cardsCount && secondPlayerCards.length < cardsCount) {
    const firstPlayerFirstCard = Number(firstPlayerCards.shift());
    const secondPlayerFirstCard = Number(secondPlayerCards.shift());
    const isFirstWinner = getIsFirstCardWins(firstPlayerFirstCard, secondPlayerFirstCard)
    if (isFirstWinner) {
      firstPlayerCards.push(firstPlayerFirstCard, secondPlayerFirstCard)
    } else {
      secondPlayerCards.push(firstPlayerFirstCard, secondPlayerFirstCard)
    }
    winner = [isFirstWinner ? 'first' : 'second', winner[1] + 1]
    if (winner[1] === limit) {
      return 'botva'
    }
  }
  return winner.join(' ');
}


const fileContent = fs.readFileSync("17. Игра в пьяницу/input.txt", "utf8");
const [firstPlayerCardsString, secondPlayerCardsString] = fileContent.toString().trim().split('\n');
const result = playWarCardGameParty(firstPlayerCardsString.trim().split(' '), secondPlayerCardsString.trim().split(' '));

fs.writeFileSync("output.txt", result);