import React from 'react';
import Routes from './src/navigation/Routes';
import Home from './src/screens/Home';
import {SafeAreaView} from 'react-native';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';

import { NavigationContainer } from '@react-navigation/native';
import TabBar from './src/navigation/TabBar';

export default function App(){
return(
  <SignUp />
  // < NavigationContainer>
  // <TabBar />
  // </NavigationContainer>
  
)
}
