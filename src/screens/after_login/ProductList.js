import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import ViewContainer from '../../components/HOC/ViewContainer'
import Clickable from '../../components/HOC/Clickable'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
import { ProductCategories, ProductListData } from './DATA'
import ProductCard from './ProductCard'


const ProductList = ({ navigation }) => {
  const [productListData, setProductListData] = useState(ProductListData);
  const [activeCategory, setActiveCategory] = useState('All Category');

  const changeProductListData = (title) => {
    setActiveCategory(title)
    if (title == 'All Category') {
      setProductListData(ProductListData)
    } else if (title == 'Vegetables') {
      let filtered_products = ProductListData.filter((data) => {
        return data.category == title
      })
      setProductListData(filtered_products);
    } else if (title == 'Fruits') {
      let filtered_products = ProductListData.filter((data) => {
        return data.category == title
      })
      setProductListData(filtered_products);
    } else if (title == 'Exotic') {
      let filtered_products = ProductListData.filter((data) => {
        return data.category == title
      })
      setProductListData(filtered_products);
    }
  }

  const FlatItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => changeProductListData(item.title)}>
      <View style={[styles.falt, { borderColor: item.title == activeCategory ? '#0AB252' : 'gray', borderWidth: item.title == activeCategory ? 2 : 1 }]}
      >
        <Image style={{ width: 35, height: 35, tintColor: '#0AB252' }} source={item?.image_path} />
      </View>
      <Paragraph style={{ marginTop: 4 }} textAlign='center' size={13}>{item?.title}</Paragraph>
    </TouchableOpacity>
  );

  return (
    <ViewContainer>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.mainimg}>
            <Image style={styles.image} source={icons.leftarrow} />
          </TouchableOpacity>
          <View style={styles.mainpara}>
            <Paragraph style={styles.para}>Product List</Paragraph>
          </View>
        </View>
        <Clickable onPress={()=>navigation.navigate("Cart")} style={styles.mainimg1}>
          <Image style={styles.image1} source={icons.cart1} />
        </Clickable>
      </View>
      {/* <Paragraph>FY</Paragraph> */}
      <FlatList
        contentContainerStyle={{ alignItems: "center", width: '100%', justifyContent: "space-between", margin: 0, padding: 15 }}
        horizontal
        data={ProductCategories}
        showsHorizontalScrollIndicator={false}
        renderItem={FlatItem}
      />
      {
        productListData.length < 1 ? (<View>
          <Text>No Products Found</Text>
        </View>) : (
          <FlatList
            contentContainerStyle={{}}
            data={productListData}
            renderItem={({ item, index }) => <ProductCard item={item} key={index} />}
          />
        )
      }


    </ViewContainer>
  )
}

export default ProductList

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
    justifyContent: 'space-between',
    backgroundColor: "#0AB252",
    padding: 15
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
    width: 25,
    height: 25,
    tintColor: "white",
  },
})