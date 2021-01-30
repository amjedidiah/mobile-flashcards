// Module import
import {createStore} from 'redux';
import {persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

// Combinereducers import
import reducers from './reducers';

// Middleware import
import middleware from './middleware';

/**
 * @type {{key: string, storage: object, whitelist: string[]}}
 */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['decks'],
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, reducers);

/**
 * Redux store
 * @type {store}
 */
export const store = createStore(persistedReducer, middleware);

/**
 * @type {any}
 */
export const persistor = persistStore(store);
