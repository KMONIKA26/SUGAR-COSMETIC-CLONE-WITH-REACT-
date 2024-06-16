import { actionConstants } from "./actions";

const initState = {
    isAuth: false,
    token: "",
    isLoading: false,
    isError: false,
    isSuccess: false,
    orders: []
}

const adminReducer = (state = initState, action) => {
    switch(action.type){
        case actionConstants.ADD_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionConstants.ADD_PRODUCT_SUCCESS:
            return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    isSuccess: true
            }
        case actionConstants.ADD_PRODUCT_FAILURE:
            return {
                    ...state,
                    isLoading: false,
                    isError: true,
                    
            }
        case actionConstants.GET_ORDERS_REQUEST:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case actionConstants.GET_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload.orders,
                isLoading: false
            }
        case actionConstants.GET_ORDERS_FAILURE:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                isError: true
            }
        case actionConstants.LOGIN_ADMIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionConstants.LOGIN_ADMIN_SUCCESS:
            console.log(action.payload)
            return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    isAuth: true,
                    token: action.payload
            }
        case actionConstants.LOGIN_ADMIN_FAILURE:
            return {
                    ...state,
                    isLoading: false,
                    isError: true                    
            }
        default:
            return state
    }
}

export default adminReducer