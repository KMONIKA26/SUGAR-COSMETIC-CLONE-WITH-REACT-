import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link, useHistory } from "react-router-dom"
import PersonIcon from '@mui/icons-material/Person';
import Tooltip from '@mui/material/Tooltip';
import TemporaryDrawer from './myDrawer';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';



const SearchBar = () =>{
    const [inp, setInp] = useState("");
    const ref = useRef();
    const cartCount = useSelector(state=>state.cart.cartQuantity);
    const isAuth = useSelector(state=>state.login.isAuth);
    const token = useSelector(state=>state.login.token);
    const [nameFetched, setNameFetched] = useState("");

    const fetchingUserName = () =>{
        return axios.get(`https://cw-sugarcosmetics-mock-server.herokuapp.com/users/${token}`)
    }
    const getUserName = async () => {
        let res = await fetchingUserName();
        const name = res.data.firstName;
        ref.current = name;
    }

    const history = useHistory()

    const handleSearch = async () =>{
        history.push("/search/"+inp);
        setInp("");
    }


    useEffect(async ()=>{
        await getUserName();
        setNameFetched(ref.current);
    },[isAuth,ref,ref.current])
    

    return (
        <Box 
        sx={{background:"#F8F9FA", 
            zIndex:"20000",
            position:"fixed",
            display:"flex",
            zIndex:"200",
            height:"45px",
            gap:"7%", 
            width:"98.5%",
            color:"#6C757D",
            padding:"20px 15px 18px 15px",
            }}>
            <Link to="/" sx={{cursor:"pointer"}}>
                <img src="https://in.sugarcosmetics.com/desc-images/logo-new-year.gif" 
                    style={{marginTop:"5px", 
                            width:"120px", 
                            height:"35px",
                            marginLeft:"50px"}} 
                />
            </Link>
            <Box sx={{width:"50%", display:"flex", flexDirection:"row", padding:"2px"}}>
                <input placeholder='Try "Liquid Lipstick"' 
                    value={inp}
                    onChange={e=>setInp(e.target.value)}
                    style={{width:"92%", 
                            border:"0px solid white", 
                            padding:"8px 12px 8px 22px",
                            height:"25px", 
                            borderWidth:"0px", 
                            background:"#ffffff", 
                            borderRadius:"35px 0px 0px 35px"}} />
                <button onClick={handleSearch}
                style={{background:"#000000", 
                                color:"#FFFFFF",
                                cursor:"pointer",
                                borderWidth:"0px",
                                fontSize:"15x",
                                height:"42px",
                                padding:"8px 0px",
                                borderRadius:"0px 35px 35px 0px",
                                width:"20%"}}>
                Search</button>
            </Box>

            <Box sx={{display:"flex", flexDirection:"row", gap:"2px", padding:"10px 0px 0px 0px"}}>
                <PersonIcon />
                {isAuth === true ? (<p>{nameFetched}</p>) : (<TemporaryDrawer />)}
            </Box>
                
            <Box 
                sx={{display:"flex", 
                    flexDirection:"row", 
                    gap:"10px", 
                    padding:"16px 0px 0px 0px",
                    }}>
                    <Tooltip sx={{width:"10px"}} title="Wishlist" placement='top-start'>
                        <FavoriteIcon sx={{cursor:"pointer", width:"20px", height:"20px",}} />
                    </Tooltip>
                    <Tooltip title="Cart" placement='top-start'>
                        <Link to="/cart" >
                        <Box sx={{textDecoration:"none"}}>
                            {(cartCount === 0) ? (<p></p>) : (<p style={{fontSize:"14px", float:"right", position:"relative",right:"2px", bottom:"8px"}}>{cartCount}</p>)}
                            <LocalMallIcon sx={{cursor:"pointer", width:"20px",color:"#808080", height:"20px",textDecoration:"none"}} />
                        </Box>
                        </Link>
                        
                    </Tooltip>
                    <img src='https://static.thenounproject.com/png/170070-200.png' 
                        style={{
                            width:"20px", 
                            height:"20px", 
                            cursor:"pointer"}} 
                    />
            </Box>
            
        </Box>
    )
}

export {SearchBar}