import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import ScreenHeader from '../Components/ScreenHeader'
import Carousel from 'react-native-anchor-carousel';
import { Styles } from '../Components/Stylesheets';
import Recentsearch from '../Components/Recentsearch';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get("screen");

export default function CategoryDetails({ route }) {

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.imagecontainer}>
                <Image source={item} style={styles.productImg} />
            </View>
        );
    };

    console.log(route.params.params.productDetails)

    return (
        <>
            <ScrollView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor={"#E9F7ED"} />
                <ScreenHeader colors="#E9F7ED" icon={require('../assets/icon/heart.png')} />

                <View>
                    <ImageBackground resizeMode="cover" imageStyle={styles.imgbgstyle} source={require('../assets/shape1.png')}>
                        <Carousel
                            style={styles.carousel}
                            data={route.params.params.productDetails.ProductImage}
                            renderItem={renderItem}
                            itemWidth={width}
                        />
                    </ImageBackground>

                    <View style={Styles.marginHorizontal2}>
                        <Text style={styles.productname}>
                            {route.params.params.productDetails.productName}
                        </Text>

                        <Text style={styles.quantitytxt}>
                            {route.params.params.productDetails.Quantity}
                        </Text>
                    </View>

                    <View
                        style={[
                            Styles.Row,
                            Styles.marginTop1,
                            Styles.AlignItem_center,
                            Styles.justifyContent_between,
                            Styles.marginHorizontal1
                        ]}
                    >
                        <View style={[
                            Styles.Row,
                            Styles.marginHorizontal1,
                            Styles.marginTop1,
                            Styles.AlignItem_center
                        ]}>
                            <Text style={styles.productPricetxt}>
                                {route.params.params.productDetails.productPrice}
                            </Text>

                            <Text style={styles.oldpricetxt}>
                                {route.params.params.productDetails.oldPrice}
                            </Text>

                            <Text style={[Styles.marginHorizontal1, styles.discountcontainer]}>
                                45%
                            </Text>
                        </View>

                        <View style={[
                            Styles.Row,
                            Styles.AlignItem_center,
                            Styles.justifyContent_between
                        ]}>
                            <TouchableOpacity style={styles.plusbtn}>
                                <Text style={styles.plusbtntxt}>+</Text>
                            </TouchableOpacity>

                            <Text style={styles.quantity}>0</Text>

                            <TouchableOpacity style={styles.minsbtn}>
                                <Text style={styles.minusbtn}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.description}>
                        <Text style={styles.desctxt}>
                            . Corporate own no going key language with hours exploratory.
                        </Text>

                        <Text style={styles.desctxt}>
                            . Corporate own no going key language with hours exploratory.
                        </Text>

                        <Text style={styles.desctxt}>
                            . Corporate own no going key language with hours exploratory.
                        </Text>

                        <Text style={styles.desctxt}>
                            . Corporate own no going key language with hours exploratory.
                        </Text>
                    </View>
                </View>

                <View style={[Styles.marginTop2, styles.recentcontainer]}>
                    <Recentsearch />
                </View>
            </ScrollView>

            <View style={[
                styles.placeorderbtncontainer,
            ]}>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#58E680', '#1DAB45']}
                        style={[
                            styles.orderbtn,
                            Styles.Row,
                            Styles.justifyContent_between
                        ]}
                    >
                        <View style={Styles.Row}>
                            <Text style={styles.pricetxt}>
                                ₹192.00
                            </Text>

                            <Text style={styles.orderdiscounttxt}>
                                ₹320
                            </Text>
                        </View>

                        <View style={Styles.VerticalLine}></View>

                        <View>
                            <Text style={styles.placeordertxt}>
                                Place Order
                            </Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    imgbgstyle: {
        width: width,
        height: height / 3
    },
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    imagecontainer: {
        width: width,
        alignItems: "center",
        height: height / 3,
        justifyContent: "center",
        margin: 10
    },
    productImg: {
        resizeMode: "contain",
        width: width,
        height: 100,
    },
    productname: {
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 27,
        color: "#101811"
    },
    quantitytxt: {
        fontSize: 15,
        fontWeight: "600",
        lineHeight: 18,
        color: "#9DA49E"
    },
    productPricetxt: {
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 27,
        color: "#1DAB45"
    },
    oldpricetxt: {
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 27,
        color: "#9DA49E",
        marginLeft: 10,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    discountcontainer: {
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 27,
        color: "#1DAB45",
        backgroundColor: "#1DAB4533",
        padding: 8,
        borderRadius: 10
    },
    plusbtn: {
        backgroundColor: "#1DAB45",
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: "50%",
        marginHorizontal: 10
    },
    minsbtn: {
        backgroundColor: "#F1F1F5",
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: "50%",
        marginHorizontal: 10
    },
    quantity: {
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 27,
        color: "#1DAB45",
        marginHorizontal: 10
    },
    plusbtntxt: {
        color: "#fff"
    },
    minusbtn: {
        color: "#1DAB45"
    },
    description: {
        marginTop: 20
    },
    desctxt: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 21,
        marginTop: 10
    },
    placeorderbtncontainer: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#fff",
        padding: 20,
        width: width
    },
    orderbtn: {
        width: "100%",
        backgroundColor: "#58E680",
        padding: 20,
        borderRadius: 10
    },
    orderbtnsection: {
        backgroundColor: "#fff",
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    placeorderbtn: {
        padding: 20,
        borderRadius: 10
    },
    VerticalLine: {
        backgroundColor: "#fff"
    },
    pricetxt: {
        color: "#fff",
        fontSize: 14,
        fontWeight: '800',
        lineHeight: 28,
        letterSpacing: 0.3
    },
    orderdiscounttxt: {
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 27,
        color: "#FFF",
        marginLeft: 10,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    placeordertxt: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 28,
        letterSpacing: 0.3,
        color: "#FFF",
    },
    recentcontainer: {
        marginBottom: 100
    }
})