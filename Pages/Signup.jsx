import { ScrollView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Checkbox, Modal } from 'react-native-paper'
import { Styles } from '../Components/Stylesheets'
import Button from '../Components/Button'
import { useNavigation } from '@react-navigation/native'
import OTPModal from '../Components/OTPModal'

const { width, height } = Dimensions.get("screen")

export default function Signup() {
    const [checked, setChecked] = useState(false);
    const [OTP, setOTP] = useState(false);

    const Navigation = useNavigation()

    return (
        <ScrollView style={styles.container}>
            <View style={{ height: height }}>
                <View style={styles.Logocontainer}>
                    <Image source={require('../assets/splash1.png')} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={styles.welcometxt}>
                        Singup
                    </Text>
                    <Text style={styles.subheadtxt}>
                        Signup by using email or social
                    </Text>
                </View>

                <View style={styles.formcontainer}>
                    <View style={{ marginTop: 20 }}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                label={"Email"}
                                style={styles.Inputfiled}
                                theme={{ roundness: 10 }}
                                autoCapitalize="none"
                                activeOutlineColor="#1DAB45"
                                textColor='#000'
                                mode="outlined"
                                outlineColor='#92CAA2'
                                placeholder='Enter Your Email'
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                label={"Password"}
                                secureTextEntry={true}
                                theme={{ roundness: 10 }}
                                style={styles.Inputfiled}
                                mode="outlined"
                                textColor='#000'
                                activeOutlineColor="#1DAB45"
                                outlineColor='#92CAA2'
                                autoCapitalize="none"
                                right={
                                    <TextInput.Icon
                                        name="eye"
                                        onPress={() => console.log("hello")}
                                    />
                                }
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                label={"Confirm Password"}
                                style={styles.Inputfiled}
                                theme={{ roundness: 10 }}
                                textColor='#000'
                                secureTextEntry={true}
                                mode="outlined"
                                activeOutlineColor="#1DAB45"
                                outlineColor='#92CAA2'
                                autoCapitalize="none"
                                right={
                                    <TextInput.Icon
                                        name="eye"
                                        onPress={() => console.log("hello")}
                                    />
                                }
                            />
                        </View>
                    </View>

                    <View
                        style={
                            [
                                Styles.Row,
                                Styles.justifyContent_between,
                                Styles.marginTop1,
                                Styles.AlignItem_center
                            ]}>
                        <View style={[Styles.Row, Styles.AlignItem_center]}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                                color='#1DAB45'
                            />

                            <View style={
                                [
                                    Styles.Row,
                                    Styles.AlignItem_center,
                                    Styles.justifyContent_between
                                ]
                            }>
                                <Text style={styles.servicetxt}>
                                    Accept
                                </Text>

                                <TouchableOpacity>
                                    <Text style={styles.Servicetxtlabel}>
                                        terms of service
                                    </Text>
                                </TouchableOpacity>

                                <Text style={styles.servicetxt}>
                                    &
                                </Text>

                                <TouchableOpacity>
                                    <Text style={styles.Servicetxtlabel}>
                                        privacy policies
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View>
                        <Button Lable={"Signup"} onPress={() => { setOTP(true) }} />
                    </View>
                </View>

                <View
                    style={[
                        Styles.Row,
                        styles.signupform,
                    ]}>

                    <Text
                        style={
                            styles.signuptaglabel
                        }
                    >
                        Already have an account ?
                    </Text>

                    <TouchableOpacity onPress={() => { Navigation.navigate("Login") }}>
                        <Text style={styles.signuplabel}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>

                <Modal
                    visible={OTP}
                    style={{ height: height }}
                    contentContainerStyle={styles.containerStyle}
                    onDismiss={() => setOTP(false)}
                    dismissableBackButton={true}
                >
                    <OTPModal />
                </Modal>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        backgroundColor: "#FFFFFF",
        flex: 1
    },
    Logocontainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 90
    },
    welcometxt: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 36
    },
    subheadtxt: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 21,
        marginTop: 10
    },
    formcontainer: {
        marginHorizontal: 20,
        marginVertical: 15,
    },
    inputContainer: {
        marginVertical: 10
    },
    // Inputfiled: {
    //     borderRadius: 20,
    //     padding: 5
    // },
    servicetxt: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 21
    },
    Servicetxtlabel: {
        color: "#23B14B",
        marginHorizontal: 5
    },
    signuptaglabel: {
        textAlign: "center"
    },
    signuplabel: {
        color: "#1DAB45",
        fontWeight: "500",
        fontSize: 14,
        marginHorizontal: 5
    },
    signupform: {
        // position: "absolute",
        bottom: 0,
        width: width,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    containerStyle: {
        backgroundColor: "#fff",
        height: height / 3,
        marginHorizontal: 40,
        borderRadius: 20
    }
})