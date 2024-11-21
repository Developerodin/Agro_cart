import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function Button({ Lable,onPress,widths }) {
    return (
        <TouchableOpacity style={[styles.buttoncontainer,{width:widths}]} onPress={onPress}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#58E680', '#1DAB45']}
                style={styles.buttonGradient}>
                <Text style={styles.loginText}>{Lable}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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