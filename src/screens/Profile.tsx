import { ScrollView, StyleSheet, Text, View,ImageBackground, TextInput, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import DocumentPiker from 'react-native-document-picker'
import { useContext } from 'react'
import DatabaseContext from '../appwrite/DatabaseContext'
import AppwriteContext from '../appwrite/AppwriteContext'

const Profile = () => {
  const {picdoc,setPicdoc} = useContext(DatabaseContext)
   const {appwrite,currentuserinfo,setCurrentuserinfo}=useContext(AppwriteContext)
   const[updatpermis,setUpdatpermis]=useState(false)
   const[updatedName,setUpdatedName]=useState("");
   function handleEditName(){
         setUpdatpermis(!updatpermis)
         if(updatpermis && updatedName){
           setCurrentuserinfo({ ...currentuserinfo,name:updatedName });    
        }}
//image
    const selectDoc = async ()=>{
      try{
        const doc=await DocumentPiker.pick()
       setPicdoc(doc[0].uri);
      }catch(error){
        if(DocumentPiker.isCancel(e))
        console.log("user cancelled the upload ",e);
      else{
        console.log(error)
      }
    }
    }
   useEffect (()=>{
   const getuserinfo= async ()=>{
     try{
          const datae=await appwrite.getCurrentUser()
          setCurrentuserinfo(datae)
     }catch(error){
      console.log(error)
     }
   }
   getuserinfo()
  },[])
  return (
      <ScrollView>
        <Text>Hey! {currentuserinfo.name}</Text>
        <View style={styles.container}>
         
        <View style={styles.profilediv}>
          
        <TouchableOpacity style={styles.picdiv} onPress={selectDoc} >
               <ImageBackground 
                  source={picdoc ? {uri:picdoc}:require('../asserts/angel.png')}
                  resizeMode='cover'
                  style={{ width: '100%', height: '100%',}}>
                </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEditName} 
        style={styles.editbut}><Image source={updatpermis ? require('../asserts/checkmark.png'):require('../asserts/draw.png')} resizeMode='contain' style={{height:26,width:'100%'}}>
        </Image></TouchableOpacity>
        
        <View style={styles.namediv}>
        <TextInput value={updatedName} onChangeText={text=>setUpdatedName(text)} placeholder={currentuserinfo.name} readOnly={!updatpermis} style={ [ {borderRadius:12,borderWidth: updatpermis ? 1 : 0},{height:42,fontSize:20,fontWeight:'bold',color:'black' }]} placeholderTextColor="black">
        </TextInput></View>
        
        <View style={{marginLeft:45}}><Text style={{fontSize:14,fontWeight:'bold'}}>0 Project</Text></View>
        </View>
        <View style={{marginTop:14}}>
         <Text style={{fontSize:16}}> Hey Here You Can Update Your all details</Text>
         </View>

         <View style={{marginTop:10,height:160,width:'100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{marginTop:18,padding:12,marginLeft:14,height:120,borderRadius:11,width:116,backgroundColor:"rgba(220,224,238,1)"}}>
            <View style={{padding:6,height:26,width:26,borderRadius:10,backgroundColor:"#E1A369", position:'absolute', bottom:104,left:10}}>
              <Image source={require('../asserts/information.png')} resizeMode='contain' style={{height:'100%',width:'100%'}}></Image>
            </View>
            <View style={{height:55,width:'100%',marginTop:12,}}><Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Personal Information</Text></View>
            <View style={{marginTop:5}}><Text>Completed-></Text></View>
          </View>
        
          <View style={{marginTop:18,padding:12,marginLeft:14,height:120,borderRadius:11,width:116,backgroundColor:"rgba(220,224,238,1)"}}>
            <View style={{padding:6,height:26,width:26,borderRadius:10,backgroundColor:"#336DC0", position:'absolute', bottom:104,left:10}}>
              <Image source={require('../asserts/box.png')} resizeMode='contain' style={{height:'100%',width:'100%'}}></Image>
            </View>
            <View style={{height:55,width:'100%',marginTop:12,}}><Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Projects & Work</Text></View>
            <View style={{marginTop:5}}><Text>Completed-></Text></View>
          </View>
          
          <View style={{marginTop:18,padding:12,marginLeft:14,height:120,borderRadius:11,width:116,backgroundColor:"rgba(220,224,238,1)"}}>
            <View style={{padding:6,height:26,width:26,borderRadius:10,backgroundColor:"#44A84E", position:'absolute', bottom:104,left:10}}>
              <Image source={require('../asserts/graduation.png')} resizeMode='contain' style={{height:'100%',width:'100%'}}></Image>
            </View>
            <View style={{height:55,width:'100%',marginTop:12,}}><Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Education Details</Text></View>
            <View style={{marginTop:5}}><Text>Completed-></Text></View>
          </View>
          <View style={{marginTop:18,padding:12,marginLeft:14,height:120,borderRadius:11,width:116,backgroundColor:"rgba(220,224,238,1)"}}>
            <View style={{padding:6,height:26,width:26,borderRadius:10,backgroundColor:"#0F4DA0", position:'absolute', bottom:104,left:10}}>
              <Image source={require('../asserts/chat.png')} resizeMode='contain' style={{height:'100%',width:'100%'}}></Image>
            </View>
            <View style={{height:55,width:'100%',marginTop:12,}}><Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Social Media</Text></View>
            <View style={{marginTop:5}}><Text>Completed-></Text></View>
          </View>
          
          </ScrollView>
         </View>

         <View style={{height:250,width:'100%',}}>
         <View style={{height:34,width:'100%'}}><Text style={{fontSize:16}}>The Above Info Provided</Text></View>
          <View style={{height:210,width:'100%',backgroundColor:'rgba(220,224,238,0.8)',borderRadius:24,}}>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:20,marginLeft:14}}>Your Name </Text>
            <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>{`:- ${currentuserinfo.name}`}</Text>
            </View>
            <View style={{flexDirection:'row', overflow:'hidden'}}>
            <Text style={{fontSize:20,marginLeft:10}}>Email ID </Text>
            <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>{`:- ${currentuserinfo.email}`}</Text>
            </View>
             <Text style={{marginLeft:15,marginTop:12}}>Updata Your Skills</Text>

          </View>
          </View>
        </View>
      </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:14,

  },
  
  profilediv:{
    height:124,
    width:'100%',
    marginTop:94,
    borderRadius:20,
    backgroundColor:'rgba(220,224,238,0.51)',
  },
  picdiv:{
    height:67,width:67,borderRadius:45,
    backgroundColor:'rgba(220,224,238,0.51)',
    position:'absolute',
    borderWidth:1,
    borderColor:'rgba(220,224,238,1)',
    elevation:5,
    shadowColor:'blue',
    bottom:84,
    left:25,
    overflow:'hidden'
    
  },
  editbut:{
    height:40,
    width:48,
    position:'absolute',
    left:282,
    top:18
  },
  namediv:{
    height:38,width:280,
    marginTop:55,
    paddingLeft:16,
    overflow:'hidden'
  }
})