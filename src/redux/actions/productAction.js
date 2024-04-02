function getProducts(searchQuery) { // 미들웨어는 함수를 리턴한다.
    return async (dispatch, getState) => { // 2개의 매개변수 dispatch를 주고 getState를 통해 현재 정보를 받아온다.
        let url =`https://my-json-server.typicode.com/pca468/H-M-clone-react/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_PRODUCT_SUCCESS", payload: {data}})
    }

}

function getProductDetail(id) {
    return async(dispatch)=> {
        let url = `https://my-json-server.typicode.com/pca468/H-M-clone-react/products/${id}`
        let reponse = await fetch(url);
        let data = await reponse.json();
        dispatch({type:"GET_SINGLE_PRODUCT_SUCCESS", payload: {data}});
    }
}

export const productAction={getProducts, getProductDetail}