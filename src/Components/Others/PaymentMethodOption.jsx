import React, { useState } from 'react'
import FlexDiv from '../../Styled/FlexDiv'


const PaymentMethodOption = ({src, text}) => {
    const [isActive, setActive] = useState(false)
    return (
        <FlexDiv style={{borderBottom: "1px solid rgba(0, 0, 0, 0.12)", boxSizing:"border-box", padding:"8px 12px", backgroundColor: "rgb(241, 238, 238)", borderRadius:"4px"}} align="center" justify="space-between" basis="100%" onClick = {() => setActive(!isActive)}>
            <FlexDiv align="center">
                <div><img src={src} height={22} width={22} /></div>
                <div style={{padding:"0.25rem 1rem"}}><p style={{fontSize: "12px", fontWeight: "500"}}>{text}</p></div>
            </FlexDiv>
            <FlexDiv>
                {!isActive && <img src="https://sugarcosmetics.com/desc-images/Check.svg" width="15px" height="15px" />}
                {isActive && <img src="https://sugarcosmetics.com/desc-images/CheckFilled.svg" width="15px" height="15px" />}
            </FlexDiv>
        </FlexDiv>
    )
}

export default PaymentMethodOption
