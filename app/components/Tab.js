import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

import colors from '../config/colors';

const Tab = (prop) => {
    return (
        <Pressable
            style={styles.tabButton}
            onPress={() => prop.navigation.navigate(prop.link)}>
                <Text style={styles.tabText}>{prop.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    tabButton: {
        backgroundColor: colors.white,
        padding: 25,
        borderRadius: 10,
        marginBottom: 10,
    },
    tabText: {
        fontSize: 20,
        flexWrap: 'wrap',
    },
});

export default Tab;