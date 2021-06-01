import React from 'react';
import { Component } from 'react';
import {View , Text ,TouchableOpacity , StyleSheet , Image} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

 

const SignUpData = (props) =>{

 const onClickList = props.onClickList

const onclick =()=>{
     onClickList()
}

return(
          <View style ={{flex :1 , justifyContent : 'center' }}>
               <View style ={{flex :1 , justifyContent : 'center' , marginTop : 100}}>
               <TouchableOpacity onPress ={onclick} >
                    <Text style ={{textAlign : 'center'}}>Hello this is modal</Text>
                    </TouchableOpacity>
               </View>
          </View>



     )
}

export default SignUpData;
    













