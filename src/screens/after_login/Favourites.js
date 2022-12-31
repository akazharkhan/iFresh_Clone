import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ViewContainer from '../../components/HOC/ViewContainer'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
import Clickable from '../../components/HOC/Clickable'
const Favourites = ({navigation}) => {
  return (
    <ViewContainer>
      <View style={styles.container}>
        <Clickable onPress={()=>navigation.navigate("Home")} style={styles.mainimg}>
          <Image style={styles.image} source={icons.leftarrow} />
        </Clickable>
        <View style={styles.mainpara}>
          <Paragraph style={styles.para}>Favourite</Paragraph>
        </View>
        <Clickable style={styles.mainimg2}>
          <Image style={styles.image2} source={icons.search} />
        </Clickable>
        <Clickable style={styles.mainimg1}>
          <Image style={styles.image1} source={icons.filter} />
        </Clickable>
      </View>
      <View style={{  height: "95%", alignItems: "center", justifyContent: "center" }}>
        <Paragraph size={22} color={ "#0AB252"} >No Favourites Found</Paragraph>
      </View>

    </ViewContainer>
  )
}

export default Favourites

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // borderWidth:1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#0AB252", padding: 15
  },
  mainimg2: {
    width: "15%",

  }, mainimg1: {
    width: "5%",
  },
  mainimg: {
    width: "15%",
    // marginRight:15
  },
  mainpara: {
    width: "60%"
  },
  image: {
    width: 20,
    height: 20,
    tintColor: "white",
  },
  para: {
    color: "white"
  },
  image1: {
    width: 20,
    height: 20,
    tintColor: "white",
  }, 
  image2: {
    width: 20,
    height: 20,
    tintColor: "white",
  },
})