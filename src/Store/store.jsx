
import { createStore,combineReducers } from 'redux'
import {cltReducer } from '../Reducers/cltReducer'
import {prodReducer } from '../Reducers/prodReducer'

const reducer = combineReducers({
    prod: prodReducer,
     clt :cltReducer
    
})
export const store =createStore(reducer)
//console.log(store.getState())