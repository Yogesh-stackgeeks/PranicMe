import React from 'react';
import {Text , View , TouchableOpacity , StyleSheet, Image } from 'react-native'
import imagePath from '../constants/imagePath';


const BreathData = (props)=>{


return(
<TouchableOpacity activeOpacity ={0.9} style ={{flex : 1 , flexDirection : 'row', marginTop : 30 ,  marginHorizontal : 20 , borderRadius: 20 , borderBottomWidth : 0.5 , borderLeftWidth : 0.5 , borderRightWidth : 0.5 , borderColor : 'lightgray'}}>
<View style ={{flex : 2}}>
<Image source ={imagePath.bitmap} style ={{borderTopLeftRadius : 20 , borderBottomLeftRadius : 20 , width : 130 , height : 100}} />
</View>
<View style ={{flex : 1 , justifyContent : 'center'}}>
<Text style ={{fontSize : 20 , fontWeight : 'bold', color : 'gray' }}>Relax</Text>
</View>
<View style ={{flex : 1 , justifyContent : 'center' , alignItems : 'flex-end'}}>
<Image source ={imagePath.right} style ={{height : 20 , width :  20}} />
</View>



</TouchableOpacity>


)



}
export default BreathData;