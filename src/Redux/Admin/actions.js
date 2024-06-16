import axios from "axios"

export const actionConstants = {
    ADD_PRODUCT_REQUEST: "ADD_PRODUCT_REQUEST",
    ADD_PRODUCT_SUCCESS: "ADD_PRODUCT_SUCCESS",
    ADD_PRODUCT_FAILURE: "ADD_PRODUCT_FAILURE",
    GET_ORDERS_REQUEST: "GET_ORDERS_REQUEST",
    GET_ORDERS_SUCCESS: "GET_ORDERS_SUCCESS",
    GET_ORDERS_FAILURE: "GET_ORDERS_FAILURE",
    LOGIN_ADMIN_REQUEST: "LOGIN_ADMIN_REQUEST",
    LOGIN_ADMIN_SUCCESS: "LOGIN_ADMIN_SUCCESS",
    LOGIN_ADMIN_FAILURE: "LOGIN_ADMIN_FAILURE",
}

const addProductRequest = () => {
    return {
        type: actionConstants.ADD_PRODUCT_REQUEST
    }
}

const addProductSuccess = () => {
    return {
        type: actionConstants.ADD_PRODUCT_SUCCESS
    }
}

const addProductFailure = () => {
    return {
        type: actionConstants.ADD_PRODUCT_FAILURE
    }
}

export const addProduct = (product) => async (dispatch) => {
    dispatch(addProductRequest());

    await axios.post(`https://cw-sugarcosmetics-mock-server.herokuapp.com/products`, {
        ...product
    })
    .then(dispatch(addProductSuccess()))
    .catch( err => dispatch(addProductFailure()))
}

// action creators

const getOrdersRequest = () => {
    return {
        type: actionConstants.GET_ORDERS_REQUEST,
        payload: {
            isLoading: true
        }
    }
}

const getOrdersSuccess = (orders) => {
    return {
        type: actionConstants.GET_ORDERS_SUCCESS,
        payload: {
            isLoading: false,
            orders: orders
        }
    }
}

const getOrdersFailure = (err) => {
    return {
        type: actionConstants.GET_ORDERS_FAILURE,
        payload: {
            isLoading: false,
            isError: true
        }
    }
}

// Get Product Thunk
export const getOrders = () => async (dispatch) => {
    dispatch(getOrdersRequest());
    await axios("https://cw-sugarcosmetics-mock-server.herokuapp.com/orders")
    .then(res => dispatch(getOrdersSuccess(res.data)))
    .catch(err => dispatch(getOrdersFailure(err)))
}

const loginAdminRequest = () => {
    return {
        type: actionConstants.LOGIN_ADMIN_REQUEST
    }
}

const loginAdminSuccess = (token) => {
    return {
        type: actionConstants.LOGIN_ADMIN_SUCCESS,
        payload: token
    }
}

const loginAdminFailure = () => {
    return {
        type: actionConstants.LOGIN_ADMIN_FAILURE
    }
}

export const loginAdmin = (email, password) => async (dispatch) => {
    dispatch(loginAdminRequest());
    await axios.post(`https://reqres.in/api/login`, {
        email, 
        password
    })
    .then(res => dispatch(loginAdminSuccess(res.data.token)))
    .catch( err => dispatch(loginAdminFailure()))
}