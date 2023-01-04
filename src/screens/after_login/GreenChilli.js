import { StyleSheet, Text, View, TouchableOpacity, Image, ViewComponent, SectionList } from 'react-native'
import React, { useState } from 'react'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
import ViewContainer from '../../components/HOC/ViewContainer'
import Clickable from '../../components/HOC/Clickable'
import { SelectList } from 'react-native-dropdown-select-list'
import DropDownPicker from 'react-native-dropdown-picker'
   


const GreenChilli = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState(false)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const DataDrop=[
    {label: '500gms-                ₹20', value: '500gms -        ₹20'},
    {label: '1kg-                        ₹40', value:    '1kg             -₹40'}
  ]

  return (
    <ViewContainer style={{ height: "100%" }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.mainimg}>
            <Image style={styles.image} source={icons.leftarrow} />
          </TouchableOpacity>
          <View style={styles.mainpara}>
            <Paragraph style={styles.para}>Product List</Paragraph>
          </View>
          <View>
            <Image style={styles.image1} source={icons.cartimage}></Image>
          </View>
        </View>
      </View>

      <View style={styles.chilli}>
        <Image style={styles.chiliImage} source={icons.greenimage}></Image>
      </View>
      <View style={styles.mainShare}>
        <View style={styles.heart}>
          <Clickable onPress={() => setActiveCategory(!activeCategory)}>
            <Image  style={[styles.ssp, {
              tintColor:activeCategory ? "#0AB252":null}]} source={activeCategory ? icons.heart: icons.hearto}></Image>
          </Clickable>
          <Paragraph style={styles.text}>Save</Paragraph>
        </View>
        <View style={styles.share}>
          <Image style={styles.ssp} source={icons.share}></Image>
          <Paragraph style={styles.text}>Share</Paragraph>
        </View>
        <View style={styles.similar}>
          <Image style={styles.ssp} source={icons.similar}></Image>
          <Paragraph style={styles.text}>Similar Products</Paragraph>
        </View>

      </View>
      <View style={styles.tetx1}>
        <Paragraph>Green Chilli (हरी मिर्च)</Paragraph>
      </View>
      <View style={styles.price}>
        <View style={styles.price1}>
          <Paragraph style={{ fontSize: 20, fontWight: "bold" }}>Offer Price: ₹15</Paragraph>
        </View>
        <DropDownPicker
        style={{width:"60%",justifyContent:"space-evenly",borderColor:"#0AB252"}}
        dropDownContainerStyle={{width:"60%",color:"#0AB252",borderColor:"#0AB252"}}
          open={open}
          value={value}
          items={DataDrop}
          setOpen={setOpen}
          setValue={setValue}
          dropDownDirection={'DEFAULT'}
          // zIndex={1000}
          zIndexInverse={1000}
        />
      </View>
    </ViewContainer>
  )
}

export default GreenChilli

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // borderWidth:1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: "#0AB252",
    padding: 15,
    height: 45
  },
  mainimg1: {
    width: "10%",
  },
  mainimg: {
    width: "10%",
    // marginRight:15
  },
  mainpara: {
    width: "80%"
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
  chilli: {
    alignItems: "center",
    justifyContent: "center",
    height: 270,
    // borderWidth:1

  },
  chiliImage: {
    width: 350,
    height: 350,

  },
  ssp: {
    width: 20,
    height: 20,
    tintColor: "gray"
  },
  text: {
    fontSize: 15,
    color: "gray",

  },
  mainShare: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 1,
    width: "100%"
  },
  share: {
    width: "20%",
    alignItems: "center",
  },
  heart: {
    width: "20%",
    alignItems: "center",

  },
  similar: {
    width: "20%",
    alignItems: "center",

  },
  tetx1: {
    padding: 2,
    marginLeft: 10
  },
  price: {
    padding: 10,
    width:"100%",
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  price1:{
    width:"40%"
  }

})