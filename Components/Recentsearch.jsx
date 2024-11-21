import { StyleSheet, Text, View, FlatList,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import DummyData from '../DummyData/DummyData'

export default function Recentsearch() {

    const Recentrender = ({productImage,ProductName,quantity,currentPrice,oldPrice}) => {
        return (
            <View style={styles.product_section}>
                <View style={styles.productImg_section}>
                    <Image source={productImage} style={styles.productImg} />
                </View>

                <View>
                    <Text style={styles.productName}>
                        {ProductName}
                    </Text>

                    <Text style={{ fontFamily: 'Poppins-Regular',color:"#9DA49E" }}>
                        {quantity}
                    </Text>
                </View>

                <View style={[styles.row]}>
                    <View style={styles.row}>
                        <Text style={styles.productPrice}>
                            {currentPrice}
                        </Text>

                        <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid',color:'#9DA49E'}}>
                            {oldPrice}
                        </Text>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.addbtn}>
                            <Text style={styles.addtxt}>
                                Add
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <View>
                <Text style={styles.recentHead}>
                    Recent Search
                </Text>
            </View>

            <FlatList
                horizontal={true}  // Enable horizontal scrolling
                data={DummyData}
                renderItem={({ item }) => (
                    <Recentrender
                        productImage={item.productImage}
                        quantity={item.quantity}
                        currentPrice={item.currentPrice}
                        oldPrice={item.oldPrice}
                        ProductName={item.ProductName}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
            />
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
        fontFamily: "Poppins-Regular"
    },
    productImg: {
        width: 44,
        height: 90,
        objectFit: 'cover'
    },
    product_section: {
        backgroundColor: "#fff",
        borderRadius: 10,
        width: 180,
        height: 220,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        marginBottom: 10
    },
    productImg_section: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#d9deda57',
        borderRadius: 10,
        marginTop:10,
        padding:8
    },
    productName: {
        fontWeight: "400",
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: "#101811",
        lineHeight: 21
    },
    productPrice: {
        color: "#101811",
        fontSize: 14,
        fontWeight: "400",
        fontFamily: 'Poppins-Regular',
        marginRight: 10
    },
    row: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    addbtn: {
        backgroundColor: "#1DAB45",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10
    },
    addtxt: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "400",
        fontFamily: 'Poppins-Regular'
    }
})