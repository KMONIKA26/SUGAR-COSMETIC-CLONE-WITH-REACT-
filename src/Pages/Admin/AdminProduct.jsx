import { Grid, Paper } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { ItemContainer } from "../../Components/Others/carouselWrapper"
// import { FilterSort } from "../../Components/Others/filter-sort-component"
import { getProductList, handleDeleteStoreProduct } from "../../Redux/Admin/DeleteProduct/DeleteApi"
import AdminNavbar from "../../Components/AdminComponents/AdminNavbar"


const CreateCard=({id,itemName,image,price,routes,onDelete})=>
{
  const history=useHistory()
 const handleViewProduct=(routes)=>{
    
return <></>
 }
 
  return (<ItemContainer width="90%" imageWidth="70%" imagePading="15px 30%" imageHeight="280px" left="15px" margin="0px" >
              
                <Paper className="box-item" sx={{cursor:"pointer",height:"400px"}}>
                 <div onClick={()=>handleViewProduct(routes)}>
                  <div>
                    <img src={image} />

                  </div>
                  <div>
                      <div className="product-name"><strong>Product id: </strong>{id}</div>
                    <div className="product-name" >{itemName}</div>
                    <div className='price'>₹ {price}</div>
                    
                  </div>
                  </div>
                  <div className='cartProduct'>
                     
                  <div className="chooseProduct" style={{width:"100%"}} onClick={()=>onDelete(id)}>
                        Delete Product  
                      </div>
                    </div>
                    
                </Paper>
                </ItemContainer>)
}

export default function AdminProduct(){
    
    const {isLoading, isError, datas}=useSelector(state=>state.deleteApi)
    const dispatch=useDispatch()    
    const handleDelete=(id)=>{
        let y=window.confirm("Do you You realy want to delete?")
        if(y){
            dispatch(handleDeleteStoreProduct(id))
        }
    }
useEffect(()=>{
dispatch(getProductList())
   },[])
    return <div className="Home" style={{backgroundColor:"#f5", marginTop:"48px"}}>
      <AdminNavbar />
        {isLoading && <h3>isLoading</h3>}
      
         <Grid container spacing={1} sx={{width:"85%", margin:"auto", padding:"1rem 0"}}>
           

    
    {datas.map((item, i) =><Grid sx={{margin:"1rem 0"}} item lg={3}><CreateCard key={item.id} id={item.id} itemName={item.name} price={item.price} image={item.image[0]} routes={item.route} onDelete={handleDelete}/></Grid>)}

</Grid>
    </div>
}