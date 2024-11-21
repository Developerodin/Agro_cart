import { StyleSheet, Text, View, Image, ScrollView, Dimensions, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useRef } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { Styles } from './Stylesheets';

const { width, height } = Dimensions.get("screen");

export default function Onboarding() {
    const slideRef = useRef(null);
    const Navigation=useNavigation()

    const slides = [
        {
            key: 's1',
            title: "Buy Groceries Easily ",
            title2:"with Us",
            text: "It is a long established fact that a reader will be distracted by the readable.",
            image: require('../assets/board1.png'),
            backgroundColor: "#1DAB451A",
        },
        {
            key: 's2',
            title: "We Deliver Groceries at",
            title2:"Your Doorstep",
            text: "It is a long established fact that a reader will be distracted by the readable.",
            image: require('../assets/board2.png'),
            backgroundColor: "#1DAB451A",
        },
        {
            key: 's3',
            title: "One Store For all Your",
            title2:"Grocery Needs",
            text: "It is a long established fact that a reader will be distracted by the readable.",
            image: require('../assets/board3.png'),
            backgroundColor: "#1DAB451A",
        }
    ]

    const skipToNext = (currentSlide) => {
        if (currentSlide == 2) {
                Navigation.navigate("Login")
        }
        else {
            slideRef.current.goToSlide(currentSlide + 1);
        }
    };

    const renderItem = (item) => {
        return (
            <View key={item.item.key}>
                <View>
                    <Image source={item.item.image} style={styles.Imagecontainer} />
                </View>

                <View>
                    <ImageBackground imageStyle={{ resizeMode: "contain", width: width }} style={styles.backdropImage} source={require('../assets/text-img.png')}>
                        <View style={{ padding: 40}}>
                            <Text style={ styles.Headtxt}>
                                {item.item.title}
                            </Text>

                            <Text style={ styles.Headtxt}>
                                {item.item.title2}
                            </Text>

                            <Text style={styles.subHead}>
                                {item.item.text}
                            </Text>
                        </View>

                        <View style={styles.btn_container}>
                            <TouchableOpacity style={styles.next_btn} onPress={() => { skipToNext(item.index) }}>
                                <Image source={require('../assets/next-btn.png')} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.container]}>

            <View>
                <TouchableOpacity style={styles.skip_btncontainer}>
                    <Text style={styles.skiptxt}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>

            {/* <View> */}
                <AppIntroSlider
                    ref={slideRef}
                    renderItem={renderItem}
                    data={slides}
                    showNextButton={false}
                    showDoneButton={false}
                    dotStyle={styles.Dotstyle}
                    activeDotStyle={styles.activeDots}
                />
            {/* </View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5AC2681A",
        width: width,
        flex: 1,
        height:height
    },
    Imagecontainer: {
        width: width,
        height: height/1.7,
        resizeMode: "contain"
    },
    backdropImage: {
        position: "absolute",
        top: -100,
        width: width,
        height: height / 3,
    },
    btn_container: {
        position: "absolute",
        width: width,
        height: height / 7.1,
        justifyContent: "center",
        alignItems: "center",
        bottom:20,
    },
    Headtxt:{
        fontWeight:"700",
        fontSize:22,
        textAlign:"center",
        color:"#101811"
    },
    subHead:{
        fontWeight:"400",
        fontSize:13,
        textAlign:"center",
        marginTop:20,
        color:"#101811"
    },
    next_btn: {
        position: 'absolute',
        bottom: 0,
    },
    Dotstyle: {
        // position:"absolute",
        backgroundColor: "#9DA49E1A",
        display: "none"
    },
    activeDots: {
        backgroundColor: "#1DAB45",
        display: "none"
    },
    skip_btncontainer: {
        width: width,
        height: 50,
    },
    skiptxt: {
        fontSize: 18,
        color: "#1DAB45",
    }
})