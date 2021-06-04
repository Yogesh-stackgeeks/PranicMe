import React from 'react';
import { Text, View, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import imagePath from '../constants/imagePath';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const TabBar =()=>{
return(
<Tab.Navigator tabBarOptions={{
  activeTintColor: 'red',
  inactiveTintColor: 'blue',
  showLabel : false ,
  style: {
    elevation: 0,
    position : 'relative',
    bottom : 10,
    backgroundColor : '#F8F8FF',
    borderRadius : 15,
    height : 60,
  },
}} >
        <Tab.Screen name="Home" component={Home} 
        options ={{
          tabBarIcon : ({focused})=>(
        <View style = {{alignItems : 'center', justifyContent : 'center' , top : 10}}>
          <Image source = {imagePath.breathing}  resizeMode = 'contain' style ={{width : 25 , height : 25 , tintColor : focused ? 'red': 'blue'}}/>
          <Text style ={{color :focused ? 'red': 'blue', marginTop : 5}}>Breathing</Text>
        </View>

          )
        }}
        />
        <Tab.Screen name="History" component={Home} 
           options ={{
          tabBarIcon : ({focused})=>(
        <View style = {{alignItems : 'center', justifyContent : 'center' , top : 10}}>
          <Image source = {imagePath.experience}  resizeMode = 'contain' style ={{width : 25 , height : 25 , tintColor : focused ? 'red': 'blue'}}/>
          <Text style ={{color :focused ? 'red': 'blue', marginTop : 5}}>Experience</Text>
        </View>

          )
        }}
        />
        <Tab.Screen name="CheckOut" component={Home}
         options ={{
          tabBarIcon : ({focused})=>(
        <View style = {{alignItems : 'center', justifyContent : 'center' , top : 10}}>
          <Image source = {imagePath.parameters}  resizeMode = 'contain' style ={{width : 25 , height : 25 , tintColor : focused ? 'red': 'blue'}}/>
          <Text style ={{color :focused ? 'red': 'blue', marginTop : 5}}>Parameters</Text>
        </View>

          )
        }} />
        <Tab.Screen name="Profile" component={Home}
         options ={{
          tabBarIcon : ({focused})=>(
        <View style = {{alignItems : 'center', justifyContent : 'center' , top : 10}}>
          <Image source = {imagePath.daily}  resizeMode = 'contain' style ={{width : 25 , height : 25 , tintColor : focused ? 'red': 'blue'}}/>
          <Text style ={{color :focused ? 'red': 'blue' , marginTop : 5}}>Daily Quotes</Text>
        </View>

          )
        }} />

      </Tab.Navigator>

)
}
export default TabBar;