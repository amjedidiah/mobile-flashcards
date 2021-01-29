// Module import
import {createStore} from 'redux';
import {persistStore} from 'redux-persist';

// Combinereducers import
import reducers from './reducers';

// Middleware import
import middleware from './middleware';

/**
 * Redux store
 * @type {store}
 */
export const store = createStore(reducers, middleware);

/**
 * @type {any}
 */
export const persistor = persistStore(store);
