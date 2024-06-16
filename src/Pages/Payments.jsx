import React from 'react'
import CartBoxDiv from '../Styled/Cart/CartBoxDiv'
import CartBox from '../Styled/CartBox'
import FlexDiv from '../Styled/FlexDiv'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartItemWithoutButtons from "../Components/Cart/CartItemWithoutButtons"
import CartPriceBreakdown from '../Components/Cart/CartPriceBreakdown'
import PaymentMethodOption from '../Components/Others/PaymentMethodOption'
import { useSelector } from 'react-redux';
import styles from "../CSS/Cart.module.css"
import { placeOrder } from '../Redux/Cart/actions';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';


const paymentMethods = [
    {
        img: "https://sugarcosmetics.com/paymentIcons/upi.svg",
        text: "Instant Pay Using Other UPIs(Gpay, PhonePe, BHIM etc.)"
    },
    {
        img: "https://sugarcosmetics.com/paymentIcons/wallets.svg",
        text: "Mobile Wallets (PhonePe, Freecharge etc.)"
    },
    {
        img: "https://sugarcosmetics.com/paymentIcons/creditDebit.svg",
        text: "Credit/Debit Cards (Visa, Master, Rupay, Amex etc.)"
    },
    {
        img: "https://sugarcosmetics.com/paymentIcons/netBanking.svg",
        text: "Net Banking (ICICI, HDFC, SBI etc.)"
    },
    {
        img: "https://sugarcosmetics.com/paymentIcons/cod.svg",
        text: "Cash on Delivery"
    }
]

const Payments = () => {
    const cart = useSelector(state => state.cart.cart)
    const cartTotal = useSelector(state => state.cart.cartTotal)
    const discount = useSelector(state => state.cart.discount)
    const cartQuantity = useSelector(state => state.cart.cartQuantity)

    const dispatch = useDispatch()

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
                <FlexDiv style={{marginTop:"12px"}} direction="column" gap="15px">
                    {cart?.map(el => {
                        return <CartItemWithoutButtons props = {el} />
                    } )}
                </FlexDiv>
            </CartBoxDiv>
            {/* Right */}
            <CartBoxDiv style={{marginTop:"12px"}}>
                <FlexDiv style={{padding:"0px"}} align="center">
                    <img src="https://sugarcosmetics.com/desc-images/Offers_price_details.svg" />
                    <p style={{color:"#6c757", paddingLeft:"0.5rem", paddingRight:"0.5rem", fontSize:"13px", fontWeight:"400"}}><span style={{textDecoration:"underline"}}>Paym</span>ent Method</p>
                </FlexDiv>

                <FlexDiv>
                    <FlexDiv basis="100%" className={styles.offerAndPriceBox} direction="column">
                    <FlexDiv className={styles.textMuted} style={{fontSize:"14px"}}>Select a Payment Method</FlexDiv>
                    <FlexDiv direction="column" style={{marginTop:"8px"}}>
                        {paymentMethods?.map( el => <PaymentMethodOption src={el.img} text={el.text} />)}
                    </FlexDiv>
                    <FlexDiv style={{marginTop:"22px", marginBottom:"32px"}}>
                            <button className={styles.continueShopping}><Link style={{textDecoration:"none", color:"inherit"}} to="/checkout">{"<"} <span style={{textDecoration:"underline", paddingLeft:"0.25rem", paddingRight:"0.25rem"}}>Delivery Info</span></Link></button>
                            <button onClick = {() => {
                                dispatch(placeOrder(cartQuantity, cartTotal, cart))
                                
                            }} className={styles.deliveryInfo}><Link style={{textDecoration:"none", color:"inherit"}} to="/">Proceed to Payment (Rs. {(cartTotal + 49.00 - ((discount/100) * cartTotal)).toFixed(2)})</Link> </button>
                        </FlexDiv>
                    </FlexDiv>
                </FlexDiv>
                
            </CartBoxDiv>
        </CartBox>
    )
}

export default Payments
