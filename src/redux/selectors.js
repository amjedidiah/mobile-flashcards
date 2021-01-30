/**
 * Gets deck titles
 * @param {decks} decks
 * @return {string[]} deckTitles
 */
export const getDecks = (decks) => {
  // eslint-disable-next-line no-unused-vars
  const {_persist, ...rest} = decks;
  return Object.values(rest);
};

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
  (getDeck(decks, deckTitle)?.questions || []).length;

/**
 * Gets the number of cards answered by the user in a deck
 * @param {decks} decks
 * @param {string} deckTitle
 * @return {number} deckCardsCount
 */
export const getDeckProgress = (decks, deckTitle) =>
  getDeck(decks, deckTitle)?.current;

/**
 * Gets the score
 * @param {decks} decks
 * @param {string} deckTitle
 * @return {number} deckCardsCount
 */
export const getDeckScore = (decks, deckTitle) =>
  getDeck(decks, deckTitle)?.score;
