import React from 'react'
import CartBox from '../Styled/CartBox';
import CartHeading from '../Styled/Cart/CartHeadings'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import CartItem from "../Components/Cart/CartItem"
import styles from "../CSS/Cart.module.css"
import CartBoxDiv from '../Styled/Cart/CartBoxDiv';
import FlexDiv from '../Styled/FlexDiv';
import PaymentsIcon from '@mui/icons-material/Payments';
import CartPriceBreakdownWithPaddingLeft from '../Components/Cart/CartPriceBreakdownWithPaddingLeft';
import GiftCard from '../Components/Cart/GiftCard';
import { Link } from 'react-router-dom';

const Cart = () => {

    const cart = useSelector(state => state.cart.cart)

    const cartTotal = useSelector(state => state.cart.cartTotal)

    return (
        <CartBox style={{padding: "5px 10px", marginTop:"96px", marginBottom:"24px"}}>
            {/* Left */}
            <CartBoxDiv  style={{marginTop:"12px"}}>
                <FlexDiv align="center" justify="space-between">
                    <FlexDiv justify="center" align="center"><ShoppingCartOutlinedIcon sx={{color:"#575555"}} /><CartHeading>Order Summary</CartHeading></FlexDiv>
                    <CartHeading><span style={{textDecoration:"underline"}}>Cart Total: Rs {cartTotal.toFixed(2)}</span></CartHeading>
                </FlexDiv>
                <FlexDiv style={{marginTop:"12px"}} direction="column" gap="15px">
                    {cart?.map(el => {
                        return <CartItem props = {el} />
                    } )}
                </FlexDiv>
            </CartBoxDiv>

            {/* Right */}
            <CartBoxDiv style={{marginTop:"12px"}}> 
                    <FlexDiv align="center" gap="6px">
                        <PaymentsIcon style={{color:"#575555", fontSize:"18px"}} />
                        <CartHeading>Offers and Price Details</CartHeading>
                    </FlexDiv>

                    <FlexDiv className={styles.offerAndPriceBox} direction="column" style={{marginTop:"12px"}} gap="4px">
                        {/* Gift Card Div */}
                        <GiftCard />

                        {/* Price Details Div */}
                        <FlexDiv align="center" gap="6px">
                            <img src="https://sugarcosmetics.com/desc-images/PriceDetails.svg" width="20px" height="20px"/>
                            <p style={{fontSize:"13px"}}><span style={{textDecoration: "underline"}}>Price</span> Details</p>
                        </FlexDiv>

                        {/* Price Breakdown */}
                        <CartPriceBreakdownWithPaddingLeft />

                        <FlexDiv style={{marginTop:"22px"}}>
                            <Link to="/"><button className={styles.continueShopping}> {"<"} <span style={{textDecoration:"underline", paddingLeft:"0.25rem", paddingRight:"0.25rem"}}>Continue Shopping</span></button></Link>
                            <button className={styles.deliveryInfo}><Link style={{textDecoration:"none", color:"inherit"}} to="/checkout">Delivery Information</Link></button>
                        </FlexDiv>
                    </FlexDiv>

            </CartBoxDiv>
        </CartBox>
    )
}

export default Cart
