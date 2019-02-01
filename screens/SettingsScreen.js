import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var randomLedState = 1;
var flowLedState = 1;
var effectState = 0;

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Effects',
  };


  render() {
    




    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>

          <View style={styles.ledContainer}>
            <Text style={styles.LedText}>Control Random LED Effect</Text>
          </View>

          <View style={[{ width: "100%", backgroundColor: "rgb(30, 211, 232)", height: 80,paddingTop: 20, marginTop: 20 }]}>
          <Button title="ENABLE RANDOM LED EFFECT" onPress={() => { randomLedEffect(), buttonStateAll = 1 }} color="rgb(247, 247, 247)"/>
          </View>
          <View style={[{ width: "100%", backgroundColor: "rgb(30, 211, 232)", height: 80,paddingTop: 20, marginTop: 1 }]}>
          <Button title="DISABLE RANDOM LED EFFECT" onPress={() => { randomLedState = 0, buttonStateAll = 1 }} color="rgb(247, 247, 247)" />
          </View>




          <View style={styles.ledContainer}>
            <Text style={styles.LedText}>Control Flow LED Effect</Text>
          </View>

          <View style={[{ width: "100%", backgroundColor: "rgb(182, 78, 196)", height: 80,paddingTop: 20, marginTop: 20 }]}>
          <Button title="ENABLE FLOW LED EFFECT" onPress={() => { flowLedEffect(), buttonStateAll = 1 }} color="rgb(247, 247, 247)"/>
          </View>
          <View style={[{ width: "100%", backgroundColor: "rgb(182, 78, 196)", height: 80,paddingTop: 20, marginTop: 1 }]}>
          <Button title="DISABLE FLOW LED EFFECT" onPress={() => { flowLedState = 0, buttonStateAll = 1 }} color="rgb(247, 247, 247)" />
          </View>

        </ScrollView>

      
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  ledContainer: {
    textAlign: 'center',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
 
  },
  LedText: {
    fontSize: 20,
    color: 'rgb(25, 29, 40)',
    lineHeight: 24,
  },
});


async function randomLedEffect() {

  if(effectState == 1) {
    await new Promise((r) => setTimeout(r, 1000));
    flowLedState = 0;
  }
  effectState = 1;
  flowLedState = 0;
  
  while(randomLedState == 1) {
    var min = 1;
    var max = 4;
    var rand =  parseInt(min + (Math.random() * (max-min)));

    console.log(rand);

    switch(rand) {
      case 1:
        fetch('http://192.168.178.120:3000/led/green/1');
      break;
      case 2:
        fetch('http://192.168.178.120:3000/led/red/1');
      break;
      case 3:
        fetch('http://192.168.178.120:3000/led/yellow/1');
      break;
    }
    await new Promise((r) => setTimeout(r, 250));
    fetch('http://192.168.178.120:3000/led/all/0');
    await new Promise((r) => setTimeout(r, 250));
  }
  fetch('http://192.168.178.120:3000/led/all/0');
  randomLedState = 1;
  flowLedState = 1;
  effectState = 0;
  
}





async function flowLedEffect() {

  if(effectState == 1) {
    await new Promise((r) => setTimeout(r, 1000));
    randomLedState = 0;
  }
  effectState = 1;
  randomLedState = 0;
  
  while(flowLedState == 1) {

        fetch('http://192.168.178.120:3000/led/green/1');
        await new Promise((r) => setTimeout(r, 250));
        fetch('http://192.168.178.120:3000/led/yellow/1');
        await new Promise((r) => setTimeout(r, 250));
        fetch('http://192.168.178.120:3000/led/green/0');
        fetch('http://192.168.178.120:3000/led/red/1');
        await new Promise((r) => setTimeout(r, 250));
        fetch('http://192.168.178.120:3000/led/yellow/0');
        await new Promise((r) => setTimeout(r, 250));
        fetch('http://192.168.178.120:3000/led/red/0');
    
  }
  fetch('http://192.168.178.120:3000/led/all/0');
  flowLedState = 1;
  randomLedState = 1;
  
}
