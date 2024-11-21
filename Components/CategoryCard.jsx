import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from './Stylesheets'
import { useNavigation } from '@react-navigation/native'

export default function CategoryCard({ itemsList }) {

    const Navigation=useNavigation();
    
    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={()=>{Navigation.navigate("CategoryDetails",{params:{productDetails:itemsList}})}} style={[Styles.Row,Styles.justifyContent_between]}>
                <View style={styles.Imagecontainer}>
                    <Image source={itemsList.ProductImage[0]} style={styles.subcategoryImg} />
                </View>

                <View style={[Styles.marginTop1, styles.productdetails]}>
                    <Text style={styles.productName}>
                        {itemsList.productName}
                    </Text>
                    <Text style={styles.quantitytxt}>
                        {itemsList.Quantity}
                    </Text>
                </View>

                <View>
                    <Image source={require('../assets/icon/heart.png')} style={styles.wishlisticon}/>
                </View>
            </TouchableOpacity>

            <View style={
                [
                    Styles.Row,
                    Styles.justifyContent_between,
                    Styles.AlignItem_center,
                    styles.pricecontainer
                ]
            }>
                <View style={[Styles.Row, Styles.AlignItem_center]}>
                    <Text style={styles.pricetxt}>
                        {itemsList.productPrice}
                    </Text>

                    <Text style={styles.mrppricetxt}>
                        {itemsList.oldPrice}
                    </Text>
                </View>

                <TouchableOpacity style={styles.addbtn}>
                    <Text style={styles.addtxt}>
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    subcategoryImg: {
        width: 60,
        height: 60
    },
    Imagecontainer: {
        backgroundColor: '#d9deda57',
        padding: 10,
        borderRadius: 10,
        margin: 10
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 15
    },
    productName: {
        fontSize: 12,
        fontWeight: "400",
        color: "#101811"
    },
    productdetails: {
        marginHorizontal: 10
    },
    quantitytxt: {
        fontSize: 12,
        fontWeight: "400",
        color: "#9DA49E"
    },
    pricetxt: {
        fontSize: 18,
        fontWeight: "600",
        color: "#1DAB45"
    },
    mrppricetxt: {
        fontSize: 18,
        fontWeight: "400",
        color: "#9DA49E",
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        marginHorizontal:10
    },
    pricecontainer:{
        marginHorizontal:20,
        marginVertical:10
    },
    addbtn:{
        backgroundColor:"#1DAB45",
        padding:10,
        paddingHorizontal:20,
        borderRadius:10,
    },
    addtxt:{
        color:"#fff",
        fontSize:12,
        fontWeight:"600",
    },
    wishlisticon:{
        width:20,
        height:20,
        marginRight:20,
        marginVertical:10
    }
})