import { combineReducers } from "redux";
import authenticateSlice from "./authenticateSlice";
import productReducer from "./productReducer"

export default combineReducers({
    auth : authenticateSlice,
    product: productReducer
})