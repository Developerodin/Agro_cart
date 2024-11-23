import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import { Styles } from '../Components/Stylesheets'
import { Ionicons } from '@expo/vector-icons';
import ScreenHeader from '../Components/ScreenHeader';

export default function BusinessInfoScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor={"#fff"} />
            <ScreenHeader title={"Business Information"} />
            <ScrollView style={{ backgroundColor: "#1DAB451A" }}>
                <View style={Styles.marginTop2}>
                    <TouchableOpacity
                        style={[Styles.Row,
                        Styles.AlignItem_center,
                        styles.settinglistcontainer,
                        Styles.justifyContent_between
                        ]}
                    // onPress={() => { NavigateSetting(elem.settingname) }}
                    >
                        <View style={[Styles.Row,
                        Styles.AlignItem_center,
                        ]}>

                            <View>
                                <Text style={styles.settingnametxt}>
                                    Name
                                </Text>
                            </View>
                        </View>


                        <View
                            style={[
                                Styles.Row,
                                Styles.AlignItem_center,
                                Styles.justifyContent_between
                            ]}
                        >

                            <Text style={styles.nametxt}>
                                John Doe
                            </Text>

                            <Text>
                                <Ionicons name="chevron-forward" size={20} color={"black"} />
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.Row,
                        Styles.AlignItem_center,
                        styles.settinglistcontainer,
                        Styles.justifyContent_between
                        ]}
                    // onPress={() => { NavigateSetting(elem.settingname) }}
                    >
                        <View style={[Styles.Row,
                        Styles.AlignItem_center,
                        ]}>

                            <View>
                                <Text style={styles.settingnametxt}>
                                    Email
                                </Text>
                            </View>
                        </View>


                        <View
                            style={[
                                Styles.Row,
                                Styles.AlignItem_center,
                                Styles.justifyContent_between
                            ]}
                        >

                            <Text style={styles.nametxt}>
                                johndoe@mail.com
                            </Text>

                            <Text>
                                <Image source={require('../assets/icon/right.png')} style={{ width: 15, height: 15 }} />
                            </Text>

                            <Text>
                                <Ionicons name="chevron-forward" size={20} color={"black"} />
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.Row,
                        Styles.AlignItem_center,
                        styles.settinglistcontainer,
                        Styles.justifyContent_between
                        ]}
                    // onPress={() => { NavigateSetting(elem.settingname) }}
                    >
                        <View style={[Styles.Row,
                        Styles.AlignItem_center,
                        ]}>

                            <View>
                                <Text style={styles.settingnametxt}>
                                    Phone No
                                </Text>
                            </View>
                        </View>


                        <View
                            style={[
                                Styles.Row,
                                Styles.AlignItem_center,
                                Styles.justifyContent_between
                            ]}
                        >

                            <Text style={styles.nametxt}>
                                +91 999 999 9999
                            </Text>

                            <Text>
                                <Ionicons name="chevron-forward" size={20} color={"black"} />
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.Row,
                        Styles.AlignItem_center,
                        styles.settinglistcontainer,
                        Styles.justifyContent_between
                        ]}
                    // onPress={() => { NavigateSetting(elem.settingname) }}
                    >
                        <View style={[Styles.Row,
                        Styles.AlignItem_center,
                        ]}>

                            <View>
                                <Text style={styles.settingnametxt}>
                                    Alternate Phone No
                                </Text>
                            </View>
                        </View>


                        <View
                            style={[
                                Styles.Row,
                                Styles.AlignItem_center,
                                Styles.justifyContent_between
                            ]}
                        >
                            <TouchableOpacity
                                style={styles.Addbtn}
                            >
                                <Text
                                    style={styles.Addbtntxt}
                                >
                                    Add
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.Row,
                        Styles.AlignItem_center,
                        styles.settinglistcontainer,
                        Styles.justifyContent_between
                        ]}
                    // onPress={() => { NavigateSetting(elem.settingname) }}
                    >
                        <View style={[Styles.Row,
                        Styles.AlignItem_center,
                        ]}>

                            <View>
                                <Text style={styles.settingnametxt}>
                                    Business Name
                                </Text>
                            </View>
                        </View>


                        <View
                            style={[
                                Styles.Row,
                                Styles.AlignItem_center,
                                Styles.justifyContent_between
                            ]}
                        >

                            <Text style={styles.nametxt}>
                                Restaurant Name
                            </Text>

                            <Text>
                                <Ionicons name="chevron-forward" size={20} color={"black"} />
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.Row,
                        Styles.AlignItem_center,
                        styles.settinglistcontainer,
                        Styles.justifyContent_between
                        ]}
                    // onPress={() => { NavigateSetting(elem.settingname) }}
                    >
                        <View style={[
                            Styles.Row,
                            Styles.AlignItem_center,
                        ]}>

                            <View>
                                <Text style={styles.settingnametxt}>
                                    Category
                                </Text>
                            </View>
                        </View>


                        <View
                            style={[
                                Styles.Row,
                                Styles.AlignItem_center,
                                Styles.justifyContent_between
                            ]}
                        >

                            <Text style={styles.nametxt}>
                                Veg
                            </Text>

                            <View style={styles.vegicon}></View>

                            <Text>
                                <Ionicons name="chevron-forward" size={20} color={"black"} />
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.Row,
                        Styles.AlignItem_center,
                        styles.settinglistcontainer,
                        Styles.justifyContent_between
                        ]}
                    // onPress={() => { NavigateSetting(elem.settingname) }}
                    >
                        <View style={[Styles.Row,
                        Styles.AlignItem_center,
                        ]}>

                            <View>
                                <Text style={styles.settingnametxt}>
                                    PAN
                                </Text>
                            </View>
                        </View>


                        <View
                            style={[
                                Styles.Row,
                                Styles.AlignItem_center,
                                Styles.justifyContent_between
                            ]}
                        >

                            <Text style={styles.nametxt}>
                                ABCDE1234F
                            </Text>

                            <Text>
                                <Image source={require('../assets/icon/right.png')} style={{ width: 15, height: 15 }} />
                            </Text>

                            <Text>
                                <Ionicons name="chevron-forward" size={20} color={"black"} />
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.Row,
                        Styles.AlignItem_center,
                        styles.settinglistcontainer,
                        Styles.justifyContent_between
                        ]}
                    // onPress={() => { NavigateSetting(elem.settingname) }}
                    >
                        <View style={[Styles.Row,
                        Styles.AlignItem_center,
                        ]}>

                            <View>
                                <Text style={styles.settingnametxt}>
                                    GST
                                </Text>
                            </View>
                        </View>


                        <View
                            style={[
                                Styles.Row,
                                Styles.AlignItem_center,
                                Styles.justifyContent_between
                            ]}
                        >

                            <Text style={styles.nametxt}>
                                1234ABCDE1234F1234
                            </Text>

                            <Text>
                                <Image source={require('../assets/icon/right.png')} style={{ width: 15, height: 15 }} />
                            </Text>

                            <Text>
                                <Ionicons name="chevron-forward" size={20} color={"black"} />
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
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
    nametxt: {
        fontSize: 12,
        fontWeight: "400",
        marginRight: 10,
        lineHeight: 18,
        color: "#9DA49E"
    },
    Addbtn: {
        borderWidth: 1,
        borderColor: "#1DAB45",
        borderRadius: 10,
        padding: 8,
        paddingHorizontal: 20
    },
    Addbtntxt: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 18,
        color: "#1DAB45",
    },
    vegicon: {
        height: 10,
        width: 10,
        backgroundColor: "#1DAB45",
        borderRadius: 10
    }
})