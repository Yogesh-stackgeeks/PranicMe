import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, TextInput, Image, View, ScrollView, Platform, Modal, FlatList } from 'react-native'
import imagePath from '../constants/imagePath';
import WrapperContainer from '../constants/WrapperContainer';
import SignUpData from '../components/SignUpData';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
            "deviceType": Platform.OS.toUpperCase(),

            arrData: [],
            arrHeight: [],
            arrGender: [{ name: 'Male', _id: "1" },
            { name: 'Female', _id: "2" },
            { name: 'Other', _id: "3" },],
            arrCountry: [],
            arrWeight: [],
            indexing: 0,
            showGender: '',
            showWeight: '',
            showHeight: '',
            showCountry: '',
            visible: false,
            isLoading: true,
            search: false,
            searchBar: '',
            label: '',
            showLabel: false,

        }
    }


    changeTextSearch = (e) => {
        let text = e.toLowerCase()
        let data = this.state.arrData
        let filteredName = data.filter((item) => {
            return item.name.toLowerCase().match(text)
        })
        if (!text || text === '') {
            this.setState({ arrData: this.state.arrCountry })
        }
        else if (!Array.isArray(filteredName) && !filteredName.length) {
            alert("No Data Found")
        }
        else if (Array.isArray(filteredName)) {
            this.setState({
                arrData: filteredName
            })
        }
    }


    async componentDidMount() {
        let dataHeight = await userGetHeight()
        let dataWeight = await userGetWeight()
        let dataCountry = await userGetCountry()
        this.setState({ arrHeight: dataHeight, arrWeight: dataWeight, arrCountry: dataCountry, isLoading: false })
    }
    onSignUp = () => {
        const data = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "email": this.state.email,
            "password": this.state.password,
            "gender": this.state.gender,
            "weight": this.state.weight,
            "height": this.state.height,
            "country": this.state.country,
            "timeZone": this.state.timeZone,
            "deviceType": this.state.deviceType
        }
        userRegister(data)
       
    }


    moveSignIn = () => {
        this.props.navigation.navigate('Login')
    }
    onPress = (index) => {
        if (this.state.indexing === 1) {
            const data = this.state.arrData[index.index].name
            const id = this.state.arrData[index.index]._id
            this.setState({ showGender: data, visible: false, gender: id, showLabel: false })
        }
        else if (this.state.indexing === 2) {
            const data = this.state.arrData[index.index].name
            const id = this.state.arrData[index.index]._id
            this.setState({ showWeight: data, visible: false, weight: id, showLabel: false })
        }

        else if (this.state.indexing === 3) {
            const data = this.state.arrData[index.index].name
            const id = this.state.arrData[index.index]._id
            this.setState({ showHeight: data, visible: false, height: id, showLabel: false })

        }
        else if (this.state.indexing === 4) {
            const data = this.state.arrData[index.index].name
            const id = this.state.arrData[index.index]._id
            this.setState({ showCountry: data, visible: false, country: id, search: false, showLabel: false })

        }
    }

    listGender = () => {
        this.setState({ arrData: this.state.arrGender, visible: true, indexing: 1, label: 'Select Gender', showLabel: true })
    }

    listWeight = () => {
        this.setState({ arrData: this.state.arrWeight, visible: true, indexing: 2, label: 'Select Weight', showLabel: true })
    }

    listHeight = () => {
        this.setState({ arrData: this.state.arrHeight, visible: true, indexing: 3, label: 'Select Height', showLabel: true })
    }
    listCountry = () => {
        this.setState({ arrData: this.state.arrCountry, visible: true, indexing: 4, search: true, label: 'Select Country', showLabel: true })
    }

    ItemSeparatorView = () => {
        return (
            <View
                style={{
                    borderBottomWidth: 2,
                    width: '100%',
                    borderBottomColor: colors.backgroundGrey
                }}
            />
        );
    };
    render() {
        return (
            <WrapperContainer isLoading={this.state.isLoading}>
                <KeyboardAwareScrollView >
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
                            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderRadius: 30 , height : 40 }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={imagePath.user} style={{ height: 20, width: 20 }} />
                                </View>
                                <View style={{ flex: 2, justifyContent: 'center' }}>
                                    <TextInput onChangeText={(text) => this.setState({ firstName: text })} style={{ color: colors.blackColor }} placeholder='First Name' />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, marginLeft: 20, borderRadius: 30 , height : 40 }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={imagePath.user} style={{ height: 20, width: 20 }} />
                                </View>
                                <View style={{ flex: 2, justifyContent: 'center' }}>
                                    <TextInput onChangeText={(text) => this.setState({ lastName: text })} style={{ color: colors.blackColor }} placeholder='Last Name' />
                                </View>
                            </View>
                        </View>

                        <View style={styles.inputs}>
                            <View style={styles.imageView}>
                                <Image source={imagePath.email} style={{ height: 20, width: 20 }} />
                            </View>
                            <View style={{ flex: 5, justifyContent: 'center' }}>
                                <TextInput onChangeText={(text) => this.setState({ email: text })} style={{ color: colors.blackColor }} placeholder='Email' />
                            </View>
                        </View>

                        <View style={styles.inputs}>
                            <View style={styles.imageView}>
                                <Image source={imagePath.lock} style={{ height: 20, width: 20 }} />
                            </View>
                            <View style={{ flex: 5, justifyContent: 'center' }}>
                                <TextInput onChangeText={(text) => this.setState({ password: text })} style={{ color: colors.blackColor }} placeholder='Password' />
                            </View>
                        </View>

                        <View style={styles.inputs}>
                            <View style={styles.imageView}>
                                <Image source={imagePath.gender} style={{ height: 20, width: 20 }} />
                            </View>
                            <View style={{ flex: 4, justifyContent: 'center' }}>
                                <TextInput editable={false} defaultValue={this.state.showGender} style={{ color: colors.blackColor }} placeholder='Gender' />
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
                                <TextInput editable={false} value={this.state.showWeight} style={{ color: colors.blackColor }} placeholder='Weight' />
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
                                <TextInput editable={false} value={this.state.showHeight} style={{ color: colors.blackColor }} placeholder='Height' />
                            </View>
                            <TouchableOpacity onPress={this.listHeight} style={styles.imageView}>
                                <Image source={imagePath.shape} style={{ height: 15, width: 15 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputs}>
                            <View style={styles.imageView}>
                                <Image source={imagePath.arctic} style={{ height: 15, width: 15 }} />
                            </View>
                            <View style={{ flex: 4, justifyContent: 'center' }}>
                                <TextInput editable={false} value={this.state.showCountry} style={{ color: colors.blackColor }} placeholder='Country' />
                            </View>
                            <TouchableOpacity onPress={this.listCountry} style={styles.imageView}>
                                <Image source={imagePath.shape} style={{ height: 15, width: 15 }} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={this.onSignUp} style={styles.button}>
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
                            <Text style={[commonStyles.fontBold16, { textAlign: 'center', color: colors.textGrey }]}>Already have an account? Sign In Now</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Modal
                            visible={this.state.visible}
                            animationType="slide"
                            transparent={true}  >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    {this.state.showLabel ? <View>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'gray' }}>{this.state.label}</Text>
                                    </View> : null}
                                    {this.state.search ?
                                        <View style={styles.searchCss}>
                                            <TextInput placeholder="Serach" onChangeText={(e) => this.changeTextSearch(e)} value={this.state.serachBar} style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }} />
                                        </View> : null}

                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        data={this.state.arrData}
                                        ItemSeparatorComponent={this.ItemSeparatorView}
                                        renderItem={(index, item) => (

                                            <SignUpData
                                                onPress={() => this.onPress(index)}
                                                item={item}
                                                index={index} />
                                        )
                                        } />
                                </View>
                            </View>

                        </Modal>
                    </View>


                </KeyboardAwareScrollView>
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
        marginTop: 22
    },
    modalView: {
        margin: 30,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        height: 300,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    searchCss: {
        height: 40,
        justifyContent: 'center',
        borderWidth: 0.5,
        width: '100%',
        borderRadius: 15,
        marginTop: 10
    },
    button : {
        flex: 1, height: 50, 
        borderRadius: 30, 
        borderWidth: 1,
         marginTop: 30, 
         justifyContent: 'center',
          backgroundColor: 'purple' 
    }

});