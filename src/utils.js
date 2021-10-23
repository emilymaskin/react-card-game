const numToCard = (num) => {
  let val = num.toString();
  switch (num) {
    case 1:
      val = "Ace";
      break;
    case 11:
      val = "Jack";
      break;
    case 12:
      val = "Queen";
      break;
    case 13:
      val = "King";
      break;
    default:
      break;
  }
  return val;
};
const suits = ["Heart", "Spade", "Diamond", "Club"];
const cardsInSuit = 13;
export let cards = suits.reduce((acc, suit) => {
  for (let i = 1; i < cardsInSuit + 1; i++) {
    acc.push(`${numToCard(i)}${suit}`);
  }
  return acc;
}, []);
