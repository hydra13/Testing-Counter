import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
} from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 13
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Testing Counter</Text>
        <View style={styles.fixToText}>
          <Button title="-" onPress={() => {
            this.setState(previousState => (
              { counter: previousState.counter-1 }
            ))
          }} />
          <Text style={styles.title}>{this.state.counter}</Text>
          <Button title="+" onPress={() => {
            this.setState(previousState => (
              { counter: previousState.counter+1 }
            ))
          }} />
        </View>
      </SafeAreaView>
    );
  }
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
