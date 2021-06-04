import React from 'react';
import {Text} from 'react-native'
import Routes from './src/navigation/Routes';
import Home from './src/screens/Home';
import {SafeAreaView} from 'react-native';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import TabBar from './src/navigation/TabBar';
import { moderateScale, textScale } from './src/styles/responsiveSize';
import fontFamily from './src/styles/fontFamily';
import Breath from './src/screens/Breath';

export default function App(){
return(
<SafeAreaProvider>
  < Routes />
    <FlashMessage
          titleStyle={{
            marginRight: moderateScale(5),
            fontFamily: fontFamily.medium,
            fontSize: textScale(16)
          }}
          position="top" />
  {/* <NavigationContainer>
  <TabBar />
  </NavigationContainer> */}

</SafeAreaProvider>
  
)
}
