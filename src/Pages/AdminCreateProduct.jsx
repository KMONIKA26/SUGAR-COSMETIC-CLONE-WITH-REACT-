import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CreateProductForm from "../Components/Others/CreateProductForm"
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AdminNavbar from '../Components/AdminComponents/AdminNavbar';


const AdminCreateProduct = () => {
    const isSuccess = useSelector(state => state.admin.isSuccess);
    
    const isAuth = useSelector(state => state.admin.isAuth);

    if(!isAuth){
        return <Redirect to="/admin/orders" />
    }

    return (
        
        <Container maxWidth="xl" style={{marginTop:"96px"}}>
            <AdminNavbar />
            <Box  sx={{padding:"1rem" }}>
                {isSuccess && <h4 style={{color:"green"}}>Product Added!</h4>}
                <Typography variant="h3">Create Product</Typography>
                <CreateProductForm />
            </Box>
      </Container>
    )
}

export default AdminCreateProduct
