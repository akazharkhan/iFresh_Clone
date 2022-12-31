import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import ViewContainer from '../../components/HOC/ViewContainer'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
import Clickable from '../../components/HOC/Clickable'

const Category = ({navigation}) => {
  return (
    <ViewContainer>
      <View style={styles.container}>
        <Clickable onPress={()=>navigation.navigate("Home")} style={styles.mainimg}>
          <Image style={styles.image} source={icons.leftarrow}/>
        </Clickable>
        <View style={styles.mainpara}>
          <Paragraph style={styles.para}>Category</Paragraph>
        </View>
      </View>
      <View style={styles.fruitdry}>
                    <Clickable style={styles.fruit}>
                        {/* <View style={styles.fruit1}> */}
                            <Image style={styles.fruitimg} source={icons.fruitsimage}></Image>
                        {/* </View> */}
                        <View style={styles.fruit2}>
                            <Text style={{textAlign:'center'}}>FRUITS & VEGETABLES</Text>
                        </View>
                    </Clickable>
                    <Clickable style={styles.dry}>
                        {/* <View style={styles.dry1}> */}
                            <Image style={styles.dryimg} source={icons.dryimage}></Image>
                        {/* </View> */}
                        <View style={styles.fruit2}>
                            <Text style={{textAlign:'center'}}> DRY FRUITS </Text>
                        </View>
                    </Clickable>
                </View>
    </ViewContainer>
  )
}

export default Category

const styles = StyleSheet.create({
  container:{
    width:"100%",
// borderWidth:1,
flexDirection:"row",
backgroundColor:"#0AB252",padding:15
  },
  mainimg:{
// width:"5%"
marginRight:15
  },
  image:{
    width:20,
    height:20,
    tintColor:"white",
  },
  para:{
  color:"white"
  },
  fruitdry: {
    marginVertical: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
},
fruit: {
    padding:10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    width: "45%",
    borderColor: "white",
},
fruitimg: {
    width: 100,
    height: 100,
},
dry: {
    padding:10,
    alignItems: "center",
    elevation: 2,
    width: "45%",
    justifyContent: "center",
    borderColor: "white",
},
dryimg: {
    width: 100,
    height: 100,
},
fruit2: {
    fontSize: 10,
    marginTop: 10,
    fontFamily: "600"
},
})