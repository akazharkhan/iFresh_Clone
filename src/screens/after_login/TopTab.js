import { createMaterialTopTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'
import TopTab from './ProductList';
const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="TopTab0" component={TopTab} />
            <Tab.Screen name="TopTab1" component={TopTab} />
            <Tab.Screen name="TopTab2" component={TopTab} />
            <Tab.Screen name="TopTab3" component={TopTab} />
        </Tab.Navigator>
    )
}

export default TopTab
