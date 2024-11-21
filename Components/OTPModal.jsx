import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Styles } from './Stylesheets'
import { TextInput } from 'react-native-paper'
import Button from './Button'
import { OtpInput } from "react-native-otp-entry";
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get("screen")

export default function OTPModal() {
    const Navigation=useNavigation();

    return (
        <View style={[Styles.JustifyContent_center]}>
            <View>
                <Text style={styles.OTPtxt}>
                    Enter OTP
                </Text>

                <Text style={styles.verificationtxt}>
                    A verification code has been sent to your email S****12@gmail.com
                </Text>
            </View>

            <View style={[Styles.Row, Styles.JustifyContent_center, Styles.marginTop1]}>

                <View style={styles.OTPfiled}>

                    <OtpInput
                        numberOfDigits={4}
                        focusColor="green"
                        focusStickBlinkingDuration={500}
                        onTextChange={(text) => console.log(text)}
                        onFilled={(text) => console.log(`OTP is ${text}`)}
                        textInputProps={{
                            accessibilityLabel: "One-Time Password",
                        }}
                        theme={{
                            containerStyle: styles.OTPcontainer
                        }}
                    />
                </View>

            </View>

            <View style={{ marginHorizontal: 50 }}>
                <Button Lable={"VERIFY"} onPress={()=>Navigation.navigate("Stepper")}/>
            </View>

            <View style={[Styles.Row, styles.resendcontainer]}>
                <Text>
                    Didn’t receive the code?
                </Text>

                <TouchableOpacity>
                    <Text style={styles.resendtxt}>
                        Resend (30s)
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    OTPtxt: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 36,
        textAlign: "center"
    },
    verificationtxt: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 21
    },
    OTPfiled: {
        marginHorizontal: 5
    },
    resendtxt: {
        fontWeight: "500",
        color: "#1DAB45",
        fontSize: 14,
        textAlign: "center"
    },
    resendcontainer: {
        textAlign: "center",
        paddingHorizontal: 50,
        marginTop: 20
    },
    OTPcontainer:{
       alignItems:"center",
       justifyContent:"space-around"
    }
})