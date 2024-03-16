import { StyleSheet, Text, View,TouchableOpacity,KeyboardAvoidingView,ScrollView,ImageBackground,TextInput,Pressable} from 'react-native'
import React from 'react'
import Snackbar from 'react-native-snackbar'
import { useContext,useState } from 'react'
import AppwriteContext from '../appwrite/AppwriteContext'
const Login = ({navigation}) => {
  const[email,setEmail]=useState('')
  const[error,setError]=useState('')
  const[password,setPassword]=useState('')

  const {appwrite,setIsLoggedIn}=useContext(AppwriteContext)
  const handleSubmit=()=>{
  
    if (
    email.length < 1 ||
    password.length < 1
    ) {
      setError('All fields are required');
    
    } else {
      const user = {
        email,
        password,
      
      };
      appwrite
      .login(user)
      .then((responce)=>{
        if(responce){
          setIsLoggedIn(true)
          Snackbar.show(({
            text: 'Login success',
            duration:Snackbar.LENGTH_LONG,
          }))
        }
        
      })
}
Snackbar.show(({
  text:error,
  duration:Snackbar.LENGTH_LONG
}))
}

  return (

    
    <KeyboardAvoidingView
    behavior={Platform.OS==='android'? 'padding':'height'}
    >
        <ScrollView>
      <ImageBackground
      source={require('../asserts/pic6.png')}
      resizeMode='cover'
      style={{flex:1,height:612}}
      >
        
    <View style={styles.container}>
       
      <View style={styles.card}>
      <Text style={[styles.title,{marginLeft:100,marginBottom:16,}]}>Login</Text>
      <TextInput
      style={styles.input}
      placeholder='Enter your Email'
      value={email}
      onChangeText={text=>setEmail(text)}
      placeholderTextColor='rgba(0,0,0,0.7)'
      />
      <TextInput
      style={styles.input}
      placeholder='Enter Password'
      value={password}
      onChangeText={text=>setPassword(text)}
      placeholderTextColor='rgba(0,0,0,0.7)'
      />
    
      <TouchableOpacity onPress={handleSubmit} style={styles.submit}><Text >Submit</Text></TouchableOpacity>
      </View>

    </View>
    </ImageBackground>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  submit:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:12,
    borderWidth:0.6,
    height:42,
    width:80,
    marginLeft:100,
    marginTop:10
    
 },
 
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    
  },
  
  card: {
    marginTop:112,
    paddingLeft:18,
    paddingRight:18,
    paddingBottom:18,
    paddingTop:2,
    height: 280,
    width: '100%',
    backgroundColor: 'rgba(225, 225, 225, 0.6)', 
    borderRadius: 20, 
  },
  input: {
    paddingLeft: 18,
    fontSize: 16,
    color:'red',
    fontWeight:'bold',
    // borderColor:'black',
    // borderWidth:1,
    borderRadius: 20,
    marginBottom: 16,
    backgroundColor: 'white', // Set background color for TextInput
    opacity:0.7
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  }

})