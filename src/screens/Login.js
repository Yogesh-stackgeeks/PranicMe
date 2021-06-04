import React, { Component } from 'react';
import {Text , StyleSheet, TouchableOpacity , TextInput , Image , View, ScrollView} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import imagePath from '../constants/imagePath';
import WrapperContainer from '../constants/WrapperContainer';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


class Login extends Component{
constructor(){
    super()
    this.state = {
        email : '',
        password : '',
    }
}
moveSignUp =()=>{
    this.props.navigation.navigate('SignUp' )
}
 
  
  onSignIn = () => {
        this.props.navigation.navigate('Home')
  }

render(){
    return(
        <WrapperContainer>
<KeyboardAwareScrollView style ={{flex :1}}>
<View style ={{ alignItems : 'center'}}>
    <Image source ={imagePath.logo}   style ={{height : 130 , width :150}}  />
</View>
<View style ={{padding : 10}}>
    <Text style ={commonStyles.fontSize30}>Sign in</Text>
</View>
<View style ={{borderTopWidth : 2 , width : 50 , marginLeft : 10 , borderColor : 'purple'}} />
<View style ={{ padding : 20}}>
    <Text style ={[commonStyles.fontSize12,{color : colors.textGrey}]}>Take Responsibility for Your Health , Welness , Physical</Text>
    <Text style ={[commonStyles.fontSize12,{color : colors.textGrey}, {marginTop : 5}]}>Wellbeing , Mental Clarity & Emotional Stability</Text>
    <Text style ={[commonStyles.fontSize12,{color : colors.textGrey}, {marginTop : 5}]}>In Just 7 Minutes a Day! Become a Pranayama Cosmic</Text>
    <Text style ={[commonStyles.fontSize12,{color : colors.textGrey}, {marginTop : 5}]}>Ruler. Discover Your Uniqueness and Power!</Text>

</View>

<View style ={{flexDirection : 'column'}}>
<View style ={styles.inputsView}>
<View style ={{flex : 1 ,justifyContent : 'center' , alignItems : 'center' }}>
    <Image source = {imagePath.email} style ={{height : 20 , width : 20}}  />
</View>
<View style ={{flex : 5 ,justifyContent : 'center'}}>
    <TextInput onChangeText = {(text)=>this.setState({email : text})} placeholder = "Email Address"  placeholderTextColor  = 'gray'  />
</View>
</View>

<View style ={styles.inputsView}>
<View style ={{flex : 1 ,justifyContent : 'center' , alignItems : 'center' }}>
    <Image source = {imagePath.lock} style ={{height : 20 , width : 20}}  />
</View>
<View style ={{flex : 5 , justifyContent : 'center'}}>
    <TextInput onChangeText = {(text)=>this.setState({password : text})} placeholder = "Password"  placeholderTextColor  = 'gray' />
</View>
</View>
</View>

<TouchableOpacity>
    <Text style = {[commonStyles.fontBold16,{textAlign : 'center'}]}>Forget Password ? </Text>
</TouchableOpacity>

    <TouchableOpacity onPress = {this.onSignIn} style ={styles.buttons}>
        <Text style ={[commonStyles.fontSize15,{color : colors.white , textAlign : 'center'}]}>Sign In</Text>
    </TouchableOpacity>

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

<TouchableOpacity activeOpacity = {0.8} onPress ={this.moveSignUp} style ={{marginTop : 20}}>
    <Text style = {[commonStyles.fontBold16 , {color : colors.textGrey , textAlign : 'center'}]}>Don't have an account? Sign Up Now</Text>
    </TouchableOpacity>


</KeyboardAwareScrollView>
</WrapperContainer>
    )
}
}
export default Login;

const styles = StyleSheet.create({
    inputsView: {
        flexDirection : 'row'
         , margin  : 20 ,
          borderWidth : 1,
          borderRadius : 30,
          borderColor : colors.borderGreyLight, 
          height : 40
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