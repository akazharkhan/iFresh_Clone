import React, { useState,useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet } from 'react-native';
import icons from '../constants/icons';
import Home from '../screens/after_login/Home';
import Favourites from '../screens/after_login/Favourites';
import Category from '../screens/after_login/Category';
import Cart from '../screens/after_login/Cart';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const { Navigator, Screen } = Tab;

    const [totalProductsInCart,setTotalProductsInCart] = useState(0);
    useEffect(()=>{
        getAndSetQuantity();
    },[])

    const getAndSetQuantity = async()=>{
          let cartProducts =await  AsyncStorage.getItem('cart');
          if(cartProducts){
            let parsedCartProducts = JSON.parse(cartProducts)
            setTotalProductsInCart(parsedCartProducts.length);
          }
    }
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarLabelStyle: { color: "black" },
                tabBarItemStyle: { padding: 10 },
                tabBarInactiveTintColor: 'red',
                tabBarInactiveBackgroundColor: '#0AB252',
                tabBarActiveBackgroundColor: 'white',

                tabBarActiveTintColor: 'blue',
                // tabBarO
                tabBarStyle: { height: 60, borderColor: 'red' }
                // tabBarAccessibilityLabel:"red"

            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            backgroundColor: focused == true ? '05fa05' : '',
                            borderRadius: focused == true ? 100 : 0,
                        }}>
                            <Image style={styles.CARTIMAGE} source={icons.home} />
                        </View>

                    ),
                }}
            />

            <Screen
                name="Category"
                component={Category}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Category',
                    // tabBarLabelStyle:{color:"black"},
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // backgroundColor: focused == true ? 'green' : '',
                            //   height:50,width:50,
                            borderRadius: focused == true ? 20 : 0,
                            //   marginTop:focused == true? -29:0
                        }}>
                            <Image style={styles.CARTIMAGE} source={icons.category} />
                        </View>

                    ),
                }}
            />
            <Screen
                name="Favourite"
                component={Favourites}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Favourites',
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            backgroundColor: focused == true ? '05fa05' : '',
                            //   height:50,width:50,
                            borderRadius: focused == true ? 100 : 0,
                            //   marginTop:focused == true? -29:0
                        }}>
                            {<Image style={styles.CARTIMAGE} source={icons.favourites} />}
                        </View>

                    ),
                }}
            />
            <Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false,
                    tabBarBadge: totalProductsInCart,
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // backgroundColor: focused == true ? 'green' : '',
                            //   height:50,width:50,
                            borderRadius: focused == true ? 200 : 0,
                            //   marginTop:focused == true? -19:0
                        }}>
                            <Image style={styles.CARTIMAGE} source={icons.cart1} />
                        </View>

                    ),
                }}
            />



        </Navigator>
    );
}
export default TabNavigator;
const styles = StyleSheet.create({
    CARTIMAGE: {
        width: 20,
        height: 20,
        tintColor: 'black',
    },
})