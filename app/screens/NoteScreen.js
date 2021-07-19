import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, FAB } from 'react-native-paper';
import { connect } from 'react-redux';

import addNote from '../redux/actions';
import colors from '../config/colors';

function NoteScreen(props) {
    const [noteTitle, setNoteTitle] = useState(Object.keys(props.notes)[0])
    const [noteContent, setNoteContent] = useState(props.notes[Object.keys(props.notes)[0]])

    return (
        <>
            <View style={styles.item}>
                <TextInput
                    label = "Note Title"
                    value = {noteTitle}
                    mode = 'focused'
                    onChangeText = {setNoteTitle}
                    style = {styles.title}
                    blurOnSubmit = {true}
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
                <FAB
                    style={styles.fab}
                    small
                    icon="check"
                    //disabled={noteTitle == '' ? true : false}
                    onPress={() => props.addNote(noteTitle,noteContent)}
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
        height: 250,
        marginBottom: 10,
    },
});

const mapStateToProps = (state) => {
    return {
        notes: state.noteReducer.notes,
    };
}

export default connect(mapStateToProps, {addNote})(NoteScreen);