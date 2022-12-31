import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack'
import colors from '../constants/colors';

const commonOptions = {
    headerTitle: '',
    headerStyle: {
        backgroundColor: colors.white,
    },
    headerShadowVisible: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false
};

const StackNavigator = () => {
    const { Navigator, Screen } = createNativeStackNavigator()
    return (
        <Navigator
            screenOptions={{
                // your stack style
            }}
            initialRouteName="DrawerNavigator"
        >
            <Screen name='DrawerNavigator'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../navigation/DrawerNavigator').default}
                options={{
                    ...commonOptions
                }}

            />
            <Screen name='Home'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/after_login/Home').default}
                options={{
                    ...commonOptions
                }}

            />
            <Screen name='Cart'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/after_login/Cart').default}
                options={{
                    ...commonOptions
                }}

            />
            <Screen name='Favourites'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/after_login/Favourites').default}
                options={{
                    ...commonOptions
                }}

            />
            <Screen name='Category'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/after_login/Category').default}
                options={{
                    ...commonOptions
                }}

            />
            <Screen name='ProductList'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/after_login/ProductList').default}
                options={{
                    ...commonOptions
                }}

            />
             <Screen name='ReferEarn'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/after_login/ReferEarn').default}
                options={{
                    ...commonOptions
                }}

            />
        </Navigator>
    )
}

export default StackNavigator