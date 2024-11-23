import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenHeader from '../Components/ScreenHeader'
import { TextInput } from 'react-native-paper'
import { Styles } from '../Components/Stylesheets'
import { LinearGradient } from 'expo-linear-gradient'
import Button from '../Components/Button'

export default function ChangePass() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={"auto"} backgroundColor={"#fff"} />
            <ScreenHeader title={"Change Password"} />

            <ScrollView style={{ backgroundColor: "#1DAB451A" }}>
                <View style={[Styles.marginHorizontal2, Styles.marginTop2]}>
                    <TextInput
                        label={"Old Password"}
                        style={styles.Inputfiled}
                        autoCapitalize="none"
                        theme={{ roundness: 10 }}
                        textColor='#000'
                        activeOutlineColor="#1DAB45"
                        mode="outlined"
                        outlineColor='#92CAA2'
                    />
                </View>

                <View style={[Styles.marginHorizontal2, Styles.marginTop2]}>
                    <TextInput
                        label={"New Password"}
                        style={styles.Inputfiled}
                        autoCapitalize="none"
                        theme={{ roundness: 10 }}
                        textColor='#000'
                        activeOutlineColor="#1DAB45"
                        mode="outlined"
                        outlineColor='#92CAA2'
                    />
                </View>

                <View style={[Styles.marginHorizontal2, Styles.marginTop2]}>
                    <TextInput
                        label={"Confirm New Password"}
                        style={styles.Inputfiled}
                        autoCapitalize="none"
                        theme={{ roundness: 10 }}
                        textColor='#000'
                        activeOutlineColor="#1DAB45"
                        mode="outlined"
                        outlineColor='#92CAA2'
                    />
                </View>

                <View style={[Styles.marginHorizontal2]}>
                    <Button Lable={"Save & Confirm"} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    }
})