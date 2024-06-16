import '../../index.css';
import QuantityButtons from '../../Styled/Cart/QuantityButtons';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../../CSS/Cart.module.css'
import FlexDiv from '../../Styled/FlexDiv';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import RemoveProductPopup from '../Others/RemoveProductPopup';
import { useState } from 'react';
import { addToCart,removeFromCart } from '../../Redux/Cart/actions';

const CartItemWithoutButtons = ({props}) => {
    
    const dispatch = useDispatch()

    const [showPopup, setShowPopup] = useState(false)

    const closePopup = () => {
        setShowPopup(false)
    }

    return (
        <FlexDiv align="center" justify="space-between">
            <FlexDiv  align="center" gap="20px" basis="58%">
                <FlexDiv >
                    <img src={props.image[0]} width={90} height={90} alt={props.name} />
                </FlexDiv>
                <FlexDiv direction="column" style={{width:"70%"}}>
                    <p style={{marginBottom:"2px"}} className={styles.cartProductName}>{props.name}</p>
                    <FlexDiv align="center" gap="5px">
                        <FlexDiv><FavoriteBorderIcon style={{fontSize:"15px", color:"#575555"}} /></FlexDiv>
                        <FlexDiv align="center"><p className={styles.cartProductName}>Save to Wishlist</p></FlexDiv>
                    </FlexDiv>
                </FlexDiv>
            </FlexDiv>

            {/* Right side */}

            <FlexDiv direction="column" basis="42%">
            <FlexDiv align="center"  justify="space-evenly">
                <FlexDiv basis="30%" justify="center"><DeleteIcon onClick = {() => setShowPopup(true)} sx={{color: "#6c757d", fontSize:"16px"}} /></FlexDiv>
                <FlexDiv align="center" gap="5px" basis="30%">
                <QuantityButtons onClick={() => {
                    if(props.quantity == 1){
                        console.log("Show popup")
                        setShowPopup(true)
                    }
                    else{
                        dispatch(removeFromCart(props.id, props.price))
                    }
                }}>-</QuantityButtons>
                <p>{props.quantity}</p>
                <QuantityButtons onClick={() => dispatch(addToCart(props))}>+</QuantityButtons>
                </FlexDiv>
                <FlexDiv basis="40%">
                    <p className={styles.cartQuantityAndPrice}>{props.quantity} X {props.price} = {props.quantity * Number(props.price)}</p>
                </FlexDiv>
                
            </FlexDiv>
            { showPopup && <RemoveProductPopup closePopup = {closePopup} id = {props.id} price = {props.quantity  * Number(props.price)} /> }
            </FlexDiv>

        </FlexDiv>
    )
}

export default CartItemWithoutButtons