/**
 * A redux action
 * @typedef {{type: string}} action
 */

/**
 * Definition for action creator
 * @typedef {() => action} actionCreator
 */

/**
 * Definition for a deck
 * @typedef {{title: string, questions: question[]}} deck
 */

/**
 * Definition for decks
 * @typedef {{deckTitle: deck}} decks
 */

/**
 * Definition for a question
 * @typedef {{question: string, answer: string}} question
 */

/**
 * Redux store
 * @typedef {object} store
 * @property {() => action} dispatch - Dispatches actions or action creators
 * @property {function} getState - Returns current state
 * @property {function} subscribe - Adds functions to execute on state change
 */
