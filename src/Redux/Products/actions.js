import axios from 'axios'

export const actionConstants = {
    GET_PRODUCT_REQUEST: "GET_PRODUCT_REQUEST",
    GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCESS",
    GET_PRODUCT_FAILURE: "GET_PRODUCT_FAILURE"
}

// action creators

const getProductRequest = () => {
    return {
        type: actionConstants.GET_PRODUCT_REQUEST,
        payload: {
            isLoading: true
        }
    }
}

const getProductSuccess = (products) => {
    return {
        type: actionConstants.GET_PRODUCT_SUCCESS,
        payload: {
            isLoading: false,
            products: products
        }
    }
}

const getProductFailure = (err) => {
    return {
        type: actionConstants.GET_PRODUCT_ERROR,
        payload: {
            isLoading: false,
            isError: true,
            message: err
        }
    }
}

// Get Product Thunk
export const getProduct = () => async (dispatch) => {
    dispatch(getProductRequest());
    await axios("https://cw-sugarcosmetics-mock-server.herokuapp.com/products")
    .then(res => dispatch(getProductSuccess(res.data)))
    .catch(err => dispatch(getProductFailure(err)))
}
