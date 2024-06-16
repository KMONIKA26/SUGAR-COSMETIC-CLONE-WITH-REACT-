import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OrderList from '../Components/Others/OrderList';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminNavbar from '../Components/AdminComponents/AdminNavbar';

const AdminShowOrders = () => {
    const isAuth = useSelector(state => state.admin.isAuth);

    if(!isAuth){
        return <Redirect to="/admin/orders" />
    }
    return (
        <Container maxWidth="xl" style={{marginTop:"96px"}}>
            <AdminNavbar />
            <Box  sx={{padding:"1rem" }}>
                <Typography variant="h3">Orders</Typography>
                <OrderList />
            </Box>
      </Container>
    )
}

export default AdminShowOrders
