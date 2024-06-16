import { getDataFailure, getDataRequest, getDataSuccess } from "./action"

export const fetchData=(query=null)=>(dispatch)=>{
    dispatch(getDataRequest())

    let urls="https://cw-sugarcosmetics-mock-server.herokuapp.com/products"
    if(query)
    {
      
        urls+='?'+query
    }
    return fetch(urls).then(res => res.json()).then((res) => {
       dispatch(getDataSuccess(res))
      }
      ).catch(err => dispatch(getDataFailure()))
}