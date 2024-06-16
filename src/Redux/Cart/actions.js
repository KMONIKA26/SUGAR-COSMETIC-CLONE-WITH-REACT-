import axios from "axios"
import { getOrders } from "../Admin/actions"


export const actionConstants = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    DELETE_PRODUCT: "DELETE_PRODUCT",
    APPLY_DISCOUNT: "APPLY_DISCOUNT",
    PLACE_ORDER_REQUEST: "PLACE_ORDER_REQUEST",
    PLACE_ORDER_SUCCESS: "PLACE_ORDER_SUCCESS",
    PLACE_ORDER_FAILURE: "PLACE_ORDER_FAILURE"
    
}

// action creators

export const addToCart = (product) => {    
    return {
        type: actionConstants.ADD_TO_CART,
        payload: {...product, quantity: 1}
    }
}

export const removeFromCart = (id, price) => {    
    return {
        type: actionConstants.REMOVE_FROM_CART,
        payload: {
            id,
            price
        }
    }
}

export const deleteProduct = (id, price) => {
    return {
        type: actionConstants.DELETE_PRODUCT,
        payload: {
            id, price
        }
    }
}

export const applyDiscount = (discount) => {
    return {
        type: actionConstants.APPLY_DISCOUNT,
        payload: discount
    }
}

// place order

const placeOrderRequest = () => {
    return {
        type: actionConstants.PLACE_ORDER_REQUEST
    }
}

const placeOrderSuccess = () => {
    return {
        type: actionConstants.PLACE_ORDER_SUCCESS
    }
}

const placeOrderFailure = () => {
    return {
        type: actionConstants.PLACE_ORDER_FAILURE
    }
}

export const placeOrder = (totalItems, cartTotal, cart) => async (dispatch) => {
    dispatch(placeOrderRequest())
    await axios.post("http://cw-sugarcosmetics-mock-server.herokuapp.com/orders", {
        totalItems,
        cartTotal, 
        cart,
        method: "cod"
    })
    .then(res => {
        dispatch(placeOrderSuccess());
        dispatch(getOrders());
    })
    .catch(err => dispatch(placeOrderFailure()));

    alert("Order Placed")
}

