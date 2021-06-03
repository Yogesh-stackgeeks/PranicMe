import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {Text , StyleSheet, TouchableOpacity , TextInput,FlatList , Image , ImageBackground, View, ScrollView, SafeAreaView} from 'react-native';
import BreathData from '../components/BreathData';
import imagePath from '../constants/imagePath';
import WrapperContainer from '../constants/WrapperContainer';
import commonStyles from '../styles/commonStyles';


class Breath extends Component {
constructor(){
    super()
     this.state ={
         arrData :["" , "" ,"", "" , "" ,"" ,""]
     }
}



render(){
return(
<WrapperContainer>
<ScrollView>
<View style ={{flex :1 , flexDirection : 'row' , backgroundColor : 'purple' , height :  70 , padding : 5 , borderBottomLeftRadius : 20 , borderBottomRightRadius : 20}}>
<TouchableOpacity style ={{flex :1 , justifyContent : 'center'}}>
    <Image source ={imagePath.back} style ={{height : 20 , width : 30}}  />
</TouchableOpacity>
<View style ={{flex :3 , justifyContent :'center'}}>
    <Text style ={[commonStyles.fontBold21, {textAlign : 'center', color : 'white'}]}>Pranayama Breathing</Text>
</View>
<View style ={{flex :1 , justifyContent : 'center' , alignItems : 'flex-end'}}>
    <ImageBackground source ={imagePath.lotus} style ={{height : 30 , width : 40}} >
    <Text style ={{justifyContent : 'center' , textAlign : 'center' , marginTop: 10 , fontWeight : 'bold' , color : 'purple'}}>0</Text>
    </ImageBackground>
</View>
</View>
<View style ={{flex : 1 , marginTop : 20}}>
<Text style = {[commonStyles.fontSize12, {color : 'gray' , textAlign : 'center' , fontWeight : 'bold'}]}>Earn and Accumulate Lotus Points With</Text>
</View>
<View style ={{flex : 1 , marginTop : 2}}>
<Text style = {[commonStyles.fontSize12, {color : 'gray' , textAlign : 'center' , fontWeight : 'bold'}]}>each Breath Meditations to Unlock</Text>
</View>
<View style ={{flex : 1 , marginTop : 2}}>
<Text style = {[commonStyles.fontSize12, {color : 'gray' , textAlign : 'center' , fontWeight : 'bold'}]}>in-App New Features</Text>
</View>

<View>
<FlatList
data ={this.state.arrData}
renderItem = {(item , index)=>(

<BreathData />


)
} />



</View>






</ScrollView>

</WrapperContainer>

)





}







}
export default Breath;