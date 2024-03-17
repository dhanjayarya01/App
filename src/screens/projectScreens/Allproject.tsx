import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import DatabaseContext from '../../appwrite/DatabaseContext'
import ProjectCard from './ProjectCard'

const Allproject = () => {
  const [data, setData] = useState([])
  const { database } = useContext(DatabaseContext)
  
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await database.getPosts([]);
        setData(response?.documents);
      } catch(error) {
        console.log("fetchdata alldata", error)
      }
    }
    fetchdata();
    console.log(data)
  }, [data]);

  return (
    <ScrollView>
    <KeyboardAvoidingView>
      <View>
        
        {data.map((rep, index) => (
        <ProjectCard title={rep.title} technology={rep.TechnologyUsed} requirement={rep.Requirement}/>
        ))}
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default Allproject

const styles = StyleSheet.create({})
