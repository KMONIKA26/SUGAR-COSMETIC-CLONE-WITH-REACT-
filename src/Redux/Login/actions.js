export const actionConstants = {
    LOGIN_USER_REQUEST: "LOGIN_USER_REQUEST",
    LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
    LOGIN_USER_FAILURE: "LOGIN_USER_FAILURE"
}

// action creators

const LoginSuccess = (id) => {
    return ({
        type:actionConstants.LOGIN_USER_SUCCESS,
        payload:{
            isAuth:true,
            id:id
        }
    })
}

export {LoginSuccess}