import 'react-native-gesture-handler'; // Bu satırın en üstte olduğundan emin olun
import { registerRootComponent } from 'expo';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/login/LoginHome';
import LoginForm from './screens/login/LoginForm';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginHome" component={HomeScreen}>
        <Stack.Screen name="LoginHome" component={HomeScreen} />
        <Stack.Screen name="LoginForm" component={LoginForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
