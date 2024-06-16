import { actionType } from "./actionType";

const initialState={
    isLoading:false,
    isError:false,
    datas:[]
}

export function deleteStoreReducer(state=initialState,action){
switch(action.type){
    case actionType.STORE_PRODUCT_REMOVE_REQUEST:{
        return {
            ...state,isLoading:true,isError:false
        }
    }
    case actionType.STORE_PRODUCT_REMOVE_ERROR:{
        return {
            ...state,isLoading:false,isError:true
        }
    }
    case actionType.STORE_PRODUCT_REMOVE_SUCCESS:{
        return {
            ...state,isLoading:false,isError:false
        }
    }
    case actionType.STORE_PRODUCT_GET_REQUEST:{
        return {
            ...state,isLoading:true,isError:false
        }
    }
    case actionType.STORE_PRODUCT_GET_SUCCESS:{
        return {
            ...state,isLoading:false,isError:false,datas:action.payload.datas
        }
    }
    case actionType.STORE_PRODUCT_GET_ERROR:{
        return {
            ...state,isLoading:false,isError:true
        }
    }
    default :{
        return state
    }
}
}