import { View, Text } from 'react-native'
import React from 'react'
import Signup from '../screens/Signup'
import Login from '../screens/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MeterialTop from '../meterialNavigation/MeterialTop'
const Stack=createNativeStackNavigator()
const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name='MeterialTOp'
        component={MeterialTop}
        options={{headerShown:false}}
        />

    </Stack.Navigator>
  )
}

export default AuthStack