import React from 'react'
import FlexDiv from '../../Styled/FlexDiv'
import styles from '../../CSS/Cart.module.css'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../Redux/Cart/actions'

const RemoveProductPopup = ({closePopup, id, price}) => {
    const dispatch = useDispatch()
    return (
        <FlexDiv className={styles.removeProductPopup} direction="column">
            <FlexDiv gap="3px" align="center">
                <div><p>Are you sure you want to remove the item ?</p></div>
                <div><button onClick={closePopup} className={`${styles.closePopup} ${styles.buttonHover}`}>x</button></div>
            </FlexDiv>
            <FlexDiv justify="center">
                <button className={`${styles.removeProductButtons} ${styles.buttonHover}`}>
                    SAVE FOR LATER
                </button>
                <button onClick={() => {
                    console.log(id)
                    dispatch(deleteProduct(id, price))
                    closePopup()
                }} className={`${styles.removeProductButtons} ${styles.buttonHover}`}>
                    OK
                </button>
            </FlexDiv>
        </FlexDiv>
    )
}

export default RemoveProductPopup
