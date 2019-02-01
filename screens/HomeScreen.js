import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Control',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>

          <View style={styles.ledContainer}>
            <Text style={styles.LedText}>Control ALL LED's</Text>
          </View>

          <View style={[{ width: "100%", backgroundColor: "rgb(25, 29, 40)", height: 80,paddingTop: 20, marginTop: 20 }]}>
          <Button title="ALL ON" onPress={() => {fetch('http://192.168.178.120:3000/led/all/1'), buttonStateAll = 1 }} color="rgb(247, 247, 247)"/>
          </View>
          <View style={[{ width: "100%", backgroundColor: "rgb(25, 29, 40)", height: 80,paddingTop: 20, marginTop: 1 }]}>
          <Button title="ALL OFF" onPress={() => {fetch('http://192.168.178.120:3000/led/all/0'), buttonStateAll = 1 }} color="rgb(247, 247, 247)" />
          </View>



          <View style={styles.ledContainer}>
            <Text style={styles.LedText}>Control RED LED</Text>
          </View>

          <View style={[{ width: "100%", backgroundColor: "rgb(232, 30, 77)", height: 80,paddingTop: 20, marginTop: 20 }]}>
          <Button title="RED ON" onPress={() => {fetch('http://192.168.178.120:3000/led/red/1'), buttonStateAll = 1 }} color="rgb(247, 247, 247)"/>
          </View>
          <View style={[{ width: "100%", backgroundColor: "rgb(232, 30, 77)", height: 80,paddingTop: 20, marginTop: 1 }]}>
          <Button title="RED OFF" onPress={() => {fetch('http://192.168.178.120:3000/led/red/0'), buttonStateAll = 1 }} color="rgb(247, 247, 247)"/>
          </View>



          <View style={styles.ledContainer}>
            <Text style={styles.LedText}>Control YELLOW LED</Text>
          </View>

          <View style={[{ width: "100%", backgroundColor: "rgb(255, 188, 5)", height: 80,paddingTop: 20, marginTop: 20 }]}>
          <Button title="YELLOW ON" onPress={() => {fetch('http://192.168.178.120:3000/led/yellow/1'), buttonStateAll = 1 }} color="rgb(247, 247, 247)"/>
          </View>
          <View style={[{ width: "100%", backgroundColor: "rgb(255, 188, 5)", height: 80,paddingTop: 20, marginTop: 1 }]}>
          <Button title="YELLOW OFF" onPress={() => {fetch('http://192.168.178.120:3000/led/yellow/0'), buttonStateAll = 1 }} color="rgb(247, 247, 247)"/>
          </View>



          <View style={styles.ledContainer}>
            <Text style={styles.LedText}>Control GREEN LED</Text>
          </View>

          <View style={[{ width: "100%", backgroundColor: "rgb(29, 233, 182)", height: 80,paddingTop: 20, marginTop: 20}]}>
          <Button title="GREEN ON" onPress={() => {fetch('http://192.168.178.120:3000/led/green/1'), buttonStateAll = 1 }} color="rgb(247, 247, 247)" style = {[{borderWidth:  "1", borderColor: "black"}]} />
          </View>
          <View style={[{ width: "100%", backgroundColor: "rgb(29, 233, 182)", height: 80,paddingTop: 20, marginTop: 1 }]}>
          <Button title="GREEN OFF" onPress={() => {fetch('http://192.168.178.120:3000/led/green/0'), buttonStateAll = 1 }} color="rgb(247, 247, 247)"/>
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
