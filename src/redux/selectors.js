/**
 * Gets deck titles
 * @param {decks} decks
 * @return {string[]} deckTitles
 */
export const getDeckTitles = (decks) => Object.keys(decks);

/**
 * Gets a deck
 * @param {decks} decks
 * @param {string} deckTitle
 * @return {deck} deck
 */
export const getDeck = (decks, deckTitle) => decks[deckTitle];

/**
 * Gets the number of cards in a deck
 * @param {decks} decks
 * @param {string} deckTitle
 * @return {number} deckCardsCount
 */
export const getDeckCardsCount = (decks, deckTitle) =>
  getDeck(decks, deckTitle).questions.length;
