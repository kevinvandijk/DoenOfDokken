import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import SetGoal from './screens/SetGoal';

const Stack = createStackNavigator();

const DoDTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const App: () => React$Node = () => {
  return (
    <NavigationContainer theme={DoDTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SetGoal" component={SetGoal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
