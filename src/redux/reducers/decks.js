import {DELETE_DECK} from '../actions/types';

/**
 * Decks reducer
 * @param {decks} state
 * @param {action} action
 * @return {decks}
 */
const decks = (
    state = {},
    {answer, current, question, score, title, type},
) => {
  let newState = {};

  if (type === DELETE_DECK) {
    const removeProp = title;
    // eslint-disable-next-line no-unused-vars
    const {[removeProp]: remove, ...rest} = state;

    newState = rest;
  }
  return (
    {
      SAVE_DECK: {
        ...state,
        [title]: {title, questions: [], current: 0, score: 0},
      },
      DELETE_DECK: newState,
      ADD_CARD_TO_DECK: {
        ...state,
        [title]: {
          ...state[title],
          questions: [...(state[title]?.questions || []), {question, answer}],
        },
      },
      SAVE_DECK_PROGRESS: {
        ...state,
        [title]: {...state[title], current, score},
      },
    }[type] || state
  );
};

// decks reducer export
export default decks;
