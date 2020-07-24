import React from 'react';
import { Text } from "react-native";
import styles from './SignupCSS.js';


const HTML = () => {
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      {this.state.errorMessage &&
        <Text style={{ color: 'red' }}>
          {this.state.errorMessage}
        </Text>}
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={email => this.setState({ email })}
        value={this.state.email}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={password => this.setState({ password })}
        value={this.state.password}
      />
      <Button title="Sign Up" onPress={this.handleSignUp} />
      <Button
        title="Already have an account? Login"
        onPress={() => this.props.navigation.navigate('Login')}
      />
    </View>
  );
}

export default HTML;