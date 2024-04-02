let initialState ={
    ProductList: [],
    selected: null,

}

function productReducer(state= initialState, action){
    let {type, payload} = action
    switch(type){
        case "GET_PRODUCT_SUCCESS" :
            return {...state, ProductList: payload.data};
        
        case "GET_SINGLE_PRODUCT_SUCCESS":
            return {...state, selectedItem: payload.data}
        default:
            return{...state};
    }

}

export default productReducer;