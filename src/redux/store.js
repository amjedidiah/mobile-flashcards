// Module import
import {createStore} from 'redux';
import {persistStore} from 'redux-persist';

// Combinereducers import
import reducers from 'redux/reducers';

// Middleware import
import middleware from 'redux/middleware';

/**
 * Redux store
 * @type {store}
 */
export const store = createStore(reducers, middleware);

/**
 * @type {any}
 */
export const persistor = persistStore(store);
