import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native'
import ViewContainer from '../../components/HOC/ViewContainer'
import Clickable from '../../components/HOC/Clickable'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
import { ProductListData } from './DATA'
// import CartItemCard from './CartItemCard'
import CartItemCard from './CartItemCard'
import UiButton from '../../components/UI/UiButton';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Cart = ({ navigation }) => {
  const [productListData, setProductListData] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All Category');

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



 


  const getCartProducts =async()=>{
    let CartProducts = await AsyncStorage.getItem('cart');
    setProductListData(JSON.parse(CartProducts))
  }
  useEffect(() => {
    getCartProducts();
  }, [])
  


  return (
    <ViewContainer>
      <View style={styles.container}>
        <Clickable onPress={() => navigation.goBack()} style={styles.mainimg}>
          <Image style={styles.image} source={icons.leftarrow} />
        </Clickable>
        <View style={styles.mainpara}>
          <Paragraph style={styles.para}>Cart</Paragraph>
        </View>

        <Clickable onPress={filter} style={styles.mainimg1}>
          <Image style={styles.image1} source={icons.filter} />
        </Clickable>
      </View>
      {
        productListData == null ? (
          <>
            <View style={{ alignItems: "center", justifyContent: "center", height: 300 }}>
              <Image style={{ width: 200, height: 200 }} source={icons.empty} />
            </View>
            <View
              style={{ height: "50%", alignItems: "center", }}>
              <Paragraph style={{ color: "black", fontSize: 22 }}>Your Cart is empty</Paragraph>
              <Paragraph style={{ color: "black", fontSize: 15 }}>You have no items in your shopping cart.</Paragraph>
              <Paragraph style={{ color: "black", fontSize: 15 }}>Let's go buy something</Paragraph>
              <UiButton onPress={() => navigation.goBack()} style={{ backgroundColor: "#0AB252", marginTop: 20 }}
                text='SHOP NOW'
                txtSize={18}
              ></UiButton>
            </View>
          </>
        ) : (
          <FlatList
            contentContainerStyle={{}}
            data={productListData}
            renderItem={({ item, index }) => <CartItemCard item={item} key={index} />}
          />
        )
      }
    </ViewContainer>
  )
}

export default Cart

const styles = StyleSheet.create({

  falt: {
    borderRadius: 8,
    padding: 15,
    width: 65,
    // width:"100%",
    height: 65,
    borderWidth: 1,
    borderColor: "gray",
    // borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    width: "100%",
    // borderWidth:1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#0AB252", padding: 10
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