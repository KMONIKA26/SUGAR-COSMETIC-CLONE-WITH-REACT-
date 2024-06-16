import { actionConstants } from "./actions";

const initState = {
    products: [],
    isLoading: false,
    error: {
        isError: false,
        message: null
    }    
}

const productReducer = (state = initState, action) => {
    switch(action.type){
        case actionConstants.GET_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case actionConstants.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                isLoading: action.payload.isLoading
            }
        case actionConstants.GET_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                error: {
                    ...state.error,
                    isError: action.payload.isError,
                    message: action.payload.message                    
                }
            }
        default:
            return state
    }
}

export default productReducer