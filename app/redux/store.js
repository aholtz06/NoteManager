import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import noteReducer from './reducers/reducers';

const rootReducer = combineReducers({ noteReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));