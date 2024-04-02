import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

let store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))) // reducer가 여러개면 합치는 작업을 해야함
// combineReducers() 함수를 활용하자

export default store