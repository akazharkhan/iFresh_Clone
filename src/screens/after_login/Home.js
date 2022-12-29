import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import ViewContainer from '../../components/HOC/ViewContainer'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
import ScrollContainer from '../../components/HOC/ScrollContainer'
import Swiper from 'react-native-swiper'

const Home = () => {
    return (
        <ViewContainer>
            <View style={styles.menu}>
                <View style={styles.menu1}>
                    <Image style={styles.imgmenu} source={icons.menuimage}></Image>
                </View>
                <View style={styles.menu2}>
                    <Paragraph style={styles.para}>𝐢𝐅𝐫𝐞𝐬𝐡</Paragraph>
                </View>
                <View style={styles.menu3}>
                    <Image style={styles.imgcart}
                        source={icons.cartimage}></Image>
                </View>
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
                    <View style={styles.fruit}>
                        <View style={styles.fruit1}>
                            <Image style={styles.fruitimg} source={icons.fruitsimage}></Image>
                        </View>
                        <View style={styles.fruit2}>
                            <Text>FRUITS & VEGETABLES</Text>
                        </View>
                    </View>
                    <View style={styles.dry}>
                        <View style={styles.dry1}>
                            <Image style={styles.dryimg} source={icons.dryimage}></Image>
                        </View>
                        <View style={styles.fruit2}>
                            <Text> Dry FRUITS </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.Img}>
                    <Image style={styles.img} source={icons.swiper3}></Image>
                </View>
                <View style={styles.Img1}>
                    <Image style={styles.img1} source={icons.swiper2}></Image>
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.main}>
                        <View style={styles.feature}>
                            <View style={styles.feature1}><Paragraph style={styles.feature1}>Feature Product</Paragraph></View>
                            <View style={styles.all}><Paragraph style={styles.all1}>View All</Paragraph></View>
                        </View>
                        <View style={styles.redChilli}>
                            <View style={styles.green}>
                                <Image style={{ width: 80, height: 80, alignItems: "center" }} source={icons.greenimage}></Image>
                                <Paragraph style={{ marginTop: 10, }} >Green chilli</Paragraph>
                            </View>
                            <View style={{ height: 250, alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                <View style={{ elevation: 1, height: 125, width: 120, alignItems: "center", justifyContent: "center", borderColor: "white" }}>
                                    <Image style={{ width: 80, height: 80 }} source={icons.onionimage}></Image>
                                    <Paragraph style={{ marginTop: 10, }}>Green chilli</Paragraph>
                                </View>
                                <View style={{ elevation: 2, width: 120, alignItems: "center", justifyContent: "center", borderColor: "white" }}>
                                    <Image style={{ width: 80, height: 80 }} source={icons.potatoimage}></Image>
                                    <Paragraph style={{ marginTop: 10, }} >Green chilli</Paragraph>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>




            </ScrollView>

        </ViewContainer>
    )
}

export default Home

const styles = StyleSheet.create({
    redChilli: {
        height: 250,
        width: 280,
        // alignItems:"center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    green: {
        borderWidth: 1,
        borderColor: "white",
        height: 240,
        width: 120, elevation: 1, alignItems: "center", justifyContent: "center",marginLeft:15
    },

    menu: {
        width: "100%",
        padding: 20,
        height: 80,
        backgroundColor: "#17B455",
        flexDirection: "row",
        // width:200
    },
    menu1: {
        width: "20%",
    },
    menu2: {
        width: "70%",
    },
    menu3: {
        width: "10%"
    },

    imgmenu: {
        height: 40,
        backgroundColor: "#17B455",
        color: "#17B455",
        width: 40,
    }, para: {
        fontSize: 30,
        color: "white",
    },
    imgcart: {
        height: 40,
        backgroundColor: "#17B455",
        width: 40,
    },
    loc: {
        height: 50,
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
        height: 190,
    },
    swipeimage: {
        width: "100%",
        height: 150,
        resizeMode: "cover"
    },
    shop: {
        // alignItems:'center'
        width: "100%"
    },
    para1: {
        textAlign: "center",
    },
    fruitdry: {
        marginVertical: 20,
        width: "100%",
        height: 150,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    fruit: {
        alignItems: "center",
        justifyContent: "center",
        elevation: 1,
        width: "45%"
        , borderColor: "white",
        height: 150
    },
    fruitimg: {
        width: 90,
        height: 90,
    },
    dry: {
        alignItems: "center",
        elevation: 1,
        width: "45%",
        justifyContent: "center",
        borderColor: "white",
        height: 150

    },
    dryimg: {
        width: 90,
        height: 90,
    },
    fruit2: {
        fontSize: 10,
        marginTop: 10,
        fontFamily: "600"
    },
    Img: {
        // width: "100%",
        height: 150

    },
    img: {
        height: 150,
        resizeMode: "contain"
    },
    img1: {
        height: 150,
        resizeMode: "cover",
        width: 395,

    },
    Img1: {
        // width: "100%",
        height: 150
    },
    mainContainer: {
        // width: '100%',
        height: 400,
        width:350,
        alignItems: "center",
        borderColor: "white", marginBottom: 20,
        margin: 10,
        elevation: 1,
        borderWidth: 1
    },
    main: {
        // width: "90%",
        borderColor: "white",
        elevation: 2,
        marginTop: 20,
        // borderWidth: 1,
        // elevation:2,

    }, feature: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    feature1: {
        color: "green",
        fontSize: 18,


    },
    all: {
        // borderWidth:1,
        backgroundColor: "#17B455",
        padding: 8,
        borderRadius: 10,
    },
    all1: {
        color: "white"

    },



})