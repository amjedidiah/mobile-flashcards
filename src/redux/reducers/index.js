// Module import
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

// Reducer imports
import decks from './decks';

/**
 * @type {{key: string, storage: object, whitelist: string[]}}
 */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['decks'],
};

// Export combineReducers
export default combineReducers({
  decks: persistReducer(persistConfig, decks),
});
