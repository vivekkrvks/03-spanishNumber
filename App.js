

import React from 'react';
import {
  TouchableOpacity,
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
      <View style={styles.gridContainer}>
      {soundList.map((sound) => (
          <TouchableOpacity style = {styles.box}
          key={sound}
          // onPress={}
          // style={}
          >
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>

      ))}

      </View>
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
    alignSelf:"center",
    marginTop:20
  },
  text:{
    color:'#ff4301',
    fontSize:50,

  },
  gridContainer:{
    flex:1,
    margin:5,
    flexDirection:"row", // change the flex direction from column to row
    flexWrap:"wrap", // to wrap everything in screen
    alignItems:"flex-start",
    justifyContent: "space-around"
  },
  box:{
    height:95,
    alignItems:"center",
    justifyContent:"center",
    width:"46%",
    marginVertical:6,
    backgroundColor:"#0f4c75",
    borderRadius:5,
    shadowColor:"#393e46",
    elevation:5
  }
})
