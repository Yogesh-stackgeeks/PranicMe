import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground, View, ScrollView, Platform, Modal, FlatList } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import imagePath from '../constants/imagePath';
import UserPostApi from '../api/userApi';
import { apiGet, apiPost } from '../utils/utils';
import { HEIGHT_USER, LIST_COUNTRY, REGISTER_USER, WEIGHT_USER } from '../config/urls';
import { Header } from 'react-native/Libraries/NewAppScreen';
import SignUpData, { Weight } from '../components/SignUpData';
class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: '',
            weight: '',
            height: '',
            country: '',
            "timeZone": "Asia/Kolkata",
            "deviceType": Platform.OS.toUpperCase()
        }
        this.state = {
            arrData: [{gender : 'hello'}],
            arrList : [],
            visible: false,
            arrGender : [{gender : 'Male' , number : 1},
            {gender : 'Female' , number : 2},
            {gender : 'Other' , number : 3},],
            arrNew : [],
            modalHeight : false,
            modalWeight : false,
            modalCountry : false
        
        }

    }

    moveSignIn = () => {
        this.props.navigation.navigate('Login')
    }

    onClickList = () => {
        this.setState({ visible: false , modalHeight : false ,  modalWeight : false, modalCountry : false})
    }

    listGender = ()=>{
        this.setState({visible : true})
    }
     
    listHeight =()=>{
        this.setState({modalHeight : true})
        apiGet(HEIGHT_USER, this.arrData,{   "accept-language": "en"})
        .then(function (response) {
            console.log(response.data.listing)
            var list = (response.data.listing).length;
            var a = []
            for (var i = 0; i < list; i++) 
            {
             var counter = response.data.listing[i];
              Name=counter.name
              ID = counter._id
               a.push({Name : Name , ID : ID})
              
             }
        })
        .catch(function (error) {
            console.log(error);
            alert('error')
        });
       
    }

    listWeight =()=>{
        this.setState({modalWeight : true})
        apiGet(WEIGHT_USER, this.arrData,{   "accept-language": "en"})
        .then(function (response) {
})
        .catch(function (error) {
            console.log(error);
            alert('error')
        });

    }

    listCountry =()=>{
        this.setState({modalCountry : true})
        apiGet(LIST_COUNTRY, this.arrData,{   "accept-language": "en"})
        .then(function (response) {

        })
        .catch(function (error) {
            console.log(error);
            alert('error')
        });

    }



    registerUser = () => {
        apiPost(REGISTER_USER, this.state,
            {
                "accept-language": "en"
            })
            .then(function (response) {
                console.log(response);
                alert('data sended')

            })
            .catch(function (error) {
                console.log(error);
                alert('error')
            });


    }
openModal =()=>{
    this.setState({visible : true})
}

    onSignUp = () => {
        this.registerUser()
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', padding: 40 }}>
                    <Image source={imagePath.logo} style={{ height: 130, width: 150 }} />
                </View>
                <View style={{ flex: 1, padding: 10 }}>
                    <Text style={{ fontSize: 35 }}>Sign Up</Text>
                </View>
                <View style={{ borderTopWidth: 2, width: 50, marginLeft: 10, borderColor: 'purple' }} />
                <View style={{ flex: 1, padding: 20 }}>
                    <Text style={{ color: 'gray', fontSize: 13 }}>Free App with-in App Purchase & in-App Lotus Points to</Text>
                    <Text style={{ marginTop: 8, color: 'gray', fontSize: 13 }}>open New Features.Access the whole App for Free for</Text>
                    <Text style={{ marginTop: 8, color: 'gray', fontSize: 13 }}>one week when You Sign Up for a Membership </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', padding: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderRadius: 30 }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={imagePath.user} style={{ height: 20, width: 20 }} />
                            </View>
                            <View style={{ flex: 2, justifyContent: 'center' }}>
                                <TextInput onChangeText={(text) => this.setState({ firstName: text })} placeholder='First Name' />
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, marginLeft: 20, borderRadius: 30, height: 40 }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={imagePath.user} style={{ height: 20, width: 20 }} />
                            </View>
                            <View style={{ flex: 2, justifyContent: 'center' }}>
                                <TextInput onChangeText={(text) => this.setState({ lastName: text })} placeholder='Last Name' />
                            </View>
                        </View>
                    </View>

                    <View style={styles.inputs}>
                        <View style={styles.imageView}>
                            <Image source={imagePath.email} style={{ height: 20, width: 20 }} />
                        </View>
                        <View style={{ flex: 5, justifyContent: 'center' }}>
                            <TextInput onChangeText={(text) => this.setState({ email: text })} placeholder='Email' />
                        </View>
                    </View>

                    <View style={styles.inputs}>
                        <View style={styles.imageView}>
                            <Image source={imagePath.lock} style={{ height: 20, width: 20 }} />
                        </View>
                        <View style={{ flex: 5, justifyContent: 'center' }}>
                            <TextInput onChangeText={(text) => this.setState({ password: text })} placeholder='Password' />
                        </View>
                    </View>

                    <View style={styles.inputs}>
                        <View style={styles.imageView}>
                            <Image source={imagePath.gender} style={{ height: 20, width: 20 }} />
                        </View>
                        <View style={{ flex: 4, justifyContent: 'center' }}>
                            <TextInput onChangeText={(text) => this.setState({ gender: text })} placeholder='Gender' />
                        </View>
                        <TouchableOpacity onPress ={this.listGender} style={styles.imageView}>
                            <Image source={imagePath.shape} style={{ height: 15, width: 15 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputs}>
                        <View style={styles.imageView}>
                            <Image source={imagePath.weightScale} style={{ height: 15, width: 15 }} />
                        </View>
                        <View style={{ flex: 4, justifyContent: 'center' }}>
                            <TextInput onChangeText={(text) => this.setState({ weight: text })} placeholder='Weight' />
                        </View>
                        <TouchableOpacity onPress ={this.listWeight} style={styles.imageView}>
                            <Image source={imagePath.shape} style={{ height: 15, width: 15 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputs}>
                        <View style={styles.imageView}>
                            <Image source={imagePath.height} style={{ height: 15, width: 15 }} />
                        </View>
                        <View style={{ flex: 4, justifyContent: 'center' }}>
                            <TextInput onChangeText={(text) => this.setState({ height: text, visible: true })} placeholder='Height' />
                        </View>
                        <TouchableOpacity onPress ={this.listHeight} style={styles.imageView}>
                            <Image source={imagePath.shape} style={{ height: 15, width: 15 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputs}>
                        <View style={styles.imageView}>
                            <Image source={imagePath.arctic} style={{ height: 15, width: 15 }} />
                        </View>
                        <View style={{ flex: 4, justifyContent: 'center' }}>
                            <TextInput onChangeText={(text) => this.setState({ country: text })} placeholder='Country' />
                        </View>
                        <TouchableOpacity onPress ={this.listCountry} style={styles.imageView}>
                            <Image source={imagePath.shape} style={{ height: 15, width: 15 }} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={this.onSignUp} style={{ flex: 1, height: 50, borderRadius: 30, borderWidth: 1, marginTop: 30, justifyContent: 'center', backgroundColor: 'purple' }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 90 }}>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                        <Image source={imagePath.facebook} style={{ height: 50, width: 50 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                        <Image source={imagePath.google} style={{ height: 50, width: 50 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                        <Image source={imagePath.twitter} style={{ height: 50, width: 50 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={this.moveSignIn}>
                        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: 'gray' }}>Already have an account? Sign In Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                    <Modal
                        visible={this.state.visible}
                        animationType="slide"
                        transparent={true}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <FlatList
                                    data={this.state.arrGender}
                                    renderItem={(index, item) => (

                                        <SignUpData
                                            onClickList={this.onClickList}
                                            item = {item}
                                            index = {index}
                                        />

                                    )
                                    } />
                            </View>
                        </View>
                    </Modal>
                </View>



                <View style={{ flex: 1 }}>
                    <Modal
                        visible={this.state.modalHeight}
                        animationType="slide"
                        transparent={true}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <FlatList
                                    data={this.state.arrData}
                                    renderItem={(index, item) => (

                                        <SignUpData
                                            onClickList={this.onClickList}
                                            item = {item}
                                            index = {index}
                                        />

                                    )
                                    } />
                            </View>
                        </View>
                    </Modal>
                </View>







            </ScrollView>
        )

    }

}
export default SignUp;

const styles = StyleSheet.create({
    imageView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputs: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 30,
        height: 40,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 30,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        height: 300,
        shadowOffset: {
            width: 0,
            height: 2
        },
    }
});