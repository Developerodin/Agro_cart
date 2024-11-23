import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,StatusBar } from 'react-native'
import React from 'react'
import { Styles } from './Stylesheets'
import { useNavigation } from '@react-navigation/native'

export default function ScreenHeader({ title, icon, colors }) {

    const navigation = useNavigation();

    // console.log(colors)

    return (
        <View style=
            {
                [
                    styles.header_container,
                    Styles.Row,
                    Styles.justifyContent_between,
                    Styles.AlignItem_center,
                    { backgroundColor: colors ? colors : "#fff" }
                ]
            }>

            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Image source={require('../assets/black_back-arrow.png')} style={styles.backArrow} />
            </TouchableOpacity>

            <View>
                <Text style={styles.headertxt}>
                    {title}
                </Text>
            </View>

            <View>
                <Image source={icon} style={styles.search_icon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backArrow: {
        width: 20,
        height: 20,
    },
    header_container: {
        marginTop: Platform.OS == "ios" ? 0 : 0,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        padding: 15,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15
    },
    search_icon: {
        width: 30,
        height: 30
    },
    headertxt: {
        fontSize: 18,
        fontWeight: "700"
    }
})