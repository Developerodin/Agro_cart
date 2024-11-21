import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Styles } from './Stylesheets'

export default function () {
    return (
        <View>
            <View style={[Styles.JustifyContent_center,Styles.AlignItem_center,Styles.marginTop2]}>
                <Image source={require('../assets/icon/circle-right.png')} style={styles.successImg}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    successImg:{
        width:90,
        height:90
    }
})