import React from 'react';
import {View , Text ,TouchableOpacity} from 'react-native';
 

const SignUpData = (props) =>{
const item = props.item
const index = props.index
 const onPress = props.onPress


const onClick =(index)=>{
    onPress(index)  
}
return(
          <View  > 
               <View style ={{flex : 1 , justifyContent : 'center' , margin : 35}}>
               <TouchableOpacity onPress ={()=>onClick(index)} >
                    <Text style ={{fontWeight : 'bold' , fontSize : 20 , textAlign : 'center'}}>{index.item.name}</Text>
                    </TouchableOpacity>
               </View>
          </View>
     )
}

export default SignUpData;
    











