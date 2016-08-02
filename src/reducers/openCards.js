const openCards = (state = {}, action) => {
  console.log('hi');
  switch (action.type) {
    case 'OPEN_CARDS':
      return {
        ...makeDeck(),
      };
    default:
      return state;
  }
};


function makeDeck() {
  const deck = [];
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9",
                        "10", "J", "Q", "K"];
  const suits = ["C", "D", "H", "S"];
  // Fill the array with 'n' packs of cards.

    for (let j = 0; j < suits.length; j++){
      for (let k = 0; k < ranks.length; k++) {
        const card = suits[j].concat(ranks[k]);
        deck.push(card);
      }
    }
    return deck;
}
