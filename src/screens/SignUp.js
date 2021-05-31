import React, { Component } from 'react';
import {Text , StyleSheet, TouchableOpacity , TextInput , Image , ImageBackground, View, ScrollView} from 'react-native'
import imagePath from '../constants/imagePath';
import UserPostApi from '../api/userApi'
class SignUp extends Component{
constructor(){
    super()
    this.state = {
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        gender : '',
        weight : '',
        height : '',
        country : ''

    }
}

moveSignIn =()=>{
 this.props.navigation.navigate('Login')
}




onSignUp =()=>{
   console.log(this.state.firstName , this.state.lastName)
}

render(){
return(
<ScrollView style ={{flex :1}}>
<View style ={{flex :1 , alignItems : 'center' , padding : 40}}>
    <Image source ={imagePath.logo}   style ={{height : 130 , width :150}}  />
</View>
<View style ={{flex : 1 , padding : 10}}>
    <Text style ={{fontSize : 35 }}>Sign Up</Text>
</View>
<View style ={{borderTopWidth : 2 , width : 50 , marginLeft : 10 , borderColor : 'purple'}} />
<View style ={{flex : 1 , padding : 20}}>
    <Text style ={{color : 'gray'  , fontSize : 13}}>Free App with-in App Purchase & in-App Lotus Points to</Text>
    <Text style ={{marginTop :  8 , color : 'gray' ,fontSize : 13}}>open New Features.Access the whole App for Free for</Text>
    <Text style ={{marginTop :  8 , color : 'gray' ,fontSize : 13}}>one week when You Sign Up for a Membership </Text>
</View>
<View style ={{flex : 1 , flexDirection : 'column', padding : 20}}>
<View style ={{flex : 1 , flexDirection : 'row'}}>
<View style ={{flex : 1 , flexDirection : 'row' , borderWidth : 1 ,  borderRadius : 30}}>
<View style = {{flex :1 , justifyContent : 'center' , alignItems : 'center'}}>
<Image source = {imagePath.user} style ={{height : 20 , width : 20}} />
</View>
<View style ={{flex : 2, justifyContent : 'center' }}>
    <TextInput onChangeText={(text)=> this.setState({firstName : text})} placeholder = 'First Name' />
    </View>
</View>
<View style ={{flex : 1 , flexDirection : 'row' , borderWidth : 1 , marginLeft : 20 , borderRadius : 30 , height  :40}}>
<View style = {{flex :1 , justifyContent : 'center', alignItems : 'center'}}>
<Image source = {imagePath.user} style ={{height : 20 , width : 20}} />
</View>
<View style ={{flex : 2 , justifyContent : 'center'}}>
    <TextInput onChangeText={(text)=>this.setState({lastName : text})} placeholder = 'Last Name' />
    </View>
</View>
</View>

<View style ={styles.inputs}>
<View style ={styles.imageView}>
<Image source = {imagePath.email} style ={{height : 20 , width : 20}} />
</View>
<View style ={{flex :5 , justifyContent : 'center'}}>
    <TextInput onChangeText={(text)=>this.setState({email : text})} placeholder = 'Email' />
    </View>
</View>

<View style ={styles.inputs}>
<View style ={styles.imageView}>
<Image source = {imagePath.lock} style ={{height : 20 , width : 20}} />
</View>
<View style ={{flex :5, justifyContent : 'center'}}>
    <TextInput placeholder = 'Password' />
    </View>
</View>

<View style ={styles.inputs}>
<View style ={styles.imageView}>
<Image source = {imagePath.gender} style ={{height : 20 , width : 20}} />
</View>
<View style ={{flex :4, justifyContent : 'center'}}>
    <TextInput onChangeText={(text)=>this.setState({gender : text})} placeholder = 'Gender' />
    </View>
    <View style ={styles.imageView}>
        <Image source = {imagePath.shape} style ={{height : 15 , width : 15}} />
    </View>
</View>

<View style ={styles.inputs}>
<View style ={styles.imageView}>
<Image source = {imagePath.weightScale} style ={{height : 15 , width : 15}} />
</View>
<View style ={{flex :4, justifyContent : 'center'}}>
    <TextInput onChangeText={(text)=>this.setState({weight : text})} placeholder = 'Weight' />
    </View>
    <View style ={styles.imageView}>
        <Image source = {imagePath.shape} style ={{height : 15 , width : 15}} />
    </View>
</View>

<View style ={styles.inputs}>
<View style ={styles.imageView}>
<Image source = {imagePath.height} style ={{height : 15 , width : 15}} />
</View>
<View style ={{flex :4, justifyContent : 'center'}}>
    <TextInput onChangeText={(text)=>this.setState({height : text})} placeholder = 'Height' />
    </View>
    <View style ={styles.imageView}>
        <Image source = {imagePath.shape} style ={{height : 15 , width : 15}} />
    </View>
</View>

<View style ={styles.inputs}>
<View style ={styles.imageView}>
<Image source = {imagePath.arctic} style ={{height : 15 , width : 15}} />
</View>
<View style ={{flex :4, justifyContent : 'center'}}>
    <TextInput  onChangeText={(text)=>this.setState({country : text})} placeholder = 'Country' />
    </View>
    <View style ={styles.imageView}>
        <Image source = {imagePath.shape} style ={{height : 15 , width : 15}} />
    </View>
</View>

<TouchableOpacity onPress ={this.onSignUp} style = {{flex :1 , height : 50 , borderRadius : 30 , borderWidth : 1 , marginTop : 30 , justifyContent : 'center' , backgroundColor : 'purple'}}>
     <Text style = {{textAlign : 'center' , color : 'white' , fontSize : 20}}>Sign Up</Text>
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
<TouchableOpacity activeOpacity ={0.8} onPress ={this.moveSignIn}>
    <Text style = {{textAlign : 'center' , fontSize : 15 , fontWeight : 'bold' , color : 'gray'}}>Already have an account? Sign In Now</Text>
    </TouchableOpacity>
</View>
</ScrollView>
)
}

}
export default SignUp;

const styles = StyleSheet.create({
    imageView: {
        flex : 1 ,
        alignItems : 'center',
        justifyContent : 'center'
    },
    inputs : {
        flex : 1 ,
         flexDirection : 'row' ,
          borderWidth : 1 ,
           marginTop : 20, 
           borderRadius : 30,
           height : 40,
    }
});