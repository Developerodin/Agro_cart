import { FlatList, StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react'

const {width,height}=Dimensions.get("screen")

export default function Banner() {

    const BannerImg = [
        require('../assets/banner2.png'),
        require('../assets/banner.png')
    ]
    return (
        <View>
            <FlatList
                horizontal={true}  // Enable horizontal scrolling
                data={BannerImg}
                renderItem={(item) => {
                    return (
                        <Image source={item.item} style={styles.bannerImg} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bannerImg:{
        width:width/1.2,
        height:height/6,
        borderRadius:10,
        resizeMode:"cover",
        overflow:"hidden",
        marginHorizontal:10
    }
})