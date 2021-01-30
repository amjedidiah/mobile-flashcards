// Module import
import { combineReducers } from 'redux';

// Reducer imports
import decks from './decks';
import notifications from './notifications';

// Export combineReducers
export default combineReducers({
  decks,
  notifications
});
