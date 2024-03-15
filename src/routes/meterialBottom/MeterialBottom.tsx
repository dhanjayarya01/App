import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Project from '../../screens/Project'
import Mywork from '../../screens/Mywork'
import ChatBot from '../../screens/ChatBot'
import Profile from '../../screens/Profile'

const BotTab=createMaterialBottomTabNavigator()
const MeterialBottom = () => {
  return (
    <BotTab.Navigator screenOptions={{
  
    }}>
        <BotTab.Screen
        name='Project'
        component={Project}
        options={{
          
        }}
        />
        <BotTab.Screen
        name='Mywork'
        component={Mywork}
        />
        <BotTab.Screen
        name='ChatBot'
        component={ChatBot}
        options={{
            
        }}
        />
        <BotTab.Screen
        name='Profile'
        component={Profile}
        />
    </BotTab.Navigator>
  )
}

export default MeterialBottom