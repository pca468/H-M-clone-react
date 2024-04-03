import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    id: '',
    password: '',
    authenticate:false

}

// function authenticateReducer(state = initialState, action) {
//     let{type, payload} = action

//     switch(type){
//         case "LOGIN_SUCCES" :
//             console.log("login success reducer")
//             return{
//                 ...state,
//                 id:payload.id, 
//                 password:payload.password, 
//                 authenticate: true,
//             };
//         default :
//             return {
//                 ...state
//             };
//     }
    
// }

// export default authenticateReducer

const authenticateSlice = createSlice({
    name:'',
    initialState,
    reducers:{
        
        loginSuccess(state, action) {
            state.id = action.payload.id,
            state.password = action.payload.password,
            state.authenticate = true
        }
    }
});


export default authenticateSlice.reducer