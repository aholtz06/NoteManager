import { combineReducers } from 'redux';

import noteReducer from './noteReducer';

const rootReducer = combineReducers({
    noteReducer: noteReducer
});

export default rootReducer;