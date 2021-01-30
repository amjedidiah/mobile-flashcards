/**
 * Decks reducer
 * @param {boolean} state
 * @param {action} action
 * @return {boolean}
 */
const notifications = (state = null, { type, notification }) =>
  ({
    SAVE_DECK_PROGRESS: false,
    SAVE_NOTIFICATION: notification
  }[type] || state);

// decks reducer export
export default notifications;
