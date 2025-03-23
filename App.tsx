import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Driver from './app/auth/driver';
import NextPage from './app/auth/NextPage';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Driver">
        <Stack.Screen name="Driver" component={Driver} />
        <Stack.Screen name="NextPage" component={NextPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;