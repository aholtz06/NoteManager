import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeStackScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import colors from './config/colors';

const Tab = createBottomTabNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
                } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
            activeTintColor: colors.primary,
            inactiveTintColor: colors.background,
            keyboardHidesTabBar: true,
            }}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{tabBarLabel:() => {return null},}} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{tabBarLabel:() => {return null},}} />
        </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;