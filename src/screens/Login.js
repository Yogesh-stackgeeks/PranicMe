import React, { Component } from 'react';
import {Text , StyleSheet, TouchableOpacity , TextInput , Image , ImageBackground, View, ScrollView} from 'react-native'
import imagePath from '../constants/imagePath';


class Login extends Component{
constructor(){
    super()
}

render(){
    return(
<ScrollView style ={{flex :1}}>
<View style ={{flex :1 , alignItems : 'center' , padding : 40}}>
    <Image source ={imagePath.logo}   style ={{height : 130 , width :150}}  />
</View>
<View style ={{flex : 1 , padding : 10}}>
    <Text style ={{fontSize : 35 , fontFamily : 'serif'}}>Sign in</Text>
</View>
<View style ={{borderTopWidth : 2 , width : 50 , marginLeft : 10 , borderColor : 'purple'}} />
<View style ={{flex : 1 , padding : 20}}>
    <Text style ={{color : 'gray' , fontFamily : 'serif' , fontSize : 13}}>Take Responsibility for Your Health , Welness , Physical</Text>
    <Text style ={{marginTop :  8 , color : 'gray' , fontFamily : 'serif',fontSize : 13}}>Wellbeing , Mental Clarity & Emotional Stability</Text>
    <Text style ={{marginTop :  8 , color : 'gray' , fontFamily : 'serif',fontSize : 13}}>In Just 7 Minutes a Day! Become a Pranayama Cosmic</Text>
    <Text style ={{marginTop :  8 , color : 'gray' , fontFamily : 'serif',fontSize : 13}}>Ruler. Discover Your Uniqueness and Power!</Text>

</View>

<View style ={{flex : 1 ,flexDirection : 'column'}}>
<View style ={styles.inputsView}>
<View style ={{flex : 1 ,justifyContent : 'center' , alignItems : 'center' }}>
    <Image source = {imagePath.email} style ={{height : 20 , width : 20}}  />
</View>
<View style ={{flex : 5}}>
    <TextInput placeholder = "Email Address"  placeholderTextColor  = 'gray'  />
</View>
</View>

<View style ={styles.inputsView}>
<View style ={{flex : 1 ,justifyContent : 'center' , alignItems : 'center' }}>
    <Image source = {imagePath.lock} style ={{height : 20 , width : 20}}  />
</View>
<View style ={{flex : 5}}>
    <TextInput placeholder = "Password"  placeholderTextColor  = 'gray' />
</View>
</View>
</View>
<View>
    <Text style = {{textAlign : 'center' , fontWeight : 'bold'}}>Forget Password ? </Text>
</View>
<View style = {{flex : 1}}>
    <TouchableOpacity  style ={styles.buttons}>
        <Text style ={{textAlign : 'center' , color : 'white', fontSize : 15}}>Sign In</Text>
    </TouchableOpacity>
</View>

<View style ={{flexDirection : 'row' , marginHorizontal : 90}}>
<TouchableOpacity style ={{flex : 1 , alignItems : 'center' }}>
    <Image source = {imagePath.facebook} style ={{height : 50 , width : 50}} />
</TouchableOpacity>
<TouchableOpacity style ={{flex : 1  , alignItems : 'center' }}>
    <Image source = {imagePath.google} style ={{height : 50 , width : 50}} />
</TouchableOpacity>
<TouchableOpacity style ={{flex : 1  , alignItems : 'center' }}>
    <Image source = {imagePath.twitter} style ={{height : 50 , width : 50}} />
</TouchableOpacity>
</View>
<View style = {{marginTop : 20}}>
    <Text style = {{textAlign : 'center' , fontSize : 15 , fontWeight : 'bold' , color : 'gray'}}>Don't have an account? Sign Up Now</Text>
</View>











</ScrollView>



    )
}
}
export default Login;

const styles = StyleSheet.create({
    inputsView: {
        flex : 1 , 
        flexDirection : 'row'
         , margin  : 20 ,
          borderWidth : 1,
          borderRadius : 30,
          borderColor : 'gray'
    },
    buttons : {
        backgroundColor : '#BA55D3' ,
         marginHorizontal : 40 ,
         marginVertical : 20 ,
          height : 50 , 
          justifyContent : 'center',
          borderRadius : 30
    }
})