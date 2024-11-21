import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Styles } from './Stylesheets'
import CategoryData from '../DummyData/CategoryData'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get("screen")

export default function Category() {

    const Navigation=useNavigation()

    const Categoryrender = (item) => {
        return (
            <View>
                <View style={styles.imgcontainer}>
                    <Image source={item.Data.categoryImg} style={styles.categoryImg} />
                </View>

                <View>
                    <Text style={styles.categoryName}>
                        {item.Data.categoryName}
                    </Text>
                </View>
            </View>
        )
    }
    return (
        <View>
            <View style={[styles.row, Styles.justifyContent_between, Styles.AlignItem_center]}>
                <View>
                    <Text style={styles.recentHead}>
                        Popular Category
                    </Text>
                </View>

                <TouchableOpacity onPress={()=>Navigation.navigate("Category")}>
                    <Text style={styles.seealltxt}>
                        See All
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{marginHorizontal:20}}>
                <FlatList
                    horizontal={true}  // Enable horizontal scrolling
                    data={CategoryData}
                    renderItem={({ item }) => (
                        <Categoryrender
                            Data={item}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    recentHead: {
        color: "#101811",
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 24,
        marginLeft: 20,
        marginVertical: 10,
        fontFamily: "Poppins-Regular",
        width: width / 2,
    },
    row: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    seealltxt: {
        textAlign: "right",
        fontSize: 14,
        lineHeight: 21,
        color: "#1DAB45"
    },
    categoryImg: {
        width: 60,
        height: 50,
        resizeMode: "contain"
    },
    imgcontainer: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 5,
        justifyContent:"center",
        alignItems:"center"
    },
    categoryName: {
        width: 80,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
        color: "#101811",
        marginLeft: 12,
        marginTop: 5
    }
})