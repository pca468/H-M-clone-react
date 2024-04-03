import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

import productReducer from "./reducers/productSlice";

import {configureStore} from "@reduxjs/toolkit"
import authenticateSlice from "./reducers/authenticateSlice";

// let store = createStore(
//     rootReducer, 
//     composeWithDevTools(applyMiddleware(thunk))) 
    // reducer가 여러개면 합치는 작업을 해야함
// combineReducers() 함수를 활용하자

//createStore 를 사용하기 위해서
//combinereducer
//thunk
// applyMiddleware
// composeWithDevTools 를 세팅해줘야 했음

// configureStore는 위의 4가지가 모두 포함 되어 있음

const store = configureStore({
    reducer:{
        auth : authenticateSlice,
        product: productReducer
    }
})

export default store;