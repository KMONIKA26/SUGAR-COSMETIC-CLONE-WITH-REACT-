import { getProductRemoveError, getProductRemoveRequest, getProductRemoveSuccess, getStoreDataFailure, getStoreDataRequest, getStoreDataSuccess } from "./action"

export const handleDeleteStoreProduct=(id)=>(dispatch)=>{
    dispatch(getProductRemoveRequest())
    const config = {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      };
      return fetch(`https://cw-sugarcosmetics-mock-server.herokuapp.com/products/${id}`,config).then(res=>res.json()).then(res=>{
          dispatch(getProductRemoveSuccess())
          console.log(id,'delted')
          dispatch(getProductList())
      }).catch(err=>dispatch(getProductRemoveError()))
    
}
export const getProductList=(query=null)=>(dispatch)=>{
    dispatch(getStoreDataRequest())

    let urls="https://cw-sugarcosmetics-mock-server.herokuapp.com/products"
    if(query)
    {
      
        urls+='?'+query
    }
    return fetch(urls).then(res => res.json()).then((res) => {
       dispatch(getStoreDataSuccess(res))
      }
      ).catch(err => dispatch(getStoreDataFailure()))
}