import React from 'react'
import { CardStyleInterpolators, createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../constants/colors';
const commonOptions = {
    headerTitle: '',
    headerStyle: {
        backgroundColor: colors.white,
    },
    headerShadowVisible: false,
    // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false
};

const StackNavigator = () => {
    const { Navigator, Screen } = createNativeStackNavigator()
    return (
        <Navigator
            screenOptions={{
                // your stack style
            }}
            initialRouteName="Home"
        >
             <Screen name='Home'
            // use getComponent instead of component for better speed 
            getComponent={() => require('../screens/after_login/Home').default}
            options={{
                ...commonOptions
            }}
  
        />
           
        </Navigator>
    )
}

export default StackNavigator