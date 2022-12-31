import { StyleSheet, Text, View,Image,Alert } from 'react-native'
import React from 'react'
import ViewContainer from '../../components/HOC/ViewContainer'
import ScrollContainer from '../../components/HOC/ScrollContainer'
import Clickable from '../../components/HOC/Clickable'
import Paragraph from '../../components/UI/Paragraph'
import icons from '../../constants/icons'
import Video from 'react-native-video'

const ReferEarn = ({navigation}) => {
    const filter = () =>
  Alert.alert(
    "Product List are Empty",
    "shop vegetables and fruits",
    [
      // {
      //   text: "Ask me later",
      //   onPress: () => console.log("Ask me later pressed")
      // },
      // {
      //   text: "Cancel",
      //   onPress: () => console.log("Cancel Pressed"),
      //   style: "cancel"
      // },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
  return (
    <ViewContainer>
        
        <View style={styles.container}>
        <Clickable onPress={()=>navigation.navigate("Home")} style={styles.mainimg}>
          <Image style={styles.image} source={icons.leftarrow}/>
        </Clickable>
        <View style={styles.mainpara}>
          <Paragraph style={styles.para}>Refer Earn</Paragraph>
        </View>
      </View>
    {/* <Video
    source={{
      uri:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    }}
    /> */}
     
    </ViewContainer>
  )
}

export default ReferEarn

const styles = StyleSheet.create({ container: {
    width: "100%",
    // borderWidth:1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#0AB252", padding: 15
  },
   mainimg1: {
    width: "10%",
  },
  mainimg: {
    width: "15%",
    // marginRight:15
  },
  mainpara: {
    width: "70%"
  },
  image: {
    width: 20,
    height: 20,
    tintColor: "white",
  },
  para: {
    color: "white"
  }, 
 
})