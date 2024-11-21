import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import StepIndicator from 'react-native-step-indicator';
import { StatusBar } from 'expo-status-bar';
import PersonalInfo from '../Pages/PersonalInfo';
import Button from './Button';
import { Styles } from './Stylesheets';
import { LinearGradient } from 'expo-linear-gradient';
import BusinessInfo from '../Pages/BusinessInfo';
import LocationP from '../Pages/LocationP';

const { width, height } = Dimensions.get("screen")

export default function Stepper() {
    const labels = ["Perosnal", "Business", "Address"];

    const [stepCounter, setStepCounter] = useState(0);

    const customStyles = {
        stepIndicatorSize: 40, // Matches the icon size
        currentStepIndicatorSize: 50, // Matches the current icon size
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#1DAB45',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#1DAB45',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#1DAB45',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#1DAB45',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 12,
        currentStepIndicatorLabelFontSize: 12,
        stepIndicatorLabelCurrentColor: '#1DAB45',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 12,
        currentStepLabelColor: '#1DAB45',
    };



    const renderStepindicator = (params) => {
        if (params.position == 0) {
            return (
                <Image source={require('../assets/personP.png')} style={styles.stepperIcon} />
            )
        } else if (params.position == 1) {
            return (
                <Image source={require('../assets/businessP.png')} style={styles.stepperIcon} />
            )
        } else {
            return (
                <Image source={require('../assets/location.png')} style={styles.stepperIcon} />
            )
        }
    }
    return (
        <ScrollView>
            <StatusBar style='auto' backgroundColor='#fff' />

            <View style={{ marginTop: 20 }}>
                <StepIndicator
                    customStyles={customStyles}
                    currentPosition={stepCounter}
                    renderStepIndicator={renderStepindicator}
                    stepCount={3}
                    labels={labels}
                />
            </View>

            {
                stepCounter == 0
                    ?
                    <PersonalInfo />
                    :
                    stepCounter==1
                    ?
                    <BusinessInfo />
                    :
                    <LocationP/>
            }

            <View style={stepCounter>0?[Styles.Row,Styles.marginTop2,{marginHorizontal:30}]:[Styles.Row,Styles.marginTop2,{marginHorizontal:35}]}>

                {
                    stepCounter > 0
                        ?
                        <TouchableOpacity style={[styles.backbtn,styles.buttonGradient]} onPress={() => setStepCounter(stepCounter - 1)}>
                            <Text style={styles.backtxt}>
                                Back
                            </Text>
                        </TouchableOpacity>
                        :
                        null
                }


                <TouchableOpacity style={stepCounter>0?{ width: "50%",marginHorizontal:10 }:{width:width/1.2}} onPress={() => setStepCounter(stepCounter + 1)}>
                    <LinearGradient
                        // Button Linear Gradient
                        colors={['#58E680', '#1DAB45']}
                        style={styles.buttonGradient}>
                        <Text style={styles.loginText}>
                            Save & Next
                        </Text>
                    </LinearGradient>

                </TouchableOpacity>
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    stepperIcon: {
        width: 40, // Increased icon width
        height: 30, // Increased icon height
        resizeMode: 'contain', // Ensures the icon fits within its container
    },
    buttonGradient: {
        padding: 20,
        borderRadius: 10,
        // marginHorizontal:10
    },
    loginText: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "500",
        color: "#fff"
    },
    backbtn: {
        width: "50%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#1DAB45",
        // borderRadius: 10,
    },
    backtxt: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "500",
        color: "#1DAB45"
    }
})