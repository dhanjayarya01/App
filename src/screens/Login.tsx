import { StyleSheet, Text, View,TouchableOpacity,KeyboardAvoidingView,ScrollView,ImageBackground,TextInput,Pressable} from 'react-native'
import React from 'react'


const Login = ({navigation}) => {
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
      placeholder='Name'
      placeholderTextColor='rgba(0,0,0,0.7)'
      />
      <TextInput
      style={styles.input}
      placeholder='Enter your Email'
      placeholderTextColor='rgba(0,0,0,0.7)'
      />
      <TextInput
      style={styles.input}
      placeholder='Enter Password'
      placeholderTextColor='rgba(0,0,0,0.7)'
      />
      <TextInput
      style={styles.input}
      placeholder='Re-inter Password'
      placeholderTextColor='rgba(0,0,0,0.7)'
      
      />
      <TouchableOpacity style={styles.submit}><Text >Submit</Text></TouchableOpacity>
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
    height: 380,
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
    marginBottom: 12,
    backgroundColor: 'white', // Set background color for TextInput
    opacity:0.7
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  }

})