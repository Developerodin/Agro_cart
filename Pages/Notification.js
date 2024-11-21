import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import BackArrow from '../assets/icon/arrow-black.png'
import ScreenHeader from '../Components/ScreenHeader'


const { width, height } = Dimensions.get("screen");

export default function Notification() {
  return (

    <>
      <ScrollView style={styles.Container}>

        <StatusBar style="auto" backgroundColor={"#fff"} />

        <ScreenHeader title="Notifications" />
        {/*........ Header ......... */}


        {/* ....Body content.....  */}
        <View>
          <Text style={styles.boxHead}>Today</Text>
        </View>

        <View style={styles.productCard}>
          <TouchableOpacity style={styles.row} >

            <View style={styles.row}>
              <View style={styles.imgdiv}>
                <Image source={require('../assets/icon/green-lock.png')} style={styles.wishListIcon} />
              </View>

              <View style={[styles.productDetails, { marginLeft: 30 }]}>
                <Text style={styles.productName}>
                  Password Update Successful
                </Text>

                <Text style={{ color: '#101811', marginVertical: 5, width: 220 }}>You have just changes account password.</Text>
              </View>
            </View>

            <View>
              <Text style={styles.redDot}></Text>
              <Text style={styles.time}>10:10 AM</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View>
          <Text style={styles.boxHead}>Yesterday</Text>
        </View>

        <View style={styles.productCard}>
          <TouchableOpacity style={styles.row} >

            <View style={styles.row}>
              <View style={styles.imgdiv}>
                <Image source={require('../assets/icon/Coupon_green.png')} style={styles.wishListIcon} />
              </View>

              <View style={[styles.productDetails, { marginLeft: 30 }]}>
                <Text style={{ fontWeight: '400', color: '#101811', fontSize: 15 }}>
                  40% Special Discount
                </Text>

                <Text style={{ color: '#9DA49E', marginVertical: 5, width: 220 }}>Special promotion only valid for today.</Text>
              </View>
            </View>

            <View>
              <Text style={styles.time}>10:10 AM</Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({

  Container: {
    flex: 1
  },
  boxHead: {
    color: '#101811',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 20,
    // padding: 20,
    marginTop: 10
  },

  productCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 2,
      fontSize: 30
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
  },


  row: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },

  imgdiv: {
    backgroundColor: '#9DA49E0D',
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 20
  },

  productDetails: {
    marginLeft: 10,
    marginTop: 10
  },

  productName: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    fontWeight: "bold",
    color: "#101811",
  },

  wishListIcon: {
    width: 35,
    height: 35
  },

  redDot: {
    backgroundColor: 'red',
    width: 15,
    height: 15,
    position: 'absolute',
    right: 10,
    borderRadius: 20
  },

  time: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    color: '#9DA49E'
  }


})

