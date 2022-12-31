import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewContainer from '../../components/HOC/ViewContainer'
import ScrollContainer from '../../components/HOC/ScrollContainer'
import Paragraph from '../../components/UI/Paragraph'
import Clickable from '../../components/HOC/Clickable'

const Login = () => {
  return (
    <ViewContainer>
        <ScrollContainer>
        <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.ifreshlogo} source={icons.ifreshlogo}></Image>
          <Paragraph style={styles.parafresh}>𝐢𝐅𝐫𝐞𝐬𝐡</Paragraph>
          
        </View>
      </View>
        </ScrollContainer>
    </ViewContainer>
  )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        // borderWidth: 1,
        height:180,
        backgroundColor:"#17B455",
    
      },
      logoContainer: {
        alignItems:"center",
        justifyContent:"center",
     
    
      },
      ifreshlogo: {
        width: 100,
        tintColor:"white",
        height: 100,
      },
      parafresh:{
     color:"white",
     fontSize:40,
     marginTop:-25
      },
})