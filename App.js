import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { SwitchNavigator } from 'react-navigation'

import Login from './Signin/Login/Login';
import Loading from './Signin/Loading/Loading'
import SignUp from './Signin/Signup/Signup'
import Main from './Signin/Main'


const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App