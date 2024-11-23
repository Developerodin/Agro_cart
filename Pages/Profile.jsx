import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Styles } from '../Components/Stylesheets'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("screen");

export default function Profile() {

    const PofileDetails = [
        {
            icon: require('../assets/icon/account.png'),
            settingname: "Account & Preferences"
        },
        {
            icon: require('../assets/icon/faq.png'),
            settingname: "FAQs"
        },
        {
            icon: require('../assets/icon/privacy.png'),
            settingname: "Privacy Policies"
        },
        {
            icon: require('../assets/icon/terms.png'),
            settingname: "Terms & Conditions"
        },
        {
            icon: require('../assets/icon/help.png'),
            settingname: "Help & Support"
        },
        {
            icon: require('../assets/icon/rate.png'),
            settingname: "Rate Us"
        },
        {
            icon: require('../assets/icon/logout.png'),
            settingname: "Logout"
        },
        {
            icon: require('../assets/icon/delete.png'),
            settingname: "Delete Account"
        }
    ]

    const Navigation = useNavigation();


    const NavigateSetting = (item) => {
        if (item == "Account & Preferences") {
            Navigation.navigate("AccountSetting");

        } else
            if (item == "Help & Support") {
                Navigation.navigate("Help");
            }
            else if (item == "FAQs") {
                Navigation.navigate("FAQ")
            }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={"auto"} translucent={false} backgroundColor={"#1DAB451A"} />
            <ScrollView >
                <View style={[styles.Imgcontainer, Styles.padding2]}>
                    <View style={[Styles.JustifyContent_center, Styles.AlignItem_center]}>
                        <Image source={require('../assets/icon/user.png')} />
                    </View>

                    <View style={[
                        Styles.Row,
                        Styles.AlignItem_center,
                        Styles.JustifyContent_center
                    ]}>
                        <Text style={styles.resturantNametxt}>
                            Restaurant Name
                        </Text>

                        <Image source={require('../assets/icon/verification.png')} style={styles.verficationbadge} />
                    </View>

                    <View style={[
                        Styles.Row,
                        Styles.AlignItem_center,
                        Styles.JustifyContent_center
                    ]}>
                        <Text style={styles.userNametxt}>
                            M. John Doe
                        </Text>
                    </View>
                </View>

                <View style={[Styles.marginTop2, Styles.marginBottom5]}>
                    {
                        PofileDetails.map((elem, index) => {
                            return (
                                <TouchableOpacity
                                    style={[Styles.Row,
                                    Styles.AlignItem_center,
                                    styles.settinglistcontainer,
                                    Styles.justifyContent_between
                                    ]}
                                    key={index}
                                    onPress={() => { NavigateSetting(elem.settingname) }}
                                >
                                    <View style={[Styles.Row,
                                    Styles.AlignItem_center,
                                    ]}>
                                        <Image source={elem.icon} />

                                        <View>
                                            <Text style={elem.settingname == "Delete Account" ? styles.deletxt : styles.settingnametxt}>
                                                {elem.settingname}
                                            </Text>
                                        </View>
                                    </View>

                                    <Text>
                                        <Ionicons name="chevron-forward" size={24} color={elem.settingname == "Delete Account" ? "#E33629" : "black"} />
                                    </Text>
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1DAB451A"
    },
    Imgcontainer: {
        backgroundColor: "#fff",
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: 20
    },
    resturantNametxt: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 24,
        color: "#101811"
    },
    verficationbadge: {
        width: 20,
        height: 20,
        marginLeft: 10
    },
    userNametxt: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 18,
        color: "#101811"
    },
    settinglistcontainer: {
        backgroundColor: "#fff",
        padding: 20,
        margin: 5,
        borderRadius: 10,
        marginHorizontal: 20
    },
    settingnametxt: {
        fontSize: 16,
        fontWeight: "400",
        marginLeft: 10,
        lineHeight: 24,
        color: "#101811"
    },
    deletxt: {
        fontSize: 16,
        fontWeight: "400",
        marginLeft: 10,
        lineHeight: 24,
        color: "#E33629"
    }
})