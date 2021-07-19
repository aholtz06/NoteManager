export const addNote = (title, content) => ({
        type: 'ADD_NOTE',
        title: title,
        content: content,
});

export default addNote;