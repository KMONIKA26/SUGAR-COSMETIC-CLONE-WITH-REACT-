import { actionConstants } from "./actions";
import { checkIfProductInCart } from "../../Utils/utilFunctions"

const initState = {
    cart: [],
    cartQuantity: 0,
    cartTotal: 0,
    discount: 0,
    discountCodes: {
        "NEWYEAR30": 30,
        "NEWUSER": 50
    },
    isLoading: false,
    isError: false
}

const cartReducer = (state = initState, action) => {
    switch(action.type){
        case actionConstants.ADD_TO_CART:
            if(checkIfProductInCart(action.payload.id, state.cart)){
                return {
                    ...state,
                    cart: state.cart.map( el => el.id === action.payload.id ? {...el, quantity: el.quantity + 1} : el),
                    cartQuantity: state.cartQuantity + 1,
                    cartTotal: state.cartTotal + Number(action.payload.price)
                }
            }
            return {
                ...state,
                cart: [...state.cart, action.payload],
                cartQuantity: state.cartQuantity + 1,
                cartTotal: state.cartTotal + Number(action.payload.price)
            }
        case actionConstants.REMOVE_FROM_CART:            
            return {
                ...state,
                cart: state.cart.map( el => el.id === action.payload.id ? {...el, quantity: el.quantity - 1} : el),
                cartQuantity: state.cartQuantity - 1,
                cartTotal: state.cartTotal - Number(action.payload.price)
            }
        case actionConstants.DELETE_PRODUCT:
            console.log(action.payload)
            return {
                ...state,
                cart: state.cart.filter( function(el) {
                    console.log(el.id, action.payload.id, el.id !== action.payload.id)
                    return el.id !== action.payload.id
                  }),
                cartQuantity: state.cartQuantity - 1,
                cartTotal: state.cartTotal - Number(action.payload.price)
            }
        case actionConstants.APPLY_DISCOUNT:
            return {
                ...state,
                discount: action.payload
            }
        case actionConstants.PLACE_ORDER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionConstants.PLACE_ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cart: [],
                cartTotal: 0,
                cartQuantity: 0,
                discount: 0
            }
        case actionConstants.PLACE_ORDER_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}

export default cartReducer