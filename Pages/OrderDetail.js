import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView, Platform } from 'react-native'
import React from 'react'
import BackArrow from '../assets/icon/arrow-black.png'
import Right from '../assets/icon/right.png'
import PhonePe from '../assets/icon/Phonepe.png'
import { LinearGradient } from 'expo-linear-gradient'
import StepIndicator from 'react-native-step-indicator';
import { Ionicons } from '@expo/vector-icons';
import ScreenHeader from '../Components/ScreenHeader'

export default function OrderDetails() {
  const labels = ["Placed", "Packed", "On The Way", "Delivered"];

  const customStyles = {
    stepIndicatorSize: 40, // Matches the icon size
    currentStepIndicatorSize: 50, // Matches the current icon size
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#1DAB45',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#1DAB45',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#1DAB45',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#1DAB45',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 12,
    currentStepIndicatorLabelFontSize: 12,
    stepIndicatorLabelCurrentColor: '#1DAB45',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 12,
    currentStepLabelColor: '#1DAB45',
  };

  const renderStepindicator = (params) => {
    // if (params.position == 0) {
    //     return (
    //         <Image source={require('../assets/right.png')} style={styles.stepperIcon} />
    //     )
    // } else if (params.position == 1) {
    //     return (
    //         <Image source={require('../assets/right.png')} style={styles.stepperIcon} />
    //     )
    // } else {
    //     return (
    //         <Image source={require('../assets/right.png')} style={styles.stepperIcon} />
    //     )
    // }

    if (params.position <= 2) {
      return <Image source={require('../assets/right.png')} style={styles.stepperIcon} />;
    }
  }


  return (
    <SafeAreaView style={styles.container}>

      <ScreenHeader title="Order  #1122334455"/>


      {/* Delivery Date */}
      <View style={styles.deliveryInfo}>
        <View style={styles.headbox}>
          <Text style={styles.deliveryText}>Your order will be delivered on:</Text>
          <Text style={styles.deliveryDate}>10 Sep 2024 at 10:10 AM</Text>
        </View>

        {/* View on Map Button */}
        <View>
          <TouchableOpacity style={styles.mapButton}>
            <Text style={styles.mapButtonText}>Track on Map</Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* Progress Status */}
      <StepIndicator
        customStyles={customStyles}
        currentPosition={3}
        renderStepIndicator={renderStepindicator}
        stepCount={4}
        labels={labels}
      />

      <ScrollView>
        <View style={{ marginBottom: 200, flex: 1 }}>
          <View style={styles.menuContainer}>
            <View style={styles.menubtn}>
              <Image source={PhonePe} />
              <Text style={styles.name}>Payment was succcessful</Text>
              <Image source={Right} style={styles.iconsleft} />
            </View>
          </View>

          <View>
            <Text style={styles.boxHead}>Item Details</Text>
          </View>

          <View style={styles.productCard}>
            <TouchableOpacity style={styles.row} >

              <View style={styles.row}>
                <View style={styles.imgdiv}>
                  <Image source={require('../assets/DummyImages/bellpepper.png')} style={styles.wishListIcon} />
                </View>

                <View style={[styles.productDetails, { marginLeft: 30 }]}>
                  <Text style={styles.productName}>
                    Bell Pepper Red
                  </Text>

                  <Text style={{ color: '#9DA49E', marginVertical: 5 }}>1 Kg</Text>
                  <View style={styles.row}>
                    <Text style={{ color: '#1DAB45', fontSize: 14, fontWeight: '700' }} >₹48.00</Text>
                    <Text style={{ marginHorizontal: 10, fontSize: 14, fontWeight: '700', color: '#9da49d', textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>₹80</Text>
                    <Text style={{ color: '#1DAB45', fontSize: 14, fontWeight: '700' }} >X 4</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.productCard}>
            <TouchableOpacity style={styles.row} >

              <View style={styles.row}>
                <View style={styles.imgdiv}>
                  <Image source={require('../assets/DummyImages/ginger.png')} style={styles.wishListIcon} />
                </View>

                <View style={[styles.productDetails, { marginLeft: 30 }]}>
                  <Text style={styles.productName}>
                    Arabic Ginger
                  </Text>

                  <Text style={{ color: '#9DA49E', marginVertical: 5 }}>1 Kg</Text>
                  <View style={styles.row}>
                    <Text style={{ color: '#1DAB45', fontSize: 14, fontWeight: '700' }} >₹48.00</Text>
                    <Text style={{ marginHorizontal: 10, fontSize: 14, fontWeight: '700', textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: '#9da49d' }}>₹80</Text>
                    <Text style={{ color: '#1DAB45', fontSize: 14, fontWeight: '700' }} >X 4</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.boxHead}>Delivery Address</Text>
          </View>

          <View style={styles.productCard}>
            <TouchableOpacity style={styles.row} >

              <View style={styles.row}>
                <View style={styles.imgdiv}>
                  <Image source={require('../assets/icon/location.png')} style={styles.wishListIcon} />
                </View>

                <View style={[styles.productDetails, { marginLeft: 30 }]}>
                  <Text style={styles.productName}>
                    Restaurant Name
                  </Text>

                  <Text style={{ color: '#9DA49E', marginVertical: 5, width: 220 }}>24A, Sector 5, Shanti Nagar, Jaipur (Raj)- 302020</Text>
                </View>
              </View>
            </TouchableOpacity>

          </View>




          {/* Order Summary */}

          <View>
            <Text style={styles.boxHead}>Order Summary</Text>
          </View>
          <View style={styles.summary}>
            <View style={styles.row}>
              <Text style={styles.text}>Item Total</Text>
              <Text style={styles.text}>₹ 382.00</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.discountText}>Discount</Text>
              <Text style={styles.discountText}>- ₹ 82.00</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.text}>Delivery Charges</Text>
              <Text style={styles.freeText}>FREE</Text>
            </View>
          </View>

          <View style={styles.line}></View>

          <View style={styles.summary}>
            {/* Grand Total */}
            <View style={styles.row}>
              <Text style={styles.grandTotalText}>Grand Total</Text>
              <Text style={styles.grandTotalText}>₹ 300.00</Text>
            </View>
          </View>

        </View>
      </ScrollView>

      <View style={styles.bottomdiv}>
        <View style={styles.bsnsBTN}>
          <TouchableOpacity style={styles.back1}>
            <Text style={styles.loginText1} >Cancel Order</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.back2}>
            <LinearGradient colors={['#58E680', '#1DAB45']} style={styles.back21}>
              <Image source={require('../assets/icon/ques-mark.png')} style={styles.wishListIcon2} />
              <Text style={styles.loginText} >Need Help</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#9DA49E0D',
    height: '100%'
    // padding: 15,
    // borderRadius: 10,
    // marginBottom: 10,
  },

  header: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff', // Green background
    padding: 10,
    paddingTop: 30
  },

  arrow: {
    marginLeft: 20
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101811',
    textAlign: 'center',
    width: Dimensions.get('screen').width / 1.2
  },

  deliveryInfo: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    padding: 20
  },

  // headbox: {
  //     padding: 20
  // },

  deliveryText: {
    fontSize: 12,
    color: '#9DA49E',
  },

  deliveryDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#101811',
  },

  mapButton: {
    backgroundColor: '#1DAB45',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    //   alignSelf: 'flex-end',
    marginBottom: 15,
    position: 'absolute',
    left: Platform.OS == "ios" ? 70 : 90,
  },

  mapButtonText: {
    color: '#fff',
    fontSize: 14,
  },

  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //   justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    //   height: 100,
    marginLeft: 20,
    //   backgroundColor: 'red'
  },

  statusStep: {
    alignItems: 'center',
  },

  statusCircleActive: {
    width: 30,
    height: 30,
    borderRadius: 18,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusCircleInactive: {
    width: 30,
    height: 30,
    borderRadius: 18,
    backgroundColor: '#eee',
    borderColor: '#1F42294D',
    borderWidth: 2
  },

  checkmark: {
    color: '#fff',
    fontSize: 14,
  },

  statusLine: {
    width: 74,
    height: 2,
    backgroundColor: '#E0E0E0',
    marginBottom: 25
  },

  statusTextActive: {
    marginTop: 10,
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: 'bold',
  },

  statusTextInactive: {
    marginTop: 10,
    fontSize: 12,
    color: '#999',
  },

  menuContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginTop: 20,
    width: Dimensions.get('window').width / 1.1,
    borderRadius: 12,
    marginLeft: 20
  },

  menubtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    //   borderBottomWidth: 1,
    //   borderBottomColor: '#eee',
  },

  name: {
    color: '#101811',
    width: '83%',
    marginLeft: 20,
    fontSize: 18
  },

  iconsleft: {
    width: 25,
    height: 25
  },

  boxHead: {
    color: '#101811',
    fontSize: 18,
    fontWeight: 'bold',
    // marginLeft: 20
    padding: 20
  },

  row: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },

  imgdiv: {
    backgroundColor: '#9DA49E0D',
    width: 90,
    height: 80,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 20
  },

  productImg: {
    width: 70,
    height: 70,
    backgroundColor: "#9DA49E0D",
    padding: 10,
    borderRadius: 10
  },

  productCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
  },

  productDetails: {
    marginLeft: 10,
    marginTop: 10
  },

  productName: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    fontWeight: "bold",
    color: "#101811",
  },

  wishListIcon: {
    width: 60,
    height: 60
  },

  wishListIcon2: {
    width: 25,
    height: 25,
    // marginLeft: 30
  },
  bottomdiv: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    paddingBottom: 20
    // width:"100%"
  },

  bsnsBTN: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
    paddingTop: 30
  },

  back1: {
    borderColor: '#FF324B',
    borderWidth: 2,
    padding: 20,
    justifyContent: "center",
    borderRadius: 12,
  },

  loginText1: {
    color: '#FF324B',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },

  back2: {
    //    display: 'flex',
    //    flexDirection:'row',
    justifyContent: "center",
  },

  back21: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10
  },

  loginText: {
    color: '#fff',
    fontSize: 20,
    // lineHeight : 28,
    fontWeight: '500',
    marginHorizontal: 5
    // textAlign: 'center',
    // justifyContent: 'center',
  },

  summary: {
    marginTop: 10,
    width: Dimensions.get('screen').width / 1.1,
    marginLeft: 20
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },

  text: {
    fontSize: 16,
    color: '#000',
  },

  line: {
    width: '93%',
    height: 2,
    backgroundColor: '#ccc',
    marginTop: 10,
    marginLeft: 15
  },

  discountText: {
    fontSize: 16,
    color: 'green',
  },

  freeText: {
    fontSize: 16,
    color: 'green',
  },

  grandTotalText: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginVertical: 10,
    color: '#101811',
    fontWeight: "700"

  },
  stepperIcon: {
    tintColor: "#fff"
  }
});