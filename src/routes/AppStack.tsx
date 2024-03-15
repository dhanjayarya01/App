import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack=createNativeStackNavigator()
const AppStack = () => {
  return (
       <Stack.Navigator>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown:false
        }}
        />
       </Stack.Navigator>
  )
}

export default AppStack