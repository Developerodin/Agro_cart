import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from '../Stylesheets'
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';


export default function VoiceModal() {

    const [recording, setRecording] = React.useState();
    const [RecordingLable, setRecordingLabel] = React.useState("Record")

    // recording functions

    async function startRecording() {
        try {
            console.log('Requesting permissions...');
            setRecordingLabel("STOP");
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            // Stop and unload the previous recording if it exists
            if (recording) {
                console.log('Stopping existing recording...');
                await recording.stopAndUnloadAsync();
                setRecording(null); // Clear the previous recording instance
            }

            console.log('Starting recording...');
            const newRecording = new Audio.Recording();
            await newRecording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
            await newRecording.startAsync();
            setRecording(newRecording);
            console.log('Recording started');
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        setRecordingLabel("Record")
        console.log('Stopping recording..');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        console.log('Recording stopped and stored at', uri);
    }
    return (
        <View style={styles.modalContainer}>
            <View style={styles.modalCloser}></View>
            <Text style={[styles.addvoicetxt, Styles.marginTop2]}>
                Add Voice Note
            </Text>

            <View style={styles.micContainer}>
                <Image source={require('../../assets/icon/Mic.png')} style={styles.micicon} />
            </View>

            <View style={{ width: "100%", position: "absolute", bottom: 20 }}>
                {/* <Button Lable={RecordingLable} /> */}

                <TouchableOpacity
                onPress={()=>{RecordingLable=="Record"?startRecording():stopRecording()}}
                style={[styles.buttoncontainer]}>
                    <LinearGradient
                        // Button Linear Gradient
                        colors={RecordingLable=="Record"?['#58E680', '#1DAB45']:["#FE860A","#FE860A"]}
                        style={styles.buttonGradient}>
                        <Text style={styles.loginText}>{RecordingLable}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    micicon: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    micContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#58E68033",
        borderRadius: '50%',
        width: 80,
        padding: 15,
    },
    modalContainer: {
        height: "100%",
        padding: 20,
        alignItems: "center"
    },
    addvoicetxt: {
        fontSize: 16,
        fontWeight: "700",
        color: "#101811",
        lineHeight: 24,
        textAlign:"left",
        width:"100%"
    },
    modalCloser: {
        height: 5,
        backgroundColor: "#000",
        width: 70,
        borderRadius: 30
    },
    buttoncontainer: {
        marginTop:20,
    },
    buttonGradient:{
        padding:20,
        borderRadius:10
    },
    loginText:{
        textAlign:"center",
        fontSize:14,
        fontWeight:"500",
        color:"#fff"
    }
})