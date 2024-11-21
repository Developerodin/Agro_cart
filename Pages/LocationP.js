import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, Modal, Platform, ToastAndroid, AlertIOS, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Accountcreated from '../Components/Accountcreated';

const { width, height } = Dimensions.get("screen")

export default function LocationP({ navigation }) {

  const [isLoader, setIsLoader] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [Address, setAddress] = useState('');

  // const updateAddress = async () => {
  //   var token=await AsyncStorage.getItem('Usertoken')
  //   setIsLoader(true);
  //   if (address == '') {
  //     if (Platform.OS === 'android') {
  //       ToastAndroid.show("Enter address", ToastAndroid.SHORT);
  //       setIsLoader(false);
  //     } else {
  //       AlertIOS.alert("Enter Address");
  //       setIsLoader(false);
  //     }
  //   }
  //   else {
  //     await axios.post(`${process.env.REACT_APP_BACKEND_API}customer/add-address`, {
  //       address: address
  //     }, {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     })
  //       .then((res) => {
  //         setIsLoader(false);
  //         navigation.navigate("Bottom");
  //         // setModalVisible(true);
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //         if (Platform.OS === 'android') {
  //           ToastAndroid.show("Try Again", ToastAndroid.SHORT);
  //           setIsLoader(false);
  //         } else {
  //           AlertIOS.alert("Try Again");
  //           setIsLoader(false);
  //         }
  //       })
  //   }
  // }

  return (

    <>
      <View style={styles.container}>
        {/* Search Input */}
        <TextInput
          placeholder="Search Location"
          style={styles.searchInput}
          onChangeText={(e) => { setAddress(e) }}
        />

        <Image source={require('../assets/dummymap.png')} style={{ resizeMode: "cover", height: height / 1.5, width: width }} />

        {/* Address Display and Buttons */}
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>{Address}</Text>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        contentContainerStyle={styles.containerStyle}
        onDismiss={() => setModalVisible(false)}
        dismissableBackButton={true}
      >
        <Accountcreated />
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    position: 'absolute',
    top: 20,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    zIndex: 1, // To keep search bar above the map
  },
  map: {
    flex: 1,
    width: '100%',
    height: '70%',
  },
  addressContainer: {
    position: 'absolute',
    bottom: 25,
    width: '100%',
    backgroundColor: '#fff',
    // height:120,
    padding: 20,
    borderRadius: 15,
    // marginHorizontal:10,
  },
  addressText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular'

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20
  },
  buttonBack: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: "50%"
  },
  buttonConfirm: {
    // flex: 1,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular'

  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    height: Dimensions.get('window').height / 2.4,
    width: Dimensions.get('window').width / 1.2,
    borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalhead1: {
    fontSize: 24,
    lineHeight: 36,
    color: '#101811',
    fontWeight: '700',
    padding: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },

  modalhead2: {
    fontSize: 14,
    color: '#101811',
    fontWeight: '400',
    marginHorizontal: 30,
    lineHeight: 21,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  // buttonOpen: {
  //     backgroundColor: '#F194FF',
  // },

  // buttonClose: {
  //     backgroundColor: '#2196F3',
  // },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  Ordernowbtn: {
    backgroundColor: '#1DAB45',
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderRadius: 12,
    justifyContent: "center",
    marginTop: 30
  },

  picdiv: {
    backgroundColor: '#1F42291A',
    width: 100,
    height: 100,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 50,
  },
  loginText: {
    fontFamily: 'Poppins-Regular',
    textAlign: "center",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 28,
    color: "#fff"
  },
  modalpic: {
    marginTop: 10,
    width: "80%",
    height: "80%"
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  containerStyle: {
    backgroundColor: "#fff",
    height: height,
    marginHorizontal: 40,
    borderRadius: 20
  }
});