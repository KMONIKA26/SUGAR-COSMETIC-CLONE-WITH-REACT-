import React from 'react'
import FlexDiv from '../Styled/FlexDiv'
import styles from "../cssModules/Cart.module.css"
import PersonIcon from '@mui/icons-material/Person';


const AccountInfo = () => {
    return (
        <FlexDiv style={{padding:"24px"}} direction="column" gap="14px">
            <FlexDiv align="center">
                <PersonIcon fontSize="small" />
                <p>Hi, Gurbir Singh!</p>
                <p className={styles.textMuted}>Not Gurbir Singh?Click here to login from a different account</p>
            </FlexDiv>
            <FlexDiv gap="24px">
                <FlexDiv justify="space-evenly" className={styles.accountPageBoxes} direction="column" style={{backgroundImage: `url("https://sugarcosmetics.com/desc-images/Orders2.svg")`}}>
                    <h4>Orders</h4>
                    <p>Order status, History, Updates...</p>
                </FlexDiv>

                <FlexDiv justify="space-evenly" className={styles.accountPageBoxes} direction="column" style={{backgroundImage: `url("https://sugarcosmetics.com/desc-images/PersonalInfo2.svg")`}}>
                    <h4>Personal Info</h4>
                    <p>Order status, History, Updates...</p>
                </FlexDiv>

                <FlexDiv justify="space-evenly" className={styles.accountPageBoxes} direction="column" style={{backgroundImage: `url("https://sugarcosmetics.com/desc-images/Wishlist2.svg")`}}>
                    <h4>Wishlist</h4>
                    <p>Your favourites, order now!</p>
                </FlexDiv>

                <FlexDiv justify="space-evenly" className={styles.accountPageBoxes} direction="column" style={{backgroundImage: `url("https://sugarcosmetics.com/desc-images/ReferAndEarn2.svg")`}}>
                    <h4>Refer {`&`} Earn</h4>
                    <p>Referral earnings.</p>
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    )
}

export default AccountInfo
