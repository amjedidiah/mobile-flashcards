import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {View, Text} from 'react-native';

// Store import
import {persistor, store} from 'redux/store';

/**
 * App component
 * @return {object}
 */
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Universal React with Expo</Text>
        </View>
      </PersistGate>
    </Provider>
  );
}
