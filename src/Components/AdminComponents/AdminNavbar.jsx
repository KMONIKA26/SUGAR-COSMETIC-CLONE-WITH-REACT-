import Button from '@mui/material/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';

const AdminNavbar = () => {
    return (
        <Box sx={{display:"flex", justify:"space-evenly", gap:"20px", margin:"80px 10px"}}>
            <Button variant="contained"><Link to="/admin/orders" style={{color:"inherit", textDecoration:"none"}}>See Orders</Link></Button>
            <Button variant="contained"><Link to="/admin/create" style={{color:"inherit", textDecoration:"none"}}>Create</Link></Button>
            <Button variant="contained"><Link to="/admin/delete" style={{color:"inherit", textDecoration:"none"}}>Delete</Link></Button>            
        </Box>
    )
}

export default AdminNavbar
