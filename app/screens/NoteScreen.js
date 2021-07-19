import React, { useState } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-paper'
import colors from '../config/colors';

function NoteScreen({ navigation }) {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteContent, setNoteContent] = useState('')

    return (
        <>
            <View style={styles.item}>
                <TextInput
                    label = "Note Title"
                    value = {noteTitle}
                    mode = 'focused'
                    onChangeText = {setNoteTitle}
                    style = {styles.title}
                    blurOnSubmit={true}
                />
                <TextInput
                    label = "Note Content..."
                    value = {noteContent}
                    onChangeText = {setNoteContent}
                    mode = "flat"
                    multiline = {true}
                    scrollEnabled = {true}
                    style = {styles.text}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.background,
    },
    title: {
        height: 64,
        fontSize: 24,
        marginBottom: 10,
    },
    text: {
        height: 570,
        marginBottom: 10,
    },
});

export default NoteScreen;