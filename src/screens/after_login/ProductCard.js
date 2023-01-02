import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ViewContainer from '../../components/HOC/ViewContainer'
import Paragraph from '../../components/UI/Paragraph'
import icons from '../../constants/icons'
import { SelectList } from 'react-native-dropdown-select-list'

const ProductCard = ({ item }) => {
    const [selected, setSelected] = useState("");
    const [wish, setWish] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const onDecrementQuantity = () => {
        return quantity > 0 ? setQuantity(quantity => quantity - 1) : null
    }
    const onIncrementQuantity = () => {
        return setQuantity(quantity => quantity + 1);
    }

    return (
        <View key={item?.id}>
            <View style={[styles.container]}>
                <View style={styles.first}>
                    <View style={styles.best}>
                        <Paragraph size={14} style={styles.para} color='#0AB252'>Best Quality</Paragraph>
                    </View>
                    <View style={styles.image2}>
                        <Image style={styles.imagecarrot} source={item?.image}></Image>
                    </View>
                </View>
                <View style={styles.second}>
                    <View style={styles.carrot}>
                        <Paragraph style={{ fontWeight: 'bold' }} size={15}>{item?.text}</Paragraph>
                        <TouchableOpacity onPress={() => setWish(!wish)}>
                            <Image style={[styles.img1, { tintColor: wish ? 'green' : null }]} source={wish ? icons.heart : icons.hearto} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.grams}>
                        <View style={styles.gram}>
                            <Paragraph size={14}>{item?.text1}</Paragraph>
                            <Paragraph size={15}>{item?.text2}</Paragraph>
                        </View>
                        <View style={styles.plus}>
                            <TouchableOpacity onPress={onDecrementQuantity}>
                                <Image style={styles.img} source={icons.minus} />
                            </TouchableOpacity>
                            <Paragraph>{quantity}</Paragraph>
                            <TouchableOpacity onPress={onIncrementQuantity}>
                                <Image style={styles.img} source={icons.plus} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.var}>
                        <SelectList
                            searchPlaceholder="More Variants"
                            placeholder='More Variants'
                            search={false}
                            // maxHeight={100}
                            boxStyles={{ paddingTop: 1, paddingBottom: 1, width: "100%", borderColor: "#0AB252", backgroundColor: "white" }}
                            inputStyles={{ width: '100%', fontSize: 13, color: "#0AB252" }}
                            dropdownStyles={{ backgroundColor: "white", borderColor: "#0AB252", width: "100%" }}
                            dropdownTextStyles={{ color: "black", fontSize: 10 }}
                            setSelected={(val) => setSelected(val)}
                            data={item?.more_variants ? item?.more_variants : []}
                            save="value"
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 125,
        padding: 8,
        borderColor: "white",
        elevation: 1,
        zIndex: -11,
        // marginBottom:10
        marginTop: 15
    },
    first: {
        flexDirection: 'column',
        width: "40%",
    },
    variants: {
        borderWidth: 1,
        width: "80%",
        borderColor: "#0AB252",
    },
    var: {
        width: '100%',
        zIndex: -9
    },
    best: {
        alignItems: "flex-end",
        marginBottom: 10,
    },
    image2: {
        alignItems: "center",
        justifyContent: "center"
    },
    second: {
        width: "60%",
        padding: 3
    },
    imagecarrot: {
        width: 110,
        height: 80,
    },
    img: {
        width: 25,
        height: 25,
        borderRadius: 50
    },
    img1: {
        width: 25,
        height: 25,
    },
    carrot: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    grams: {
        flexDirection: 'row',
        padding: 7
    },
    plus: {
        width: "40%",
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: "space-between"
    },
    gram: {
        width: "60%",
    },
    container1: {
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
    paraBest: {
        color: "white"
    },
    image1: {
        width: 20,
        height: 20,
        tintColor: "white",
    },
})