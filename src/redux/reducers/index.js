/**
 * Decks reducer
 * @param {decks} state
 * @param {action} action
 * @return {decks}
 */
const decks = (state = {}, {answer, question, title, type}) =>
  ({
    SAVE_DECK_TITLE: {...state, [title]: {title, questions: []}},
    ADD_CARD_TO_DECK: {
      ...state,
      [title]: {
        ...state[title],
        questions: [...state[title].questions, {question, answer}],
      },
    },
  }[type] || state);

// decks reducer export
export default decks;
