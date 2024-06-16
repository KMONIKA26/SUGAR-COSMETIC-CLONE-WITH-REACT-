import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { loginAdmin } from '../../Redux/Admin/actions';
import Input from '@mui/material/Input';
import { useDispatch } from 'react-redux';

const AdminLoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(loginAdmin(email, password))
    }
    return (
        <Box>
            <Stack spacing={2}>
                <Box sx={{width:"600px"}}>
                    <TextField value={email} onChange={(e) => setEmail(e.target.value) } label="Email" name="email" type="email" variant="outlined" sx={{border:"1px solid #f5f5f5"}} />
                </Box>
                <Box>
                    <TextField value={password} onChange={(e) => setPassword(e.target.value) } label="Password" name="password" type="password" variant="outlined" />
                </Box>
                <Box sx={{width:"100%"}}>
                    <Button onClick = {handleLogin} variant="contained" sx={{width:"220px"}}>LOGIN</Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default AdminLoginForm
