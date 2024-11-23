import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions, Image, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import BackArrow from '../assets/icon/arrow-black.png'
import ScreenHeader from '../Components/ScreenHeader'

export default function WishList() {
    return (
        <SafeAreaView style={styles.Container}>

            {/*........ Header ......... */}
            <StatusBar style="auto" backgroundColor={"#fff"} />
            <ScreenHeader title="WishList" />

            <ScrollView style={{ backgroundColor: "#f2f2f2" }}>
                {/* ........body content ......... */}

                <View style={styles.productCard}>
                    <TouchableOpacity style={styles.row} >

                        <View style={styles.row}>
                            <View style={styles.imgdiv}>
                                <Image source={require('../assets/DummyImages/bellpepper.png')} style={styles.wishListIcon} />
                            </View>

                            <View style={[styles.productDetails, { marginLeft: 30 }]}>
                                <Text style={styles.productName}>
                                    Bell Pepper Red
                                </Text>

                                <Text style={styles.kgtext}>
                                    1 kg
                                </Text>
                            </View>
                        </View>


                        <View>
                            <TouchableOpacity>
                                <Image source={require('../assets/icon/delete.png')} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.productPrice}>
                        <View style={styles.row}>
                            <Text style={styles.currentPricetxt}>₹48.00</Text>
                            <Text style={styles.oldPricetxt}>₹80</Text>

                        </View>

                        <View>
                            <TouchableOpacity style={styles.Addbtn}>
                                <Text style={styles.addtxt}>
                                    Add
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={styles.productCard}>
                    <TouchableOpacity style={styles.row} >

                        <View style={styles.row}>
                            <View style={styles.imgdiv}>
                                <Image source={require('../assets/DummyImages/bellpepper.png')} style={styles.wishListIcon} />
                            </View>

                            <View style={[styles.productDetails, { marginLeft: 30 }]}>
                                <Text style={styles.productName}>
                                    Bell Pepper Red
                                </Text>

                                <Text style={styles.kgtext}>
                                    1 kg
                                </Text>
                            </View>
                        </View>


                        <View>
                            <TouchableOpacity>
                                <Image source={require('../assets/icon/delete.png')} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.productPrice}>
                        <View style={styles.row}>
                            <Text style={styles.currentPricetxt}>₹48.00</Text>
                            <Text style={styles.oldPricetxt}>₹80</Text>

                        </View>

                        <View>
                            <TouchableOpacity style={styles.Addbtn}>
                                <Text style={styles.addtxt}>
                                    Add
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={styles.productCard}>
                    <TouchableOpacity style={styles.row} >

                        <View style={styles.row}>
                            <View style={styles.imgdiv}>
                                <Image source={require('../assets/DummyImages/bellpepper.png')} style={styles.wishListIcon} />
                            </View>

                            <View style={[styles.productDetails, { marginLeft: 30 }]}>
                                <Text style={styles.productName}>
                                    Bell Pepper Red
                                </Text>

                                <Text style={styles.kgtext}>
                                    1 kg
                                </Text>
                            </View>
                        </View>


                        <View>
                            <TouchableOpacity>
                                <Image source={require('../assets/icon/delete.png')} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.productPrice}>
                        <View style={styles.row}>
                            <Text style={styles.currentPricetxt}>₹48.00</Text>
                            <Text style={styles.oldPricetxt}>₹80</Text>

                        </View>

                        <View>
                            <TouchableOpacity style={styles.Addbtn}>
                                <Text style={styles.addtxt}>
                                    Add
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    header: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff', // Green background
        padding: 10,
    },

    arrow: {
        marginLeft: 20
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#101811',
        textAlign: 'center',
        width: Dimensions.get('screen').width / 1.2
    },

    row: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    imgdiv: {
        backgroundColor: '#9DA49E0D',
        width: 90,
        height: 80,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 20
    },

    productCard: {
        backgroundColor: "#fff",
        marginHorizontal: 20,
        marginVertical: 5,
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 2,
            fontSize: 30
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 15,
    },

    productDetails: {
        marginLeft: 10
    },

    productName: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        fontWeight: "700",
        color: "#101811",
        marginTop: 10
    },

    productQuantity: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        fontWeight: "400",
        color: "#9DA49E",
    },

    currentPricetxt: {
        fontSize: 18,
        color: "#1DAB45",
        fontWeight: "bold",
        fontFamily: 'Poppins-Regular',
        marginHorizontal: 10
    },

    oldPricetxt: {
        fontSize: 18,
        color: "#9DA49E",
        fontWeight: "600",
        fontFamily: 'Poppins-Regular',
        // marginHorizontal: 10
        textDecorationStyle: 'solid',
        textDecorationLine: 'line-through'
    },

    productPrice: {
        // marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    Addbtn: {
        backgroundColor: "#1DAB45",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10
    },

    addtxt: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "600",
        fontFamily: 'Poppins-Regular',
    },

    wishListIcon: {
        width: 60,
        height: 60
    },

    kgtext: {
        color: "#9DA49E",
        fontSize: 14
    }

})