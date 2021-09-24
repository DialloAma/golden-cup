
import { createStore,combineReducers, compose, applyMiddleware } from 'redux'
import {cltReducer } from '../Reducers/cltReducer'
import {prodReducer } from '../Reducers/prodReducer'
import firebase from '../firebase/config'
import {getfirebase,reduxReactFirebase} from 'react-redux-firebase'
import {getFirestore,reduxFirestore} from 'redux-firestore'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    prod: prodReducer,
     clt :cltReducer
})
export const store =createStore(reducer, compose(applyMiddleware(thunk.withExtraArgument({getfirebase,getFirestore})),
reduxReactFirebase(firebase),
    reduxFirestore(firebase)));
