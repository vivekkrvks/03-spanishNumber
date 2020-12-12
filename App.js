

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
} from 'react-native';
// import Sound from 'react-native-sound';

const soundList = [
  require("./assets/one.wav"),
  require("./assets/two.wav"),
  require("./assets/three.wav"),
  require("./assets/four.wav"),
  require("./assets/five.wav"),
  require("./assets/six.wav"),
  require("./assets/seven.wav"),
  require("./assets/eight.wav"),
  require("./assets/nine.wav"),
  require("./assets/ten.wav"),
]

const App = () => {
  return(
    <>
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source = {require("./assets/logo.png")}/>
    <Text  style={styles.text}>hello</Text>
    </ScrollView>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1b262c"
    // alignItems:'center', // from right to left
    // justifyContent:'center'
  },
  logo:{
    alignSelf:"center"
  },
  text:{
    color:'#0000'
  }
})
