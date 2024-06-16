import { actionType } from "./actionType";

export const getProductRemoveRequest = () => ({
    type: actionType.STORE_PRODUCT_REMOVE_REQUEST,
    payload: {
        isLoading: true,
        isError: false
    }
})
export const getProductRemoveError = () => ({
    type: actionType.STORE_PRODUCT_REMOVE_ERROR,
    payload: {
        isLoading: false,
        isError: true
    }
})
export const getProductRemoveSuccess = () => ({
    type: actionType.STORE_PRODUCT_REMOVE_ERROR,
    payload: {
        isLoading: false,
        isError: false,


    }
})
export const getStoreDataRequest=()=>(
    {
        type:actionType.STORE_PRODUCT_GET_REQUEST,
    payload:{
        isLoading:true,
        isError:false
    }}
)
export const getStoreDataSuccess=(datas)=>(
    {
        type:actionType.STORE_PRODUCT_GET_SUCCESS,
    payload:{
        isLoading:false,
        isError:false,
        datas:datas
    }}
)
export const getStoreDataFailure=()=>(
    {
        type:actionType.STORE_PRODUCT_GET_ERROR,
    payload:{
        isLoading:false,
        isError:true,
        
    }}
)