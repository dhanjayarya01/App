import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Signup from '../../screens/Signup'
import Login from '../../screens/Login'

const Top=createMaterialTopTabNavigator()
const MeterialTop = () => {
  return (
    <Top.Navigator 
    initialRouteName='Login'
    screenOptions={{
      tabBarLabelStyle: { fontSize:14,},
      tabBarContentContainerStyle:{height:35,backgroundColor: 'rgba(0,0, 0, 0.1)'},
      tabBarLabel:()=>null
    }}
    >
        <Top.Screen
        name='Login'
        component={Login}
        options={{tabBarLabel:'Login'}}
        />
       <Top.Screen
       name='Signup'
       component={Signup}
       options={{tabBarLabel:'Sign up'}}
        />
    </Top.Navigator>
)}

export default MeterialTop
      

