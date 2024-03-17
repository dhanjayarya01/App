import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Allproject from './projectScreens/Allproject'
import CreateProject from './projectScreens/CreateProject'

const Top=createMaterialTopTabNavigator()
const Project = () => {
  return (
    <Top.Navigator initialRouteName='Allproject'
    screenOptions={{
      tabBarLabelStyle: { fontSize:14,color:'#083945'},
      tabBarContentContainerStyle:{height:35,backgroundColor: 'rgba(0,0, 0, 0.1)'},
    }}
    >
      <Top.Screen
      name='ALLProject'
      component={Allproject}
      />
      <Top.Screen
      name='CreateProject'
      component={CreateProject}
      />
      
    </Top.Navigator>
  
  )
}

export default Project

const styles = StyleSheet.create({})