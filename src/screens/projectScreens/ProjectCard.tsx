import { KeyboardAvoidingView, ScrollView,StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProjectCard = ({title,technology,requirement}) => {
    const Technologyparts = technology.split(',').map(part => part.trim());
    const Requirementparts = requirement.split(',').map(part => part.trim());
    return (
    
<ScrollView style={{backgroundColor:'rgba(220,224,238,0.5)'}}>
  <View style={styles.container}>
     <View style={styles.Card}>
       <View style={styles.Headerdiv}>
         <Text numberOfLines={2} ellipsizeMode="tail" style={styles.headerText}>{title}</Text>
           </View>
            <Text style={{marginTop:11,fontSize:16}}>Technology Used</Text>
           <View style={[styles.within,{marginTop:1}]}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           {Technologyparts.map((part, index) => (
               <View key={index} style={styles.textContainer}>
          <Text style={{}}>{part}</Text>
           </View>
            ))}
        
            </ScrollView>
        </View>
        {/**/}
        <Text style={{fontSize:16}}>Requirement</Text>
           <View style={[styles.within,{marginTop:1}]}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           {Requirementparts.map((part, index) => (
               <View key={index} style={styles.textContainer}>
          <Text style={{}}>{part}</Text>
           </View>
            ))}
        
            </ScrollView>
        </View>
     </View>
 </View>
    </ScrollView>
  )
}

export default ProjectCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:14,
        paddingBottom:1,
        justifyContent: 'flex-start',
    },
    Card:{
        elevation:5,
        shadowColor:'blue',
        height:214,
        borderRadius:22,
        borderWidth:1,
        borderColor:'white',
        padding:10,
        width:'100%',
        backgroundColor:'white'
    },
    Headerdiv:{
        height:55,width:'100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        
    }, 
    within:{
        height:40,width:'100%',
        alignItems:'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap', 
        overflow: 'hidden', 
        // backgroundColor:'red'
    },
    textContainer:{
        marginHorizontal: 5,
        marginTop:5, 
        padding:5,
        paddingLeft:15,
        paddingRight:15,
        borderRadius: 15,
        backgroundColor: 'rgba(220,224,238,1)',    
    },
    headerText:{
        flex:1,
        justifyContent:'space-between',
        lineHeight:26,
      fontSize:20,
      color:'black',
      fontWeight:'bold',
      alignItems:'flex-start'
      
    }

})