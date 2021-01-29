import * as React from 'react';
import {View, Text} from 'react-native';

/**
 * App component
 * @return {object}
 */
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Universal React with Expo</Text>
    </View>
  );
}
