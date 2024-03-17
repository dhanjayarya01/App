import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import DatabaseContext from '../../appwrite/DatabaseContext'
import { Query } from 'appwrite'
const Allproject = () => {
  let aa;
  const {database,uniqueId}=useContext(DatabaseContext)
  console.log(uniqueId)
  database.getPosts([])
  .then((responce)=>{
     aa=responce;
     console.log("res",aa)
  })
  return (
        <KeyboardAvoidingView>
        <View>
        <Text>hi</Text>
        </View>
        </KeyboardAvoidingView>
  )
}

export default Allproject

const styles = StyleSheet.create({})