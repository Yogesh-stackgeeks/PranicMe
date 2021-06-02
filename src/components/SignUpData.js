import React from 'react';
import { Component } from 'react';
import {View , Text ,TouchableOpacity , StyleSheet , Image} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import commonStyles from '../styles/commonStyles';
 

const SignUpData = (props) =>{
     console.log(props , "proprties")
const item = props.item
const index = props.index
 const onClickList = props.onClickList

const onclick =()=>{
     onClickList()
}

return(
          <View > 
               <View style ={{flex : 1 , justifyContent : 'center' , margin : 10}}>
               <TouchableOpacity onPress ={onclick} >
                    <Text style ={{fontWeight : 'bold' , fontSize : 20 , textAlign : 'center'}}>{index.item.gender}</Text>
                    </TouchableOpacity>
               </View>
          </View>
         



     )
}

export default SignUpData;
    











