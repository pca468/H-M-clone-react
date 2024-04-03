import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState ={
    ProductList: [],
    selectedItem: null,
    isLoading: false,
    error:null,

}

export const fetchProducts = createAsyncThunk(
    'product/fetchAll', 
    async(searchQuery, thunkApi) => {
        try{
            let url =`https://my-json-server.typicode.com/pca468/H-M-clone-react/products?q=${searchQuery}`
            let response = await fetch(url);
            return await response.json(); // let data = 할 필요가 없다.
        } catch(error){
            thunkApi.rejectWithValue(error.message)
        }
    }
);

// function productReducer(state= initialState, action){
//     let {type, payload} = action
//     switch(type){
//         case "GET_PRODUCT_SUCCESS" :
//             return {...state, ProductList: payload.data};
        
//         case "GET_SINGLE_PRODUCT_SUCCESS":
//             return {...state, selectedItem: payload.data}
//         default:
//             return{...state};
//     }

// }

// export default productReducer;

const productSlice = createSlice({ // createSlice는 객체를 매개변수로 만든다.
    name : "product" ,
    initialState,
    reducers: { // 동기적으로 자신의 state를 바꾸는 경우

        getSingleProduct(state, action){
            state.selectedItem = action.payload.data;
        },
    },
    extraReducers: (builder) => { // 그 외에 외부로 부터 state가 바뀌는 경우
                                 // 비동기 케이스 주로 처리
        builder.addCase(fetchProducts.pending,(state) =>{
            state.isLoading=true
        })
        .addCase(fetchProducts.fulfilled,(state, action) => {
            state.isLoading=false
            state.ProductList = action.payload
        })
        .addCase(fetchProducts.rejected,(state, action) => {
            state.isLoading=false
            state.error = action.payload

        })
    }
   

});

console.log("ppp", productSlice)

export const productActions = productSlice.actions
export default productSlice.reducer