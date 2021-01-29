import {ADD_CARD_TO_DECK, SAVE_DECK} from './types';

/**
 * Adds a card to a deck
 * @param {string} title
 * @param {card} card
 * @return {actionCreator}
 */
export const addCardToDeck = (title, {question, answer}) => ({
  type: ADD_CARD_TO_DECK,
  title,
  question,
  answer,
});

/**
 * Saves a deck
 * @param {string} title
 * @return {actionCreator}
 */
export const saveDeckTitle = (title) => ({
  type: SAVE_DECK,
  title,
});
