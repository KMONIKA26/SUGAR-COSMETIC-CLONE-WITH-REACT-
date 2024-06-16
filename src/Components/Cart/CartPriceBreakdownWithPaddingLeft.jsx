import React from 'react'
import { useSelector } from 'react-redux';
import FlexDiv from '../../Styled/FlexDiv';
import styles from '../../CSS/Cart.module.css';

const CartPriceBreakdownWithPaddingLeft = () => {
    // const [discount, setDiscount] = useState(0);

    const cartTotal = useSelector(state => state.cart.cartTotal)
    const discount = useSelector(state => state.cart.discount)
    
    return (
        <FlexDiv style={{paddingLeft:"24px"}} className={styles.priceBreakdownSubDiv} direction="column">
            <FlexDiv align="center"  style={{marginBottom:"10px"}}>
                <div><span><img src="https://sugarcosmetics.com/desc-images/CartSubtotal.svg" width="15px" height="15px" /></span></div>
                <div style={{paddingLeft:"0.5rem", paddingRight:"0.5rem"}}><span>Cart Sub Total:</span></div>
                <div style={{paddingLeft:"3rem", paddingRight:"3rem", textAlign: "start"}}><span>₹ {cartTotal.toFixed(2)}</span></div>
            </FlexDiv>

            <FlexDiv align="center"  style={{marginBottom:"10px"}}>
                <div><span><img src="https://sugarcosmetics.com/desc-images/Shipping_Cost.svg" width="15px" height="15px" /></span></div>
                <div style={{paddingLeft:"0.5rem", paddingRight:"0.5rem"}}><span>Shipping Cost:</span></div>
                <div style={{paddingLeft:"3rem", paddingRight:"3rem", textAlign: "start"}}><span>₹ 49.00</span></div>
            </FlexDiv>

            <FlexDiv align="center"  style={{marginBottom:"10px"}}>
                <div><span><img src="https://sugarcosmetics.com/desc-images/Discount.svg" width="15px" height="15px" /></span></div>
                <div style={{paddingLeft:"0.5rem", paddingRight:"0.5rem"}}><span>Discount Applied:</span></div>
                <div style={{paddingLeft:"1.75rem", paddingRight:"1.75rem", textAlign: "start"}}><span >₹ {(discount/100) * cartTotal}</span></div>
            </FlexDiv>

            <FlexDiv align="center">
                <div><span><img src="https://sugarcosmetics.com/desc-images/Shipping_Cost.svg" width="15px" height="15px" /></span></div>
                <div style={{paddingLeft:"0.5rem", paddingRight:"0.5rem"}}><span>Amount Payable:</span></div>
                <div style={{paddingLeft:"2rem", paddingRight:"1.75rem", textAlign: "start"}}><span><strong>₹ {(cartTotal + 49.00 - ((discount/100) * cartTotal)).toFixed(2)}</strong></span></div>
            </FlexDiv>
            <div style={{fontSize:"10.5px", paddingRight:"1.5rem", paddingLeft: "1.5rem"}}>Including ₹60.86 in taxes</div>
        </FlexDiv>
    )
}

export default CartPriceBreakdownWithPaddingLeft
