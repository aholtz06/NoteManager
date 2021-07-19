const initialState = {
    notes: {},
};

function noteReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_NOTE': {
            var title = action.title;
            var dict = {};
            dict[title] = action.content;
            return {
                ...state,
                notes: dict,
            };
        }
        default:
            return state;
    }
}

export default noteReducer;