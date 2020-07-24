import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import firebase from 'react-native-firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAlZruO2T_JNOWn4ysfX6AryR6Dzm_VVaA',
  authDomain: 'blobtest-36ff6.firebaseapp.com',
  databaseURL: 'https://blobtest-36ff6.firebaseio.com',
  storageBucket: 'blobtest-36ff6.appspot.com',
  messagingSenderId: '506017999540',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firebase sets some timeers for a long period, which will trigger some warnings. Let's turn that off for this example
console.disableYellowBox = true;

export default class Main extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()

    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})