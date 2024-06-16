import React from 'react'
import CartPriceBreakdown from '../Components/Cart/CartPriceBreakdown'
import CartBoxDiv from '../Styled/Cart/CartBoxDiv'
import CartBox from '../Styled/CartBox'
import FlexDiv from '../Styled/FlexDiv'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartItem from "../Components/Cart/CartItem"
import {useSelector} from 'react-redux'
import ContactsIcon from '@mui/icons-material/Contacts';
import UserAddressBox from '../Components/Others/UserAddressBox'



const Checkout = () => {
    const cart = useSelector(state => state.cart.cart)

    return (
        <CartBox style={{marginTop:"96px", marginBottom:"24px"}}>
            {/* Left */}
            <CartBoxDiv style={{paddingLeft:"0px", marginTop:"12px"}}>
                {/* Price Details Div */}
                <FlexDiv align="center" gap="6px">
                    <img src="https://sugarcosmetics.com/desc-images/PriceDetails.svg" width="20px" height="20px"/>
                    <p style={{fontSize:"13px"}}><span style={{textDecoration: "underline"}}>Pric</span>e Details</p>
                </FlexDiv>
                <CartPriceBreakdown  style={{paddingLeft:"0px"}}/>
                <FlexDiv style={{padding:"0px"}} align="center"><ShoppingCartOutlinedIcon sx={{color:"#575555"}} /><p style={{color:"#6c757", paddingLeft:"0.5rem", paddingRight:"0.5rem", fontSize:"13px", fontWeight:"400"}}><span style={{textDecoration:"underline"}}>Orde</span>r Summary</p></FlexDiv>
                <FlexDiv style={{marginTop:'12px'}} direction="column" gap="15px">
                    {cart?.map(el => {
                        return <CartItem props = {el} />
                    } )}
                </FlexDiv>
            </CartBoxDiv>
            {/* Right */}
            <CartBoxDiv style={{marginTop:"12px"}}>
                <FlexDiv style={{padding:"0px"}} align="center"><ContactsIcon fontSize="small" sx={{color:"#575555"}} /><p style={{color:"#6c757", paddingLeft:"0.5rem", paddingRight:"0.5rem", fontSize:"13px", fontWeight:"400"}}><span style={{textDecoration:"underline"}}>Cont</span>act Information</p></FlexDiv>
                <UserAddressBox  />
            </CartBoxDiv>
        </CartBox>
    )
}

export default Checkout
