
import { actionConstraint } from "./actionType";

function compareAsc(a,b)
{
    return Number(a?.price)-Number(b?.price)
}

function compareDesc(a,b)
{
    return Number(b?.price)-Number(a?.price)
}

const initialState={
    datas:[],
    isLoading:false,
    isError:false,
    isProductFound:false
}
export function appReducer(state=initialState,action)
{
    switch(action.type)
    {
        case actionConstraint.GET_DATA_REQUEST:{
            return {
                ...state,isLoading:true,isError:false
            }
        }
        case actionConstraint.GET_DATA_SUCCESS:{
            return {
                ...state,isLoading:false,isError:false,datas:action.payload.datas,isProductFound:action.payload.datas.length?false:true
            }
        }
        case actionConstraint.GET_DATA_FAILURE:{
            return {
                ...state,isLoading:false,isError:true
            }
        }
        case actionConstraint.SORT_PRICE_LOW:{
            return{
                ...state,datas:state.datas.sort(compareAsc)
            }
        }
        case actionConstraint.SORT_PRICE_HIGH:{
            return{
                ...state,datas:state.datas.sort(compareDesc)
            }
        }
    default:
        return state
    }
}