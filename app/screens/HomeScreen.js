import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Tab from '../components/Tab';
import NoteScreen from './NoteScreen';
import colors from '../config/colors';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.notesWrapper}>

                <Tab title={"test"} navigation={navigation} link={"Note"}/>
                <Tab title={"test2"} navigation={navigation} link={"Note"}/>

            </View>

        </View>
    );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{headerStyle: {height: 90,}}}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Note" component={NoteScreen} />
        </HomeStack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    notesWrapper: {
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
});

export default HomeStackScreen;