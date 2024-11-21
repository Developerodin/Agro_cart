import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Styles } from '../Components/Stylesheets'
import { TextInput } from 'react-native-paper'

export default function BusinessInfo() {
    const [category, setCategory] = useState(["Veg"]);

    const Addcategory = (categorys) => {
        const newFeatures = [...category];
        if (category.includes(categorys)) {
            newFeatures.splice(newFeatures.indexOf(categorys), 1);
            setCategory(newFeatures)
        }
        else {
            newFeatures.push(categorys);
            setCategory(newFeatures);
        }
    }

    return (
        <ScrollView>
            <View style={styles.horizontalspacing}>
                <View style={Styles.marginTop2}>
                    <TextInput
                        label="Business Name"
                        placeholder='Restaurant Name'
                        mode='outlined'
                        activeOutlineColor="#1DAB45"
                        outlineColor='#92CAA2'
                        textColor='#000'
                        style={styles.inputfield}
                        theme={{ roundness: 10 }}

                    />
                </View>

                <View style={Styles.marginTop2}>
                    <Text style={styles.categorytxt}>
                        Category
                    </Text>

                    <View style={
                        [
                            Styles.Row,
                            Styles.AlignItem_center,
                            Styles.justifyContent_between,
                            Styles.marginTop1
                        ]
                    }>
                        <TouchableOpacity style={category.includes("Veg")?[Styles.Row, Styles.AlignItem_center, styles.categorybtn]:[Styles.Row, Styles.AlignItem_center, styles.disablecategorybtn]} onPress={() => { Addcategory("Veg") }}>
                            {
                                category.includes("Veg")
                                    ?
                                    <Image source={require('../assets/right.png')} style={{ marginHorizontal: 2 }} />
                                    :
                                    null
                            }

                            <Text>
                                Veg
                            </Text>

                            <View style={styles.vegicon}></View>
                        </TouchableOpacity>

                        <TouchableOpacity style={category.includes("Non Veg")?[Styles.Row, Styles.AlignItem_center, styles.categorybtn]:[Styles.Row, Styles.AlignItem_center, styles.disablecategorybtn]} onPress={() => { Addcategory("Non Veg") }}>
                            {
                                category.includes("Non Veg")
                                    ?
                                    <Image source={require('../assets/right.png')} style={{ marginHorizontal: 2 }} />
                                    :
                                    null
                            }

                            <Text>
                                Non Veg
                            </Text>

                            <View style={styles.nonvegicon}></View>
                        </TouchableOpacity>

                        <TouchableOpacity style={category.includes("Egg")?[Styles.Row, Styles.AlignItem_center, styles.categorybtn]:[Styles.Row, Styles.AlignItem_center, styles.disablecategorybtn]} onPress={() => { Addcategory("Egg") }}>
                            {
                                category.includes("Egg")
                                    ?
                                    <Image source={require('../assets/right.png')} style={{ marginHorizontal: 2 }} />
                                    :
                                    null
                            }

                            <Text>
                                Egg
                            </Text>

                            <View style={styles.eggicon}></View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={Styles.marginTop2}>
                    <TextInput
                        label="PAN"
                        placeholder='Restaurant Name'
                        mode='outlined'
                        activeOutlineColor="#1DAB45"
                        outlineColor='#92CAA2'
                        textColor='#000'
                        style={styles.inputfield}
                        theme={{ roundness: 10 }}

                    />
                </View>

                <View style={Styles.marginTop2}>
                    <TextInput
                        label="GST"
                        placeholder='Restaurant Name'
                        mode='outlined'
                        activeOutlineColor="#1DAB45"
                        outlineColor='#92CAA2'
                        textColor='#000'
                        style={styles.inputfield}
                        theme={{ roundness: 10 }}

                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    horizontalspacing: {
        paddingHorizontal: 30,
        marginTop: 20
    },
    categorytxt: {
        fontSize: 14,
        lineHeight: 28,
        fontWeight: "500",
        marginLeft: 5
    },
    vegicon: {
        backgroundColor: "#1DAB45",
        width: 10,
        height: 10,
        borderRadius: 20,
        marginHorizontal: 10
    },
    nonvegicon: {
        backgroundColor: "#FF0000",
        width: 10,
        height: 10,
        borderRadius: 20,
        marginHorizontal: 10
    },
    eggicon: {
        backgroundColor: "#FE860A",
        width: 10,
        height: 10,
        borderRadius: 20,
        marginHorizontal: 10
    },
    categorybtn: {
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        borderColor: "#1DAB45"
    },
    disablecategorybtn:{
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        borderColor: "#0000000D"
    }
})