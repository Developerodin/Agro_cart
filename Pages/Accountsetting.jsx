import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenHeader from '../Components/ScreenHeader'
import { Styles } from '../Components/Stylesheets'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native-paper';
import GestureRecognizer from 'react-native-swipe-gestures';
import VoiceModal from '../Components/Modals/VoiceModal';
import { Modal } from 'react-native-paper'
import DeliveryModal from '../Components/Modals/DeliveryModal';

const { width, height } = Dimensions.get("screen")

export default function Accountsetting() {

    const [recordeModal, setRecordeModal] = React.useState(false);

    const [DeliveryPrefModal, setDeliveryModal] = React.useState(false);

    const [switchStates, setSwitchStates] = React.useState({
        "Call Before Delivery": false,
        "No Touch Delivery": false,
        "Wear Mask & Hand Gloves": false,
        "Add Voice Note": false,
    });

    const handleToggleSwitch = (title) => {
        setSwitchStates((prevStates) => ({
            ...prevStates,
            [title]: !prevStates[title],
        }));
    };

    const Navigation = useNavigation();


    const Setting = [
        {
            icon: require('../assets/icon/business.png'),
            title: 'Business Information',
        },
        {
            icon: require('../assets/icon/navigation.png'),
            title: 'Address',
            address: "24A, Sector 5, Shanti Naga..."
        },
        {
            icon: require('../assets/icon/payment.png'),
            title: 'Payment Preferences',
        },
        {
            icon: require('../assets/icon/bell.png'),
            title: 'Notification Preferences',
        },
        {
            icon: require('../assets/icon/lock.png'),
            title: 'Change Password',
        }
    ];

    const Prefrence = [
        {
            icon: require('../assets/icon/time.png'),
            title: "Delivery Time Slot",
            Data: "Morning"
        },
        {
            icon: require('../assets/icon/call.png'),
            title: "Call Before Delivery",
        },
        {
            icon: require('../assets/icon/hand.png'),
            title: "No Touch Delivery",
        },
        {
            icon: require('../assets/icon/mask.png'),
            title: "Wear Mask & Hand Gloves",
        },
        {
            icon: require('../assets/icon/voice.png'),
            title: "Add Voice Note",
        }
    ];

    const PrefrenceAction = (title) => {
        if (title == "Add Voice Note") {
            setRecordeModal(true)
        } else if (title == "Business Information") {
            Navigation.navigate("BusinessInfo")
        } else if (title == "Change Password") {
            Navigation.navigate("ChangePass")
        } else if (title == "Delivery Time Slot") {
            setDeliveryModal(true)
        }
    }




    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={"auto"} translucent={false} backgroundColor={"#fff"} />

            <View>
                <ScreenHeader title="Account & Preferences" />
            </View>

            <ScrollView style={{ backgroundColor: "#1DAB451A" }}>
                <View style={[Styles.marginTop2, Styles.marginBottom2]}>
                    {
                        Setting.map((elem, index) => {
                            return (
                                <TouchableOpacity
                                    style={[Styles.Row,
                                    Styles.AlignItem_center,
                                    styles.settinglistcontainer,
                                    Styles.justifyContent_between
                                    ]}
                                    key={index}
                                    onPress={() => {
                                        PrefrenceAction(elem.title)
                                    }}
                                >
                                    <View style={[Styles.Row,
                                    Styles.AlignItem_center,
                                    ]}>
                                        <Image source={elem.icon} />

                                        <View style={[Styles.Row, Styles.AlignItem_center]}>
                                            <Text style={elem.settingname == "Delete Account" ? styles.deletxt : styles.settingnametxt}>
                                                {elem.title}
                                            </Text>

                                            {
                                                elem.title == "Address"
                                                    ?
                                                    <Text style={styles.addresstxt}>
                                                        {elem.address}
                                                    </Text>
                                                    :
                                                    null
                                            }
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

                <View style={[
                    Styles.Row,
                    Styles.AlignItem_center,
                    Styles.justifyContent_between,
                    styles.noteContainer
                ]}>
                    <Text style={styles.notetxt}>
                        Help delivery partner with your customized delivery preferences
                    </Text>

                    <View style={styles.noteimgcontainer}>
                        <Image source={require('../assets/board2.png')} style={styles.offerimg} />
                    </View>
                </View>

                <View style={[Styles.marginTop2, Styles.marginBottom2]}>

                    <View
                        style={[
                            Styles.marginVertical1
                        ]}
                    >
                        <Text style={styles.deliverypreftxt}>
                            Delivery Preferences
                        </Text>
                    </View>
                    {
                        Prefrence.map((elem, index) => {
                            return (
                                <TouchableOpacity
                                    style={[Styles.Row,
                                    Styles.AlignItem_center,
                                    styles.settinglistcontainer,
                                    Styles.justifyContent_between
                                    ]}
                                    key={index}

                                    onPress={() => { PrefrenceAction(elem.title); }}
                                >
                                    <View style={[Styles.Row,
                                    Styles.AlignItem_center,
                                    ]}>
                                        <Image source={elem.icon} style={{ width: 25, height: 25 }} />

                                        <View style={[Styles.Row, Styles.AlignItem_center]}>
                                            <Text style={elem.settingname == "Delete Account" ? styles.deletxt : styles.settingnametxt}>
                                                {elem.title}
                                            </Text>


                                        </View>
                                    </View>


                                    {
                                        elem.title == "Delivery Time Slot"
                                            ?
                                            <View
                                                style={[Styles.Row,
                                                Styles.AlignItem_center,
                                                ]}
                                            >
                                                <Text style={styles.addresstxt}>
                                                    {elem.Data}
                                                </Text>

                                                <Text>
                                                    <Ionicons name="chevron-forward" size={24} color={elem.settingname == "Delete Account" ? "#E33629" : "black"} />
                                                </Text>
                                            </View>

                                            :
                                            <Switch
                                                value={switchStates[elem.title] || false}
                                                onValueChange={() =>
                                                    handleToggleSwitch(elem.title)
                                                }
                                                color='#1DAB45'
                                                style={{ height: 30 }}
                                            />
                                    }
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
            </ScrollView>

            <Modal
                visible={recordeModal}
                contentContainerStyle={styles.modalContainer}
                dismissableBackButton={true}
            >
                <GestureRecognizer
                    onSwipeDown={() => setRecordeModal(false)}
                >
                    <VoiceModal />
                </GestureRecognizer>
            </Modal>


            <Modal
                visible={DeliveryPrefModal}
                contentContainerStyle={styles.modalContainer2}
                dismissableBackButton={true}
            >
                <GestureRecognizer
                    onSwipeDown={() => setDeliveryModal(false)}
                >
                    <DeliveryModal />
                </GestureRecognizer>
            </Modal>
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
        padding: 15,
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
    addresstxt: {
        color: "#9DA49E",
        fontSize: 12,
        fontWeight: "400",
        marginLeft: 10,
        lineHeight: 18,
        marginRight: 5
    },
    offerimg: {
        width: 60,
        height: 80,
        resizeMode: "contain",
        position: "absolute",
        top: -50,
        right: 0
    },
    notetxt: {
        fontSize: 12,
        fontWeight: "400",
        marginLeft: 10,
        lineHeight: 18,
        width: "70%",
    },
    noteimgcontainer: {
        // width:"30%"
    },
    noteContainer: {
        backgroundColor: "#58E68033",
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 10
    },
    deliverypreftxt: {
        fontSize: 16,
        fontWeight: "700",
        marginLeft: 30,
        lineHeight: 24,
    },
    modalContainer: {
        width: width,
        backgroundColor: "#fff",
        height: height / 3.5,
        position: "absolute",
        bottom: 0,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        overflow: "hidden"
    },
    modalContainer2:{
        width: width,
        backgroundColor: "#fff",
        height: height / 2,
        position: "absolute",
        bottom: 0,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        overflow: "hidden"
    }
})