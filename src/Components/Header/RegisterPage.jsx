import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Redirect} from "react-router-dom"
// import TextField from "@mui/material/TextField";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import Link from "@mui/material/Link";
import FacebookIcon from '@mui/icons-material/Facebook';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import axios from "axios";
import {v4 as uuid} from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { LoginSuccess } from "../../Redux/Login/actions";



const RegisterPage = () =>{
    const isAuth = useSelector(state=>state.login.isAuth);
    const dispatch = useDispatch();

    const [registeration, setRegisteration] = useState("incomplete");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    
    const PostUserDetails = (payload) =>{
        return axios.post(`https://cw-sugarcosmetics-mock-server.herokuapp.com/users`, payload)
    }
    
    const handleRegister = async () =>{
        if(fName=== "" || lName=== "" || email === ""){
            alert("Please Fill All Details");
            return;
        }
        const payload = {
            id:uuid(),
            firstName:fName,
            lastName:lName,
            email:email
        }
        await PostUserDetails(payload);
        updateStoreLogin(payload.id);
        setRegisteration("complete")
    }
    const updateStoreLogin = (id) =>{
        const loginAction = LoginSuccess(id);
        dispatch(loginAction);
    }
    if(registeration === "complete"){
        window.location.assign("http://localhost:3000/")
    }
    return (
        <Box
          sx={{
            fontFamily:"sans-serif",
            float:"right",
            width:"630px",
            height:"710px",
            padding: "20px",
            backgroundImage: `url("https://in.sugarcosmetics.com/Login_bg.svg")`,
          }}
        >
            <p style={{color:"#ffffff", cursor:"pointer"}}>X</p>
            <h2 style={{marginTop:"20px", color:"#ffffff"}}>Login/Signup</h2>
            {/* inputs box */}
            <Box sx={{color:"#000000",
                    padding:"10px",
                    margin:"10px 200px 0px 0px",
                    backgroundColor:"#ffffff",
                    boxShadow:"0px 3px 2px gray",
                    width:"96%",
                    display:"flex", 
                    flexDirection:"column"}}>
                <Box sx={{display:"flex", 
                        flexDirection:"row",
                        gap:"5%", 
                        fontSize:"25px",
                        padding:"10px",
                        }}>
                    <SmartphoneIcon sx={{width:"30px", height:"30px"}} />
                    Welcome!
                </Box>
                
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    padding:"10px"
                }}>
                    <p>Phone Number Verified - +91 8446968624.</p>
                    <Link>(Try another number)</Link>
                </Box>

                <Box sx={{
                    padding:"10px",
                    display:"flex",
                    flexDirection:"row",
                    gap:"3%"
                }}>
                    <FacebookIcon sx={{width:"45px", height:"60px"}} />
                    <p style={{margin:"20px 0px"}}>or</p>
                    <img style={{
                        width:"140px", height:"40px", margin:"10px 0px"
                    }} src="https://in.sugarcosmetics.com/desc-images/google.png" alt="google" />
                </Box>

                <hr/>

                
                <Box  sx={{
                            display:"flex", 
                            flexDirection:"column",
                            justifyContent:"left",
                            padding:"5px 10px",
                            gap:"20px"
                            }}>
                    <p style={{}}>Or Enter Account Details</p>


                            {/* input feilds First Name, Last Name, Email Address*/}
                    <Box sx={{
                            display:"flex",
                            flexDirection:"column",
                            gap:"15px",
                            width:"75%"
                            }}>
                        
                        <Box sx={{
                            display:"flex",
                            flexDirection:"row",
                            gap:"3%"
                        }}>
                            <TextField value={fName} onChange={(e) => (setFName(e.target.value))} id="standard-basic" sx={{ backgroundColor:"#F1F1F1" }}  placeholder="First Name" />
                            <TextField value={lName} onChange={(e) => (setLName(e.target.value))} id="standard-basic" sx={{ backgroundColor:"#F1F1F1" }}  placeholder="Last Name" />
                        </Box>
                        <TextField value={email} onChange={(e) => (setEmail(e.target.value))} id="standard-basic" sx={{ backgroundColor:"#F1F1F1" }}  placeholder="Email Address" />
                                
                    </Box>

                    <Box>
                        <Button 
                        onClick={handleRegister}
                        sx={{
                            backgroundColor:"#FC2779",
                            fontFamily: "IBM Plex Sans, sans-serif",
                            fontSize:"15px",
                            color:"#ffffff",
                            
                            borderRadius:"0px",
                            width:"75%",
                            height:"41px",
                            "&:hover":{
                                color:"#ffffff",
                                backgroundColor:"#FDAAC9",
                            }
                            }}>
                        Save and Continue
                        </Button>
                    </Box>
                </Box>

            </Box>

{/* -------------------------------------------------------------------------------------------------------------------------------- */}

            <Box sx={{display:"flex", flexDirection:"column"}}>
                <Box sx={{
                        fontWeight:"600",
                        padding:"10px",
                        margin:"15px 0px",
                        textAlign:"center",
                        fontSize:"15px"
                        }}>
                            Registering for this site allows you to access your order status and history. Just fill in the
                            fields below, and we'll get a new account set up for you in no time. We will only ask you
                            for information necessary to make the purchase process faster and easier.
                </Box>
                <Box sx={{
                        margin:"5px 10px",
                        display:"flex", 
                        flexDirection:"row",
                        gap:"2.5%",
                        justifyContent:"center",
                        padding:"10px 0px",
                        fontSize:"12px"
                        }}>
                        <Box><p style={{
                                display:"inline-block",
                                margin:"3px 0px",
                                }}>By Signing up or logging in, you agree to our
                        </p></Box>
                        <Box sx={{
                                margin:"4px 0px",
                                cursor:"pointer"
                                }}>
                                
                                <Link sx={{color:"#000000DE", "&:hover":{color:"blue"}}}>Terms and Conditions</Link>
                        </Box>
                </Box>
            </Box>
          </Box>
    )
}

export default RegisterPage