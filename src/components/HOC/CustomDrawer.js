import { StyleSheet, Text, View, Image,Share,Alert} from 'react-native'
import React from 'react'
import ViewContainer from './ViewContainer'
import icons from '../../constants/icons'
import Paragraph from '../UI/Paragraph'
import Clickable from './Clickable'
import ScrollContainer from './ScrollContainer'

const CustomDrawer = ({navigation}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'hey this is my project.It is based on fruits and vegetables. "https://play.google.com/store/apps/details?id=com.ifresh.customer&hl=en_IN&gl=US',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
 

  return (
    <ViewContainer>
      <ScrollContainer>
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.ifreshlogo} source={icons.ifreshlogo}></Image>
            <Paragraph style={styles.parafresh}>𝐢𝐅𝐫𝐞𝐬𝐡</Paragraph>
            <Clickable>
              <Paragraph style={styles.para2}>Login?</Paragraph>
            </Clickable>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <Clickable onPress={()=>navigation.toggleDrawer("Home")} style={styles.home}>
            <Image style={styles.homeImage} source={icons.home1}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>Home</Paragraph>
            </View>
          </Clickable>
          <Clickable onPress={()=>navigation.navigate("Cart")} style={styles.home}>
            <Image style={styles.homeImage} source={icons.cartimage}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>Cart</Paragraph>
            </View>
          </Clickable>
          <View style={styles.home}>
            <Image style={styles.homeImage} source={icons.notification}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>Notification</Paragraph>
            </View>
          </View>
          <View style={styles.home}>
            <Image style={styles.homeImage} source={icons.wallet}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>Wallet Balance</Paragraph>
            </View>
          </View>
          
        </View>

        <View style={styles.iconContainer}>
          <View style={styles.home}>
            <Image style={styles.homeImage} source={icons.track}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>Track Order</Paragraph>
            </View>
          </View>
          <Clickable onPress={onShare}  style={styles.home}>
            <Image  style={styles.homeImage} source={icons.referfriend}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>Refer Friend</Paragraph>
            </View>
          </Clickable>
          <Clickable  onPress={()=>navigation.navigate("ReferEarn")} style={styles.home}>
            <Image style={styles.homeImage} source={icons.refer}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>Refer & Earn</Paragraph>
            </View>
          </Clickable>
          <View style={styles.home}>
            <Image style={styles.homeImage} source={icons.code}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>Coupon Code</Paragraph>
            </View>
          </View>
          
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.home}>
            <Image style={styles.homeImage} source={icons.contact}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>Contact Us</Paragraph>
            </View>
          </View>
          <View style={styles.home}>
            <Image style={styles.homeImage} source={icons.about}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>About Us</Paragraph>
            </View>
          </View>
          <View style={styles.home}>
            <Image style={styles.homeImage} source={icons.rate}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>Rate Us</Paragraph>
            </View>
          </View>
          <Clickable onPress={onShare} style={styles.home}>
            <Image style={styles.homeImage} source={icons.share}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>Share App</Paragraph>
            </View>
          </Clickable>
          
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.home}>
            <Image style={styles.homeImage} source={icons.faq}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>FAQ</Paragraph>
            </View>
          </View>
          <View style={styles.home}>
            <Image style={styles.homeImage} source={icons.terms}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>Terms & Conditions</Paragraph>
            </View>
          </View>
          <View style={styles.home}>
            <Image style={styles.homeImage} source={icons.privacy}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>Privacy Policy</Paragraph>
            </View>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.home}>
            <Image style={styles.homeImage} source={icons.list}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>Address List</Paragraph>
            </View>
          </View>
          <View style={styles.home}>
            <Image style={styles.homeImage} source={icons.logout}></Image>
            <View style={styles.para}>
            <Paragraph style={styles.homepara}>LogOut</Paragraph>
            </View>
          </View>
          
        </View>
        <View>

        </View>
      </ScrollContainer>
    </ViewContainer>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  mainContainer: {
    // borderWidth: 1,
    height: 180,
    backgroundColor: "#17B455",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  ifreshlogo: {
    width: 100,
    tintColor: "white",
    height: 100,
  },
  parafresh: {
    color: "white",
    fontSize: 40,
    marginTop: -25
  },
  para2: {
    color: "white",
    fontSize: 22,
  },
  home: {
    flexDirection:"row",
    padding: 15,
    // borderWidth:1,
    alignItems:"center",
  },
  homeImage:{
    width:20,
    height:20,
    tintColor:"gray"
  },
  homepara:{
    fontSize:15,
    alignItems:"center",
    textAlign:"center",
    color:"gray"
  },
  para:{
    marginLeft:30,
    alignItems:"center",
    justifyContent:"center"
  },
  iconContainer:{
    borderBottomWidth:1,
    borderBottomColor:"gray"
  }


})