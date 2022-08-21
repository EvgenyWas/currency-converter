import React from 'react'
import iconUp from '../../assets/icon-up-arrow.svg'
import iconDown from '../../assets/icon-down-arrow.svg'
import {
    StyledArrowImage,
    StyledChangeAmount,
    StyledChangeAmountText,
} from './styles'

const ChangeAmount = ({ changeAmount }) => {
    const isPositivieNumber = changeAmount > 0
    const isNotZero = changeAmount !== 0

    return (
        <StyledChangeAmount
            isNotZero={isNotZero}
            isPositivieNumber={isPositivieNumber}
        >
            {isNotZero && (
                <StyledArrowImage
                    src={isPositivieNumber ? iconUp : iconDown}
                    alt="Arrow"
                />
            )}
            <StyledChangeAmountText>{changeAmount}</StyledChangeAmountText>
        </StyledChangeAmount>
    )
}

export default ChangeAmount
