import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import SetGoal from './screens/SetGoal';
import SelectCheckupBuddy from './screens/SelectCheckupBuddy';
import PaymentReceived from './screens/PaymentReceived';

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
        <Stack.Screen
          name="SelectCheckupBuddy"
          component={SelectCheckupBuddy}
        />
        <Stack.Screen name="PaymentReceived" component={PaymentReceived} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
