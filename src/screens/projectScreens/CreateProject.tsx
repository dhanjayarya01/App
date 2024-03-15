import { TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import DatabaseContext from '../../appwrite/DatabaseContext';
import { useContext } from 'react';
import AppwriteContext from '../../appwrite/AppwriteContext';
import Snackbar from 'react-native-snackbar';
import DocumentPiker from 'react-native-document-picker'

////////////main///////////////////////////////////////////////////////////////////////////
const CreateProject = () => {
  const [userId, setUserId] = useState('')
  const { database,uniqueId,setUniqueId,picdoc,setPicdoc} = useContext(DatabaseContext)
  const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppwriteContext)
  const [error, setError] = useState('')
  const [title, setTitle] = useState('')
  const [github, setGithub] = useState('')
  const [content, setContent] = useState('')
  const [featuredImage, setFeaturedImage] = useState('')
  const [Requirement, setRequirement] = useState('')
  const [TechnologyUsed, setTechnologyUsed] = useState('')
  
  const selectDoc = async ()=>{
    try{
      const doc=await DocumentPiker.pick()
      console.log(doc[0].uri)
     setPicdoc(doc[0].uri);
    }catch(error){
      if(DocumentPiker.isCancel(e))
      console.log("user cancelled the upload ",e);
    else{
      console.log(error)
    }
  }
  }

  useEffect(() => {
    console.log("picdoc", picdoc);

  }, [picdoc]);

  
  
  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36);
  }
  
  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then((responce) => {
        setUserId(responce?.$id)
        console.log("update", userId)
      })
  }, [userId])


  const handlesubmit = () => {
    if (
      title.length < 1 ||
      content.length < 1 ||
      TechnologyUsed.length < 1 ||
      Requirement.length < 1 ||
      github.length < 1
      ) {
        setError('All fields are required');
        Snackbar.show(({
          text: error,
          duration: Snackbar.LENGTH_LONG
        }))
      }
      else {
      
      setUniqueId(generateUniqueId())
    console.log("bottom",uniqueId)
      setError('')
      const data = {
        uniqueId,
        title,
        content,
        TechnologyUsed,
        userId,
        Requirement,
        github
      };
         database
        .createPost(data)
        .then((responce) => {
          if (responce) {
            setContent('')
            setGithub('')
            setRequirement('')
            setTitle('')
            setUserId('')
            setTechnologyUsed('')
            Snackbar.show(({
              text: "successfully created project",
              duration: Snackbar.LENGTH_LONG
            }))
            
          }
          else {
            console.log("errp")
          }
        })

    }
    Snackbar.show(({
      text: error,
      duration: Snackbar.LENGTH_LONG
    }))
  }



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.dp}>
            <Text style={{ fontSize: 13, marginLeft: 12 }}>Project name / Project Title</Text>
            <TextInput style={styles.input}
              placeholder='Ex-folian'
              value={title}
              onChangeText={text => setTitle(text)}
            />
            <Text style={{ fontSize: 13, marginLeft: 12 }}>Technology Used</Text>
            <TextInput style={styles.input}
              placeholder='Ex-React,Next'
              value={TechnologyUsed}
              onChangeText={text => setTechnologyUsed(text)}
            />
            <Text style={{ fontSize: 13, marginLeft: 12 }}>Requirements </Text>
            <TextInput style={styles.input}
              placeholder='Ex-React Developer'
              value={Requirement}
              onChangeText={text => setRequirement(text)}
            />
          </View>
          {/*second part*/}

          <View style={[styles.dp, { height: 200 }]}>
            <Text >Add a logo and github repo</Text>
            <View style={{ flexDirection: 'row', marginTop: 12, marginLeft: 6 }}>
              <View style={styles.dppicdiv}>
                <ImageBackground
                  source={picdoc ? {uri:picdoc}:require('../projectScreens/Empty.png')}
                  resizeMode='cover'
                  style={{ width: '100%', height: '100%', borderRadius: 3, }}>
                </ImageBackground>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 35, width: 125, marginLeft: 48, marginTop: 36, borderWidth: 0.4, borderRadius: 8, borderColor: '#9B9090' }}>
                <Icon name="upload" size={15} color="#900" style={{ fontSize: 14, fontWeight: 'bold', marginRight: 4 }} />
                <TouchableOpacity onPress={selectDoc} ><Text style={{ fontWeight: 'bold' }}>Upload logo</Text></TouchableOpacity>
              </View>
            </View>
            <Text style={{ marginTop: 18, fontSize: 14, marginLeft: 10 }}>Your github repo</Text>
            <TextInput
              style={[styles.input, { height: 44, fontSize: 16 }]}
              placeholder='Github Repositories '
              value={github}
              onChangeText={text => setGithub(text)}
            />
          </View>

          <TextInput
            multiline
            style={[styles.input, { textAlignVertical: 'top', height: 160, fontSize: 20, padding: 0, marginTop: 11, width: 340, marginLeft: 10, backgroundColor: 'rgba(8,118,144,0.11)' }]}
            placeholder='Write a brief about your Project'
            value={content}
            onChangeText={text => setContent(text)}
          //  onContentSizeChange={handleContentSizeChange}
          />


          <TouchableOpacity onPress={handlesubmit} style={{ height: 44, width: 120, backgroundColor: 'red', marginLeft: 44 }}><Text>DONE</Text></TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  )


}

export default CreateProject

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  dp: {
    marginTop: 10,
    paddingLeft: 12,
    paddingRight: 18,
    paddingBottom: 18,
    paddingTop: 2,
    height: 180,
    width: '100%',
    backgroundColor: 'rgba(8,118,144,0.11)',
    borderRadius: 20,
  },
  input: {
    paddingLeft: 13,
    fontSize: 14,
    height: 38,
    width: 320,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 12,
    marginBottom: 2,
    backgroundColor: 'white',

  },
  dppicdiv: {
    height: 85,
    width: 85,
    borderRadius: 30,
    backgroundColor: 'white',
  },



})