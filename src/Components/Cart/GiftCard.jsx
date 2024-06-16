import React from 'react'
import FlexDiv from '../../Styled/FlexDiv'
import { useState } from 'react'
import styles from "../../CSS/Cart.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { applyDiscount } from '../../Redux/Cart/actions'

const GiftCard = () => {
    const [code, setCode] = useState("");
    const discountCodes = useSelector(state => state.cart.discountCodes)
    const discount = useSelector(state => state.cart.discount)
    const cartTotal = useSelector(state => state.cart.cartTotal);
    const [discountTried, setDiscountTried] = useState(false)
    const [discountMsg, setDiscountMsg] = useState({
        status: false,
        msg: ""
    })
    
    const dispatch = useDispatch();

    const handleDiscount = () => {
        if(code in discountCodes){
            dispatch(applyDiscount(Number(discountCodes[code]) ))
            setDiscountTried(true)
            setDiscountMsg({
                status: true,
                msg: "Discount Applied"
            })
        }
        else{
            dispatch(applyDiscount(0 ))
            setDiscountTried(true)
            setDiscountMsg({
                status: false,
                msg: "Promotion Code Invalid"
            })
        }
    }
    return (
        <FlexDiv align="center" gap="4px">
            <div><img src="https://sugarcosmetics.com/desc-images/GiftCard.svg" width="20px" height="20px" /></div>
            <div><p style={{fontSize:"14px"}}>Gift Card/Discount Code</p></div>
            <div style={{height:"30px", borderRadius:"0.25rem", paddingRight: "0.5rem",  paddingLeft: "0.5rem"}}>
                <input value={code} onChange = {(e) => setCode(e.target.value)} className={styles.promoInput} placeholder="Enter Promo Code"/>
                <button onClick = {() => handleDiscount()} className={styles.promoApplyButton}>
                    Apply
                </button>
            </div>
            {discountTried && discountMsg.status ? <span style={{color:"green"}}>{discountMsg.msg}</span> : <span style={{color:"red"}}>{discountMsg.msg}</span>}
            
        </FlexDiv>
    )
}

export default GiftCard
