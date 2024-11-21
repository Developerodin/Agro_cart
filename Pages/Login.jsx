import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { TextInput, Checkbox } from 'react-native-paper'
import { Styles } from '../Components/Stylesheets'
import Button from '../Components/Button'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get("screen")

export default function Login() {
    const [checked, setChecked] = React.useState(false);
    const Navigation = useNavigation()

    return (
        <ScrollView style={styles.container}>
            <StatusBar style="auto" backgroundColor='#FFFFFF' />
            <View style={styles.Logocontainer}>
                <Image source={require('../assets/splash1.png')} />
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={styles.welcometxt}>
                    Welcome Back
                </Text>
                <Text style={styles.subheadtxt}>
                    Login to your account using email
                </Text>
            </View>

            <View style={styles.formcontainer}>
                <View style={{ marginTop: 20 }}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            label={"Email"}
                            style={styles.Inputfiled}
                            autoCapitalize="none"
                            theme={{ roundness: 10 }}
                            textColor='#000'
                            activeOutlineColor="#1DAB45"
                            mode="outlined"
                            outlineColor='#92CAA2'
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            label={"Password"}
                            secureTextEntry={true}
                            style={styles.Inputfiled}
                            theme={{ roundness: 10 }}
                            textColor='#000'
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
                        [styles.row,
                        Styles.justifyContent_between,
                        Styles.marginTop1
                        ]}>
                    <View style={[styles.row]}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            color='#1DAB45'
                        />

                        <Text style={styles.keeplogintxt}>
                            Keep me logged in
                        </Text>
                    </View>

                    <View>
                        <TouchableOpacity>
                            <Text style={styles.Forgotlabel}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View>
                    <Button Lable={"Login"} onPress={()=>{Navigation.navigate("Bottomnavigation")}}/>
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
                    Don’t have an account ?
                </Text>

                <TouchableOpacity onPress={() => { Navigation.navigate("Signup") }}>
                    <Text style={styles.signuplabel}>
                        Signup
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        backgroundColor: "#FFFFFF",
        height: height,
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
        marginVertical: 20
    },
    // Inputfiled: {
    //     padding: 5
    // },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    keeplogintxt: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 21,
        color: "#101811"
    },
    Forgotlabel: {
        color: "#1DAB45",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 21
    },
    signupform: {
        // position: "absolute",
        bottom: 0,
        width: width,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    signuptaglabel: {
        textAlign: "center"
    },
    signuplabel: {
        color: "#1DAB45",
        fontWeight: "500",
        fontSize: 14,
        marginHorizontal: 5
    }
})