import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <SafeAreaView style={style.Containerrows}>

      <View style={style.row}>
        <View>
          <Image style={style.locationicon} source={require('../assets/icon/location.png')} />
        </View>

        <View style={style.verticalrow}>
          <Text style={style.restaurantname_txt}>
            Restaurant Name
          </Text>

          <Text style={style.restaurant_address}>
            6391 Elgin St. Celina, Delaware 10299
          </Text>
        </View>
      </View>

      <TouchableOpacity>
        <Image style={style.locationicon} source={require('../assets/icon/Bulkbuying.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  locationicon: {
    width: 30,
    height: 30,
  },
  row: {
    display: "flex",
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  Containerrows: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal:20,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal:10
  },
  verticalrow: {
    display: 'flex',
    flexDirection: "column",
    marginHorizontal: 10
  },
  restaurantname_txt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: '#101811',
    lineHeight: 24
  },
  restaurant_address: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    fontWeight: '400',
    color: '#9DA49E',
    lineHeight: 18
  }
})