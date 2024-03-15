import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Route from './routes/Route'
import AppwriteProvider from './appwrite/AppwriteProvider'
import Signup from './screens/Signup'
import DatabaseProvider from './appwrite/DatabaseProvider'
const App = () => {
  return (
    <AppwriteProvider>
    <DatabaseProvider>
      <Route/>
      </DatabaseProvider>
    </AppwriteProvider>

  )
}

export default App

const styles = StyleSheet.create({})