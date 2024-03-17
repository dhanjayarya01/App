import { View, Text,Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Project from '../../screens/Project'
import Mywork from '../../screens/Mywork'
import ChatBot from '../../screens/ChatBot'
import Profile from '../../screens/Profile'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useContext } from 'react'
import DatabaseContext from '../../appwrite/DatabaseContext'
const BotTab=createBottomTabNavigator()

const BottomTab = () => {
  const {picdoc} = useContext(DatabaseContext)

  const route = useRoute();
  return (
    <BotTab.Navigator initialRouteName='Profile'
    screenOptions={{
      headerShown: false, 
      
      
    }}
    >
        <BotTab.Screen
        name='Project'
        component={Project}
        options={{
          tabBarIcon: ({ color, size }) => (
          <Image source={require('../../asserts/box.png')} resizeMode='contain'style={{ height: 24,width:'100%',tintColor: route.name =='Project' ? 'blue' : color}}></Image>),
        }}
      
        />
        <BotTab.Screen
        name='Mywork'
        component={Mywork}
        options={{
          tabBarIcon: ({ color, size }) => (
          <Icon name="work-outline" size={30}  color={route.name === 'Mywork' ? 'red' : color} />),       
        }}
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
        options={{
          tabBarIcon: () => (
            <View style={{width:35,borderRadius:17}}>
            <Image source={picdoc ? {uri:picdoc}:require('../../asserts/angel.png')}resizeMode='cover' style={{height:'100%',width:'100%',borderRadius:50}}></Image>
            </View>),
        }}
        />
    </BotTab.Navigator>
  )
}

export default BottomTab