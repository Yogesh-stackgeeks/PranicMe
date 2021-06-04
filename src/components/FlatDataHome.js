import React from 'react';
import {View , Text ,TouchableOpacity , Image} from 'react-native';
import imagePath from '../constants/imagePath';

const FlatDataHome = (props)=>{
    const item = props.items
    const index = props.index

return(
    <View style ={{flex :1 , flexDirection : 'column'  , marginVertical :10 , borderWidth : 0.4 , borderRadius : 20 }}>
<TouchableOpacity activeOpacity ={0.9} style ={{flex :1 , flexDirection : 'row' , height : 40 , marginLeft : 10 }}>
<View style ={{flex :3, justifyContent : 'center'}}>
<Text style = {{fontSize : 13 , fontStyle : 'italic'}}>{item.title}</Text>
</View>
<View style ={{flex :1 , justifyContent : 'center' , alignItems : 'flex-end' , marginRight : 10 }}>
<Image source ={imagePath.right} style ={{height : 15 , width : 15}}  />
</View>
</TouchableOpacity>
<View style ={{flex :1}}>
<Image source = {item.images}  style ={{height : 120 , width : "100%" , borderBottomRightRadius : 20 , borderBottomLeftRadius : 20}} />
</View>
</View>

)

}

export default FlatDataHome;