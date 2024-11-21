import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { Styles } from '../Components/Stylesheets'

export default function PersonalInfo() {
  return (
    <ScrollView>

      <View style={styles.horizontalspacing}>
        <View style={Styles.marginTop2}>
          <TextInput
            label="First Name"
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
            label="Last Name"
            mode='outlined'
            activeOutlineColor="#1DAB45"
            outlineColor='#92CAA2'
            style={styles.inputfield}
            textColor='#000'
            theme={{ roundness: 10 }}

          />
        </View>

        <View style={Styles.marginTop2}>
          <TextInput
            label="Phone Number"
            mode='outlined'
            activeOutlineColor="#1DAB45"
            outlineColor='#92CAA2'
            textColor='#000'
            style={styles.inputfield}
            theme={{ roundness: 10, }}

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
  // inputfield: {
  //   padding: 5,
  //   marginVertical: 5
  // }
})