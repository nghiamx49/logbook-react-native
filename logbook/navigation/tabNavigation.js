import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DialogScreen from '../screens/Dialog'
import FormScreen from '../screens/Form'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Dialog" screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if(route.name === "Dialog") {
                    iconName = focused ? 'chatbox' : 'chatbox-outline'
                }
                else if(route.name === 'Form') {
                    iconName = focused ? "reorder-four" : "reorder-four-outline"
                }
                return <Ionicons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: "#9941ac",
            tabBarInactiveTintColor: "gray",
            headerShown: false
        })}>
            <Tab.Screen name="Dialog" component={DialogScreen} />
            <Tab.Screen name="Form" component={FormScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigation;