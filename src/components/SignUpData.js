import React from 'react';
import { Component } from 'react';
import {View , Text ,TouchableOpacity , StyleSheet , Image} from 'react-native';
import commonStyles from '../styles/commonStyles';
 

const SignUpData = (props) =>{
const item = props.item
const index = props.index
 const onClickGender = props.onClickGender

 
const onclick =(index)=>{
    onClickGender(index)  
}
return(
          <View > 
               <View style ={{flex : 1 , justifyContent : 'center' , margin : 15}}>
               <TouchableOpacity onPress ={()=>onclick(index)} >
                    <Text style ={{fontWeight : 'bold' , fontSize : 20 , textAlign : 'center'}}>{index.item.name}</Text>
                    </TouchableOpacity>
               </View>
          </View>
         



     )
}

export default SignUpData;
    











