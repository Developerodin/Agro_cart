import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Styles } from '../Stylesheets'
import { RadioButton } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';

export default function DeliveryModal() {
    const [value, setValue] = React.useState('Early Morning (5:00 AM- 8:00 AM)');

    return (
        <View style={styles.modalContainer}>
            <View style={{ alignItems: "center" }}>
                <View style={styles.modalCloser}></View>
            </View>

            <Text style={[styles.addvoicetxt, Styles.marginTop2]}>
                Select Delivery Time Slot
            </Text>

            <View
                style={[Styles.JustifyContent_left]}
            >
                <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                    <View
                        style={[
                            Styles.Row,
                            Styles.AlignItem_center,
                            styles.radiocontainer
                        ]}
                    >
                        <View style={styles.radioButtonWrapper}>
                            <RadioButton  color="#5AC268" value="Early Morning (5:00 AM- 8:00 AM)" />
                        </View>

                        <Text>
                            Early Morning (5:00 AM- 8:00 AM)
                        </Text>
                    </View>

                    <View
                        style={[
                            Styles.Row,
                            Styles.AlignItem_center,
                            styles.radiocontainer
                        ]}
                    >
                        <View style={styles.radioButtonWrapper}>
                            <RadioButton  color="#5AC268" value="Morning (8:00 AM- 12:00 PM)" />
                        </View>
                        <Text>
                            Morning (8:00 AM- 12:00 PM)
                        </Text>
                    </View>

                    <View
                        style={[
                            Styles.Row,
                            Styles.AlignItem_center,
                            styles.radiocontainer
                        ]}
                    >
                        <View style={styles.radioButtonWrapper}>
                            <RadioButton  color="#5AC268" value="Afternoon (12:00 PM- 3:00 PM)" />
                        </View>

                        <Text>
                            Afternoon (12:00 PM- 3:00 PM)
                        </Text>
                    </View>

                    <View
                        style={[
                            Styles.Row,
                            Styles.AlignItem_center,
                            styles.radiocontainer
                        ]}
                    >
                        <View style={styles.radioButtonWrapper}>
                            <RadioButton  color="#5AC268" value="Evening (3:00 PM- 7:00 PM)" />
                        </View>

                        <Text>
                            Evening (3:00 PM- 7:00 PM)
                        </Text>
                    </View>

                    <View
                        style={[
                            Styles.Row,
                            Styles.AlignItem_center,
                            styles.radiocontainer
                        ]}
                    >
                        <View style={styles.radioButtonWrapper}>
                            <RadioButton color="#5AC268" value="Night (7:00 PM- 10:00 PM)" />
                        </View>

                        <Text>
                            Night (7:00 PM- 10:00 PM)
                        </Text>
                    </View>
                </RadioButton.Group>
            </View>

            <View
                style={[
                    Styles.Row,
                    Styles.AlignItem_center,
                    Styles.justifyContent_between,
                    Styles.marginTop2
                ]}
            >
                <TouchableOpacity style={styles.cancelbtn}>
                    <Text style={styles.canceltxt}>
                        Cancel
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width:"45%"}}>
                    <LinearGradient
                        style={styles.savebtn}
                        colors={["#1DAB45", "#1DAB45"]}>
                        <Text style={styles.savebtntxt}>
                            Save
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        height: "100%",
        padding: 20,
    },
    modalCloser: {
        height: 5,
        backgroundColor: "#000",
        width: 70,
        borderRadius: 30,
    },
    addvoicetxt: {
        fontSize: 16,
        fontWeight: "700",
        color: "#101811",
        lineHeight: 24,
        textAlign: "left",
        width: "100%"
    },
    radioButtonWrapper: {
        borderWidth: Platform.OS == "ios" ? 1 : 0, // Add border to the radio button
        borderColor: Platform.OS == "ios" ? '#ccc' : "#fff", // Light gray border color
        borderRadius: Platform.OS == "ios" ? 20 : 0, // Rounded border to match the circular shape of the radio button
        marginRight: Platform.OS == "ios" ? 10 : 0,
    },
    radiocontainer: {
        marginTop: 10
    },
    cancelbtn: {
        borderWidth: 1,
        borderColor: "#1DAB45",
        padding: 15,
        borderRadius: 10,
        width: '50%'
    },
    canceltxt: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 28,
        textAlign: "center",
        color:"#1DAB45"
    },
    savebtn:{
        padding:15,
        borderRadius:10
    },
    savebtntxt:{
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 28,
        textAlign: "center",
        color:"#fff"
    }
})