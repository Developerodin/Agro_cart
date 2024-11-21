import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenHeader from '../Components/ScreenHeader'
import CategoryList from '../Components/CategoryList'

const { width, height } = Dimensions.get("screen")

export default function Allcategory() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor='#FFFFFF' />

            <ScreenHeader title="Shop by Category" icon={require('../assets/icon/search.png')}/>

            <CategoryList/>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width
    }
})