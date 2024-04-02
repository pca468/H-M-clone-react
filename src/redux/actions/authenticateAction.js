function login (id, password) {
    return (dispatch, getState) => {
        console.log("login success reducer")
        dispatch({type: "LOGIN_SUCCES", payload: {id,password}})
    };
}

export const authenticateAction = { login };