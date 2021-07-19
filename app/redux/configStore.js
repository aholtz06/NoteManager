import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { createLogger } from 'redux-logger'
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './reducers/reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(createLogger()))
    let persistor = persistStore(store)
    return { store, persistor }
}