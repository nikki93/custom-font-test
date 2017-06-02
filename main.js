import Expo from 'expo';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  state = {
    loaded: false,
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'font1': require('./assets/norddruck.ttf'),
      'font2': require('./assets/serlo.ttf'),
    });
    this.setState({ loaded: true });
  }

  render() {
    return this.state.loaded ? (
      <View style={styles.container}>
        <Text style={{ fontFamily: 'font1' }}>
          norddruck
        </Text>
        <Text style={{ fontFamily: 'font2' }}>
          serlo
        </Text>
      </View>
    ) : (
      <Expo.AppLoading />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
