import {combineReducers, createStore, applyMiddleware} from '@reduxjs/toolkit'
import { ProductReducer } from './reducers/ProductReducer'

const {default: thunk} = require('redux-thunk')

const reducer = combineReducers({
    product: ProductReducer,
    
})

const initialState = {

}

const middleware = [thunk]

const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;