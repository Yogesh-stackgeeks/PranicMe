import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, TextInput, Image, View, ScrollView, Platform, Modal, FlatList } from 'react-native'
import imagePath from '../constants/imagePath';
import WrapperContainer from '../constants/WrapperContainer';
import SignUpData from '../components/SignUpData';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import { userGetCountry, userGetHeight, userGetWeight, userRegister } from '../api/userApi';
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
        }, {
            arrData: [],
            arrHeight: [],
            visible: false,
            arrGender: [{ name: 'Male', _id: 1 },
            { name: 'Female', _id: 2 },
            { name: 'Other', _id: 3 },],
            arrCountry: [],
            modalHeight: false,
            modalWeight: false,
            modalCountry: false,
            arrWeight: []

        }
    }


    componentDidMount(){
       userGetHeight()
       userGetCountry()
       userGetWeight()
 
    }

    onSignUp =()=>{
        userRegister()
    }

    moveSignIn = () => {
        this.props.navigation.navigate('Login')
    }

    onClickGender = (index) => {
        this.setState({ visible: false })
        var data = this.state.arrGender[index.index].name
        this.setState({ gender: data })
        console.log(this.state.gender)


    }
    onClickHeight = (index) => {
        this.setState({ modalHeight: false })
        var data = this.state.arrHeight[index.index].name
        this.setState({ height: data })
        console.log(this.state.height)

    }



    listGender = () => {
        this.setState({ visible: true })
    }

    showHeight = () => {
        this.setState({ modalHeight: true })
    }
    listCountry = () => {
        this.setState({ modalCountry: true })
    }
    listWeight = () => {
        this.setState({ modalWeight: true })
    }

    openModal = () => {
        this.setState({ visible: true })
    }

    render() {
        return (
            <WrapperContainer isLoading={false}>
                <ScrollView>
                    <View style={{ alignItems: 'center', padding: 40 }}>
                        <Image source={imagePath.logo} style={{ height: 130, width: 150 }} />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 35 }}>Sign Up</Text>
                    </View>
                    <View style={{ borderTopWidth: 2, width: 50, marginLeft: 10, borderColor: 'purple' }} />
                    <View style={{ padding: 20 }}>
                        <Text style={[commonStyles.fontSize12, { color: colors.textGrey }]}>Free App with-in App Purchase & in-App Lotus Points to</Text>
                        <Text style={[commonStyles.fontSize12, { color: colors.textGrey, marginTop: 6 }]}>open New Features.Access the whole App for Free for</Text>
                        <Text style={[commonStyles.fontSize12, { color: colors.textGrey, marginTop: 6 }]}>one week when You Sign Up for a Membership </Text>
                    </View>
                    <View style={{ flexDirection: 'column', padding: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
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
                                <TextInput value={this.state.gender} placeholder='Gender' />
                            </View>
                            <TouchableOpacity onPress={this.listGender} style={styles.imageView}>
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
                            <TouchableOpacity onPress={this.listWeight} style={styles.imageView}>
                                <Image source={imagePath.shape} style={{ height: 15, width: 15 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputs}>
                            <View style={styles.imageView}>
                                <Image source={imagePath.height} style={{ height: 15, width: 15 }} />
                            </View>
                            <View style={{ flex: 4, justifyContent: 'center' }}>
                                <TextInput value={this.state.height} placeholder='Height' />
                            </View>
                            <TouchableOpacity onPress={this.showHeight} style={styles.imageView}>
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
                            <TouchableOpacity onPress={this.listCountry} style={styles.imageView}>
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
                                        showsVerticalScrollIndicator={false}
                                        data={this.state.arrGender}
                                        renderItem={(index, item) => (

                                            <SignUpData
                                                onPress={() => this.onPress(index)}
                                                item={item}
                                                index={index}
                                            />

                                        )
                                        } />
                                </View>
                            </View>
                        </Modal>
                    </View>


                </ScrollView>
            </WrapperContainer>
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