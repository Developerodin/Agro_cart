import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DummeyData from '../DummyData/CategoryData'
import { Styles } from './Stylesheets'
import CategoryCard from './CategoryCard'

const { width, height } = Dimensions.get("screen")

export default function CategoryList() {

    const [SelectedItem, setSelectedItem] = useState(DummeyData[0])
    return (
        <View style={styles.Listcontainer}>
            <View style={[Styles.Row]}>
                <FlatList
                    data={DummeyData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item) => {
                        return (
                            <TouchableOpacity style={styles.category_container} onPress={() => { setSelectedItem(item.item) }}>
                                <View>
                                    <Image source={item.item.categoryImg} style={styles.stylescategoryImg} />
                                </View>

                                <View>
                                    <Text style={styles.categorytxt}>
                                        {item.item.categoryName}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />

                <View style={styles.subcategory_container}>
                    {
                        SelectedItem &&
                        <FlatList
                            data={SelectedItem.products}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={(item) => {
                                return (
                                    <CategoryCard
                                        itemsList={item.item}
                                    />
                                )
                            }}
                            contentContainerStyle={{ paddingBottom: 150 }}
                        />
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    stylescategoryImg: {
        width: 70,
        height: 70,
        resizeMode: "contain"
    },
    categorytxt: {
        width: 70,
        textAlign: "center"
    },
    category_container: {
        marginVertical: 20,
        alignItems: "center"
    },
    Listcontainer: {
        backgroundColor: "#fff",
        height: height,
        paddingHorizontal: 10
    },
    subcategory_container: {
        backgroundColor: "#E9F7ED",
        height: height,
        width: width / 1.4,
    }
})