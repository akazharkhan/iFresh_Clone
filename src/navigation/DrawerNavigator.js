import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/HOC/CustomDrawer';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='TabNavigator' component={TabNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator