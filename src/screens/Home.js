import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {Text , StyleSheet, TouchableOpacity , TextInput,FlatList , Image , ImageBackground, View, ScrollView, SafeAreaView} from 'react-native'
import { color } from 'react-native-reanimated';
import FlatDataHome from '../components/FlatDataHome';
import imagePath from '../constants/imagePath';
import WrapperContainer from '../constants/WrapperContainer';
import TabBar from '../navigation/TabBar';
import commonStyles from '../styles/commonStyles';


class Home extends Component{
    constructor(){
        super()
        this.state ={
            arrData : [{title : 'Pranayama Breath Meditation' , images : imagePath.bitmap},
            {title : 'Go Deeper Breath Meditation' , images : imagePath.bitmap1},
            {title : 'Health Management' , images : imagePath.bitmap},
            {title : 'Daily Pranayama Breath Medication Course' , images : imagePath.group11}]
        }
    }
render(){
    return(
        <WrapperContainer>
<ScrollView style = {{flex :1}}>
<View style ={{flex :1  , backgroundColor : 'purple' , flexDirection : 'row' , height : 50 }}>
<View style ={{flex :1, justifyContent : 'center'  }}>
    <Text style ={[commonStyles.fontSize24,{color : 'white' , textAlign : 'center' }]}>Pranic Me</Text>
</View>
<View style ={{flex :0.3, justifyContent : 'center' , alignItems : 'center'}}>
<ImageBackground source ={imagePath.lotus} style ={{height : 30 , width : 40 , justifyContent : 'center'}}>
<Text style = {{textAlign : 'center' , fontSize : 15  , fontWeight : 'bold'}}>200</Text>
</ImageBackground>
</View>
</View>
<View style ={{padding : 20, paddingTop : 40 , justifyContent : 'center'}}>
    <Text style ={{textAlign : 'center' , fontSize : 30 , fontWeight : '500'}}>Choose Your Pranayama </Text>
    <Text style ={{textAlign : 'center' , fontSize : 30 , fontWeight : '500'}}>Breath Meditation</Text>
</View>
<View style ={{marginTop : 10 , alignItems : 'center'}}>
<Text style ={{fontSize : 15 , fontWeight : '300' , color : 'gray'  }}>What would you like to focus on Today</Text> 
</View>

<View style ={{margin : 20}}>

<FlatList
                            data={this.state.arrData}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                            <FlatDataHome items = {item}
                            index ={index} />

                            }
                            />


</View>




</ScrollView>
</WrapperContainer>

    )
    

    

}






}
export default Home;