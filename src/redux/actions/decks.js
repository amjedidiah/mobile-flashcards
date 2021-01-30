import {
  ADD_CARD_TO_DECK,
  DELETE_DECK,
  SAVE_DECK,
  SAVE_DECK_PROGRESS
} from './types';

/**
 * Adds a card to a deck
 * @param {string} title
 * @param {card} card
 * @return {actionCreator}
 */
export const addCardToDeck = (title, { question, answer }) => ({
  type: ADD_CARD_TO_DECK,
  title,
  question,
  answer
});

/**
 * Saves a deck
 * @param {string} title
 * @return {actionCreator}
 */
export const saveDeck = (title) => ({
  type: SAVE_DECK,
  title
});

/**
 * Saves a deck's progress
 * @param {string} title
 * @param {number} current
 * @param {number} score
 * @return {actionCreator}
 */
export const saveDeckProgress = (title, current, score) => ({
  type: SAVE_DECK_PROGRESS,
  title,
  current,
  score
});

/**
 * Deletes a deck
 * @param {string} title
 * @return {actionCreator}
 */
export const deleteDeck = (title) => ({
  type: DELETE_DECK,
  title
});

export const quizCompleted = () => {};
