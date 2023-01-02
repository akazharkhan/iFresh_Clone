import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ViewContainer from '../../components/HOC/ViewContainer'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
import ScrollContainer from '../../components/HOC/ScrollContainer'
import Swiper from 'react-native-swiper'
import Clickable from '../../components/HOC/Clickable'

const Home = ({navigation}) => {
    return (
        <ViewContainer>
            <View style={styles.menu}>
                <TouchableOpacity onPress={()=>navigation.toggleDrawer()} style={styles.menu1}>
                    <Image style={styles.imgmenu} source={icons.menuimage}></Image>
                </TouchableOpacity>
                <View style={styles.menu2}>
                    <Paragraph style={styles.para}>𝐢𝐅𝐫𝐞𝐬𝐡</Paragraph>
                </View>
                <Clickable onPress={()=>navigation.navigate("Cart")} style={styles.menu3}>
                    <Image style={styles.imgcart}
                        source={icons.cartimage}></Image>
                </Clickable>
            </View>

            <ScrollView>

                <View style={styles.loc}>
                    <View style={styles.loc1}>
                        <Image style={styles.imgloc} source={icons.location}></Image>
                    </View>
                    <View style={styles.loc2}>
                        <Paragraph>Deliver To : Basni / Jodhpur</Paragraph>
                    </View>
                </View>
                <Swiper style={styles.swiper}
                    autoplayTimeout={2}
                    autoplay={true}>
                    <Image style={styles.swipeimage} source={icons.swiper1}></Image>
                    <Image style={styles.swipeimage} source={icons.swiper2}></Image>
                    <Image style={styles.swipeimage} source={icons.swiper3}></Image>
                    <Image style={styles.swipeimage} source={icons.swiper4}></Image>

                </Swiper>
                <View style={styles.shop}>
                    <Paragraph style={styles.para1}>Shop by Category</Paragraph>
                </View>
                <View style={styles.fruitdry}>
                    <TouchableOpacity style={styles.fruit} onPress={()=>navigation.navigate("ProductList")}>
                        {/* <View style={styles.fruit1}> */}
                            <Image style={styles.fruitimg} source={icons.fruitsimage}></Image>
                        {/* </View> */}
                        <View style={styles.fruit2}>
                            <Text style={{textAlign:'center'}}>FRUITS & VEGETABLES</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dry}  onPress={()=>navigation.navigate("DryList")}>
                        {/* <View style={styles.dry1}> */}
                            <Image style={styles.dryimg} source={icons.dryimage}></Image>
                        {/* </View> */}
                        <View style={styles.fruit2}>
                            <Text style={{textAlign:'center'}}> DRY FRUITS </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.Img}>
                    <Image style={styles.img} source={icons.swiper3}></Image>
                </View>
                <View>
                    <View style={styles.Img1}>
                        <Image style={styles.img1} source={icons.swiper1}></Image>
                    </View>
                </View>

                <View style={styles.mainContainer}>
                    <View style={styles.main}>
                        <View style={styles.feature}>
                            <View style={styles.feature1}><Paragraph style={styles.featuretext}>Feature Product</Paragraph></View>
                            <View style={styles.all}><Paragraph style={styles.all1}>View All</Paragraph></View>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <View style={styles.chilli}>
                            <Image style={styles.chiliimg} source={icons.greenimage}></Image>
                            <Paragraph style={styles.chilitext}>Green chilli</Paragraph>
                        </View>
                        <View style={styles.otherproduct}>
                            <View style={styles.onion}>
                                <Image style={styles.onionimg} source={icons.onionimage}></Image>
                                <Paragraph style={styles.oniontext}>An Onion</Paragraph>
                            </View>
                            <View style={styles.onion}>
                                <Image style={styles.onionimg} source={icons.potatoimage}></Image>
                                <Paragraph style={styles.potatotext}>A Potato</Paragraph>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{height:30,}}></View>




            </ScrollView>

        </ViewContainer>
    )
}

export default Home

const styles = StyleSheet.create({
    chilli: {
        // borderWidth: 1,
        width: "50%",
        height:250,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        elevation: 1,

    }
    ,
    chiliimg: {
        width: 100,
        height: 100,
    },
    onionimg:{
        width:60,
        height:60,
    },
    otherproduct:{
        flexDirection:"column",
        width:"50%",
        alignItems:"center",
        justifyContent:"space-between"
    },
    onion:{
        borderColor:"white",
        borderWidth:1,
        width:"90%",
        height:121,
        alignItems:"center",
        justifyContent:"space-around",
        margin:3,
        elevation:1
    },
    menu: {
        width: "100%",
        padding: 8,
        height: 40,
        backgroundColor: "#0AB252",
        flexDirection: "row",
        // width:200
    },
    menu1: {
        width: "20%",
    },
    menu2: {
        width: "65%",
    },
    menu3: {
        width: "15%"
    },

    imgmenu: {
        height: 30,
        backgroundColor: "#17B455",
        color: "#17B455",
        width: 30,
        tintColor:"white"
    }, para: {
        fontSize: 22,
        color: "white",
    },
    imgcart: {
        height: 30,
        backgroundColor: "#17B455",
        width: 30,
        tintColor:"white"
    },
    loc: {
        height: 40,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "gray",
        alignItems: "center"
    },
    loc1: {
        width: "10%",
        padding: 5
    },
    loc2: {
        width: "80%",
    },
    imgloc: {
        height: 20,
        width: 20
    },
    swiper: {
        height: 100,
    },
    swipeimage: {
        width: "100%",
        height:'100%',
        resizeMode: "cover"
    },
    shop: {
        // alignItems:'center'
        // width: "100%"
        marginVertical:8
    },
    para1: {
        textAlign: "center",
    },
    fruitdry: {
        marginVertical: 5,
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
        marginTop: 5,
        fontFamily: "600"
    },
    Img: {
        width: "100%",
        // width:700,
        // height: 150
        marginBottom: 3,

    },
    img: {
        // height:180,
        resizeMode: "cover",

        width: "100%",

    },
    img1: {
        // height: 150,
        resizeMode: "cover",
        width: "100%",
        height: 120,
        borderWidth: 1,

    },
    Img1: {
        // marginBottom: 10,

        // width: "100%",
        // height: 150
    },
    mainContainer: {
        // width: '100%',
        height: 350,
        // width:350,
        alignItems: "center",
        borderColor: "white", marginBottom: 20,
        margin: 10,
        elevation: 1,
        borderWidth: 1
    },
    main: {
        width: "100%",

        // borderWidth:1,
        // borderColor: "white",
        // elevation: 2,
        // marginTop: 10,
        // marginBottom:10,
        // borderWidth: 1,
        padding:10,
        // elevation:2,

    }, feature: {
        // padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    feature1:{
        alignItems:"center"
    },
    featuretext: {
        color: "green",
        // marginTop:7,
        fontSize: 18,
        textAlign:"center",
        alignItems:"center"



    },
    all: {
        // borderWidth:1,
        backgroundColor: "#17B455",
        padding: 5,
        borderRadius: 10,
    },
    all1: {
        color: "white"

    },
    product: {
        width: "95%",
        // height:300,
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection: "row",
        // borderWidth:1,
        // borderWidth:1,
        // margin
    }



})