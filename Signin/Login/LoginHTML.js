import React from 'react';
import {Text, TextInput, View, Button } from 'react-native'
import styles from './LoginCSS.js';


const HTML = (props) => {
  var state = { email: '', password: '', errorMessage: null }
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      {state.errorMessage &&
        <Text style={{ color: 'red' }}>
          {state.errorMessage}
        </Text>}
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={email => setState({ email })}
        value={state.email}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={password => setState({ password })}
        value={state.password}
      />
      <Button title="Sign Up" onPress={props.handleSignUp} />
      <Button
        title="Already have an account? Login"
        onPress={() => props.navigation.navigate('Login')}
      />
    </View>
  );
}

export default HTML;