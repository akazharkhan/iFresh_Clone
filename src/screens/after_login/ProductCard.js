import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ViewContainer from '../../components/HOC/ViewContainer'
import Paragraph from '../../components/UI/Paragraph'
import icons from '../../constants/icons'
import { SelectList } from 'react-native-dropdown-select-list'
import { ProductListData } from './DATA'
import DropDownPicker from 'react-native-dropdown-picker'
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductCard = ({ item }) => {
    console.warn("itemxadsfa", item);
    const [selected, setSelected] = useState("");
    const [wish, setWish] = useState(false);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const DataDrop = [
        { label: '500gms-                ₹20', value: '500gms -        ₹20' },
        { label: '1kg-                        ₹40', value: '1kg             -₹40' }
    ]
    const [quantity, setQuantity] = useState(0);


    const addIncrementToCart = async (productId) => {
        let CartProducts = await AsyncStorage.getItem('cart');                // store m se cart ke product nikaalne ke liye
        if (CartProducts) { // agr cart m proucts pehle se h to hum jo product ab add krwana chahte h wo mojood h to uski quantity increment krenge, nhi to jo products h unke saath new wala push krdenge
            let parsedCartProducts = JSON.parse(CartProducts);
            let AlreadyExist = parsedCartProducts.find(element => element.id == productId);
            if (AlreadyExist) {
                let objIndex = parsedCartProducts.findIndex((obj => obj.id == productId));
                parsedCartProducts[objIndex].Cartquantity = parsedCartProducts[objIndex].Cartquantity + 1;
                console.warn("qqqq", parsedCartProducts[objIndex].Cartquantity);
                setQuantity(parsedCartProducts[objIndex].Cartquantity)
                await AsyncStorage.setItem('cart', JSON.stringify(parsedCartProducts), () => {
                    console.warn("Quantity Incremented...");
                });
            } else {
                let clickedProduct = ProductListData.find(element => element.id == productId)
                clickedProduct.Cartquantity = 1
                setQuantity(clickedProduct.Cartquantity)
                parsedCartProducts.push(clickedProduct)
                await AsyncStorage.setItem('cart', JSON.stringify(parsedCartProducts), () => {
                    console.warn("Another Product Added to Cart...");
                });
            }

        } else { // agr cart m ek bhi product nhi h to ye krenge
            let clickedProduct = ProductListData.find(element => element.id == productId)
            clickedProduct.Cartquantity = 1
            setQuantity(clickedProduct.Cartquantity)
            let productArray = [];
            productArray.push(clickedProduct);
            console.warn(productArray);
            await AsyncStorage.setItem('cart', JSON.stringify(productArray), () => {
                console.warn("First Product Added to Cart...");
            });

        }
    }

    const removeDecrementFromCart = async (productId) => {
        let CartProducts = await AsyncStorage.getItem('cart');
        if (CartProducts) {
            let parsedCartProducts = JSON.parse(CartProducts);
            let productExist = parsedCartProducts.find(element => element.id == productId);
            console.warn("productExist", productExist);
            if (productExist) {
                let objIndex = parsedCartProducts.findIndex((obj => obj.id == productId));
                if (parsedCartProducts[objIndex].Cartquantity > 1) {
                    parsedCartProducts[objIndex].Cartquantity = parsedCartProducts[objIndex].Cartquantity - 1;

                    await AsyncStorage.setItem('cart', JSON.stringify(parsedCartProducts), () => {
                        setQuantity(parsedCartProducts[objIndex].Cartquantity)
                        console.warn("Quantity Decremented...");
                    });
                } else {
                    if (objIndex > -1) { // only splice array when item is found
                        parsedCartProducts.splice(objIndex, 1); // 2nd parameter means remove one item only
                    }
                    // console.warn("removedparsedCartProducts",parsedCartProducts);
                    await AsyncStorage.setItem('cart', JSON.stringify(parsedCartProducts), () => {
                        console.warn("Product Removed...");
                    });
                }
            }
        }


    }

    const addToFavourites = async (productId) => {
        let favouriteProducts = await AsyncStorage.getItem("favourites");
        if (favouriteProducts) {
            let parsedFavProducts = JSON.parse(favouriteProducts);
            let exist = parsedFavProducts.find(ele => ele.id == productId)
            if (!exist) {
                let clickedProduct = ProductListData.find(ele => ele.id == productId);
                clickedProduct.favourites = true;
                setWish(!wish);
                parsedFavProducts.push(clickedProduct);
                await AsyncStorage.setItem('favourites', JSON.stringify(parsedFavProducts), () => {
                    console.warn(" Added to Favourites...");
                });
            }
        } else {
            let clickedProduct = ProductListData.find(ele => ele.id == productId);
            clickedProduct.favourites = true;
            setWish(!wish);
            let favArray = [];
            favArray.push(clickedProduct);
            await AsyncStorage.setItem('favourites', JSON.stringify(favArray), () => {
                console.warn("First Prdouct Added to Favourites...");
            });
        }
    }

    const removeFromFavourites = async (productId) => {
        let favouriteProducts = await AsyncStorage.getItem("favourites");
        if (favouriteProducts) {
            let parsedFavProducts = JSON.parse(favouriteProducts);
            let exist = parsedFavProducts.find(ele => ele.id == productId)
            if (exist){
                let objIndex = parsedFavProducts.findIndex((obj => obj.id == productId));
                setWish(!wish);
                if (objIndex > -1) { // only splice array when item is found
                    parsedFavProducts.splice(objIndex, 1); // 2nd parameter means remove one item only
                }
                await AsyncStorage.setItem('favourites', JSON.stringify(parsedFavProducts), () => {
                    console.warn("Product Removed from Favourites...");
                });
            }else{
                console.warn("Product Not Present in Favourites...");
            }
        } else {
            console.warn("Product Not Present in Favourites....");

        }
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
                        <TouchableOpacity onPress={() => wish ? removeFromFavourites(item?.id) : addToFavourites(item?.id)}>
                            <Image style={[styles.img1, { tintColor: wish ? 'green' : null }]} source={wish ? icons.heart : icons.hearto} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.grams}>
                        <View style={styles.gram}>
                            <Paragraph size={14}>{item?.text1}</Paragraph>
                            <Paragraph size={15}>{item?.text2}</Paragraph>
                        </View>
                        <View style={styles.plus}>
                            <TouchableOpacity
                                onPress={() => removeDecrementFromCart(item?.id)}
                            >
                                <Image style={styles.img} source={icons.minus} />
                            </TouchableOpacity>
                            <Paragraph>
                                {quantity}
                            </Paragraph>
                            <TouchableOpacity onPress={() => addIncrementToCart(item?.id)}>
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
                        {/* <DropDownPicker
                            style={{ width: "60%", justifyContent: "space-evenly", borderColor: "#0AB252" }}
                            dropDownContainerStyle={{ width: "60%", color: "#0AB252", borderColor: "#0AB252" }}
                            open={open}
                            value={value}
                            items={DataDrop}
                            setOpen={setOpen}
                            setValue={setValue}
                            dropDownDirection={'DEFAULT'}
                            // zIndex={1000}
                            // zIndexInverse={1000}
                            zIndex={10000}
                        /> */}
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