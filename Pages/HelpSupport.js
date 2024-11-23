import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import BackArrow from '../assets/icon/arrow-black.png'
import IconFix from '../assets/icon/next_icon.png'
import Right from '../assets/icon/right.png'
import Timer from '../assets/icon/timer.png'
import CallG from '../assets/icon/call-g.png'
import MailG from '../assets/icon/mail-g.png'
import ScreenHeader from '../Components/ScreenHeader'
import { Styles } from '../Components/Stylesheets'



export default function HelpSupport({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={"auto"} backgroundColor={"#fff"} />

            <ScrollView style={{backgroundColor:"#1DAB451A"}}>
                <ScreenHeader title="Help & Support" />

                <View style={Styles.marginTop1}>
                    <Text style={styles.inputHead}>Recent Tickets</Text>
                </View>

                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menubtn} onPress={() => { navigation.navigate("TicketDetails") }}>
                        <Text style={styles.name}>#1122334455</Text>
                        <Text style={styles.Detail}>Order #12345678</Text>
                        <Image source={Timer} style={styles.right} />
                        <Image source={IconFix} style={styles.iconsleft} />
                    </TouchableOpacity>
                </View>

                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menubtn}>
                        <Text style={styles.name}>#1122334455</Text>
                        <Text style={styles.Detail}>Order #12345678</Text>
                        <Image source={Right} style={styles.right} />
                        <Image source={IconFix} style={styles.iconsleft} />
                    </TouchableOpacity>
                </View>

                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menubtn}>
                        <Text style={styles.name}>#1122334455</Text>
                        <Text style={styles.Detail}>Bulk Order</Text>
                        <Image source={Right} style={styles.right} />
                        <Image source={IconFix} style={styles.iconsleft} />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.inputHead2}>Get Help With</Text>
                </View>

                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menubtn}>
                        <Text style={styles.name}>Previous Orders</Text>
                        <Image source={IconFix} style={styles.iconsleft} />
                    </TouchableOpacity>
                </View>

                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menubtn}>
                        <Text style={styles.name}>App Guide</Text>
                        <Image source={IconFix} style={styles.iconsleft} />
                    </TouchableOpacity>
                </View>


                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menubtn} onPress={() => { navigation.navigate("SupportRaise") }}>
                        <Text style={styles.name}>Raise A Support Ticket</Text>
                        <Image source={IconFix} style={styles.iconsleft} />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.inputHead2}>VIP Support</Text>
                </View>

                <View style={styles.bsnsBTN}>
                    <TouchableOpacity style={styles.back1}>
                        <Image source={MailG} style={styles.icon1st} />
                        <Text style={styles.loginText1} >Mail Us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.back2}>
                        <Image source={CallG} style={styles.icon1st} />
                        <Text style={styles.loginText1} >Call Us</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
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

    inputHead: {
        marginLeft: 26,
        fontSize: 18,
        fontWeight: "700",
        color: '#101811'
    },

    inputHead2: {
        marginLeft: 26,
        fontSize: 18,
        fontWeight: "700",
        color: '#101811',
        marginTop: 20
    },

    menuContainer: {
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        marginTop: 10,
        width: Dimensions.get('window').width / 1.1,
        borderRadius: 12,
        marginLeft: 20
    },

    menubtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        height: 70
    },

    name: {
        color: '#101811',
        width: '55%',
        // marginLeft: 10,
        fontSize: 18
    },

    Detail: {
        color: '#9DA49E',
        // width: "50%",
        position: 'absolute',
        right: 50,
        fontSize: 16
    },

    cat1: {
        borderColor: '#1DAB45',
        borderWidth: 2,
        width: Dimensions.get('window').width / 4.8,
        height: Dimensions.get('window').height / 20,
        justifyContent: "center",
        borderRadius: 12,
        position: 'absolute',
        left: 280
    },

    loginText1: {
        color: '#1DAB45',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },

    right: {
        width: 15,
        height: 15,
        // marginLeft: 10
        position: 'absolute',
        right: 30
    },

    iconsleft: {
        position: 'absolute',
        right: 0
    },

    icon1st: {
        position: 'absolute',
        textAlign: "center",
        left: 20
    },

    circle: {
        position: 'absolute',
        right: 30
    },

    bsnsBTN: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    back1: {
        // borderColor: '#1DAB45',
        // borderWidth: 2,
        width: Dimensions.get('window').width / 2.3,
        height: Dimensions.get('window').height / 14,
        justifyContent: "center",
        borderRadius: 12,
        // marginLeft: 20,
        marginTop: 40,
        backgroundColor: '#fff'
    },

    loginText1: {
        color: '#1DAB45',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },

    back2: {
        backgroundColor: '#fff',
        width: Dimensions.get('window').width / 2.3,
        height: Dimensions.get('window').height / 14,
        justifyContent: "center",
        borderRadius: 12,
        marginLeft: 20,
        marginTop: 40
    },

    // loginText: {
    //     color: '#fff',
    //     fontSize: 20,
    //     // lineHeight : 28,
    //     fontWeight: '500',
    //     textAlign: 'center',
    //     // justifyContent: 'center',
    // },

})