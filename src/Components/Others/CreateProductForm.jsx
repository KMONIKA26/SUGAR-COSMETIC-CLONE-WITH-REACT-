import React, { useState, useRef } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from "../../CSS/Admin.module.css";
import Input from '@mui/material/Input';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../Redux/Admin/actions';

const CreateProductForm = () => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        category: "",
    })

    const [imageURL, setImageURL] = useState([])

    const handleForm = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    let inputRef = useRef(null)

    const handleImageUpload = () => {
        let arr = [];
        for(let i = 0; i<inputRef.current.files.length; i++){
            arr.push(URL.createObjectURL(inputRef.current.files[i]))
        }        
        setImageURL(arr)
    }

    const dispatch = useDispatch()

    const isSuccess = useSelector(state => state.admin.isSuccess)

    console.log(isSuccess)

    return (
        <Box>
            <Stack spacing={2}>
                <Box sx={{width:"600px"}}>
                    <TextField name="name" value={form.name} onChange={(e) => handleForm(e)} label="Name" variant="outlined" sx={{border:"1px solid #f5f5f5"}} />
                </Box>
                <Box>
                <TextField label="Price" value={form.price} onChange={(e) => handleForm(e)} name="price" variant="outlined" />
                </Box>

                <Box>
                    <TextField name="category" value={form.category} onChange={(e) => handleForm(e)} label="Category" variant="outlined" />
                </Box>
                <Box sx={{display:"flex", flexDirection:"column"}}>
                    <input multiple onChange={handleImageUpload} ref={inputRef} name="upload" type="file" style={{outline:"none", border:"none", boxSizing:"border-box"}} />
                    {imageURL && imageURL?.map(el => <img src={el} width={"30%"}/>)}
                </Box>
                
                <Box sx={{width:"100%"}}>
                    <Button onClick = {() => {
                        dispatch(addProduct({
                        ...form,
                        image: imageURL,
                        ratingValue: 0,
                        reviewCount: 0
                    }))

                    
                    setForm({
                        name: "",
                        price: "",
                        category: ""
                    })

                    setImageURL([])
                    
                    }} variant="contained" sx={{width:"220px"}}>Add Product</Button>
                </Box>
                
                
            </Stack>
        </Box>
    )
}

export default CreateProductForm
