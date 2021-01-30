import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Home from './src/components/Home';
import AddDeck from './src/components/AddDeck';
import AddCard from './src/components/AddCard';
import Deck from './src/components/Deck';
import Quiz from './src/components/Quiz';
import {createStackNavigator} from '@react-navigation/stack';

// Store import
import {persistor, store} from './src/redux/store';
import TabBarIcon from './src/components/TabBarIcon';
import {Platform} from 'react-native';
import {purple, white} from './src/utils/colors';
import {setLocalNotification} from './src/redux/actions/notifications';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MyStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: purple},
      headerTintColor: white,
      headerTitleStyle: {
        position: 'absolute',
        bottom: -10,
        right: '53.5%',
      },
    }}
  >
    <Stack.Screen name="Decks" component={Home} />
    <Stack.Screen name="Add Card" component={AddCard} />
    <Stack.Screen
      name="Deck"
      component={Deck}
      options={({route}) => ({title: route.params.title})}
    />
    <Stack.Screen name="Quiz" component={Quiz} />
  </Stack.Navigator>
);

/**
 * App component
 * @component
 */
class App extends React.Component {
  /**
   * @return {function}
   */
  componentDidMount = () => store.dispatch(setLocalNotification());

  /**
   * @return {object} - The UI DOM object
   */
  render = () => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            navigationOptions={{header: null}}
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color}) => {
                const iconColor = focused ? white : color;
                return (
                  <TabBarIcon screenName={route.name} tintColor={iconColor} />
                );
              },
              tabBarLabel: route.name,
            })}
            tabBarOptions={{
              activeTintColor: Platform.OS === 'ios' ? purple : white,
              style: {
                height: 56,
                backgroundColor: Platform.OS === 'ios' ? white : purple,
                shadowColor: 'rgba(0,0,0,0.24)',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowRadius: 6,
                shadowOpacity: 1,
              },
            }}
          >
            <Tab.Screen name="Home" component={MyStack} />
            <Tab.Screen name="Add Deck" component={AddDeck} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
