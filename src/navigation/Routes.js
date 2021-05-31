import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createStackNavigator()

 export default function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen options = {{headerShown : false}} name={navigationStrings.Login} component={Login} />
        <Stack.Screen options = {{headerShown : false}} name={navigationStrings.SignUp} component={SignUp} />
        <Stack.Screen options = {{headerShown : false}} name={navigationStrings.Home} component={Home} />
        </Stack.Navigator>
        </NavigationContainer>
    )}