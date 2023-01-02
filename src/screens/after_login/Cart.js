import { StyleSheet, Text, View,Image, ImageBackground,Alert } from 'react-native'
import React,{useEffect}from 'react'
import ViewContainer from '../../components/HOC/ViewContainer'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
import Clickable from '../../components/HOC/Clickable'
import UiButton from '../../components/UI/UiButton'
import ScrollContainer from '../../components/HOC/ScrollContainer'

const Cart = ({navigation}) => {
  
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
      <ScrollContainer>
      <View style={styles.container}>
        <Clickable onPress={()=>navigation.goBack()} style={styles.mainimg}>
          <Image style={styles.image} source={icons.leftarrow}/>
        </Clickable>
        <View style={styles.mainpara}>
          <Paragraph style={styles.para}>Cart</Paragraph>
        </View>
       
        <Clickable onPress={filter} style={styles.mainimg1}>
          <Image style={styles.image1} source={icons.filter}/>
        </Clickable>
      </View>
      {/* <View ></View> */}
<View style={{alignItems:"center",justifyContent:"center",height:300}}>
<Image style={{width:200,height:200}} source={icons.empty} />
</View>
      <View
      style={{height:"50%",alignItems:"center",}}>
        <Paragraph style={{color:"black",fontSize:22}}>Your Cart is empty</Paragraph>
        <Paragraph style={{color:"black",fontSize:15}}>You have no items in your shopping cart.</Paragraph>
        <Paragraph style={{color:"black",fontSize:15}}>Let's go buy something</Paragraph>
        <UiButton  onPress={()=>navigation.goBack()} style={{backgroundColor:"#0AB252",marginTop:20}}
        text='SHOP NOW'
        txtSize={18}
        ></UiButton>
      </View>
      </ScrollContainer>
    </ViewContainer>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
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
  image1: {
    width: 20,
    height: 20,
    tintColor: "white",
  },
  
})