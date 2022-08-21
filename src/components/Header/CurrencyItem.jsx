import React from 'react'
import { getRoundedNumber } from '../../utils/utils'
import ChangeAmount from './ChangeAmount'
import { StyledCurrencyItem, StyledCurrentAmount, StyledTitle } from './styles'

const CurrencyItem = ({ currencyCode, currentValue, currencyChange }) => {
    const currencyQuantity = 1
    const roundingOperand = 100
    const currentAmount = getRoundedNumber(
        currencyQuantity / currentValue,
        roundingOperand
    )
    const changeAmount = getRoundedNumber(currencyChange, roundingOperand)

    return (
        <StyledCurrencyItem>
            <StyledTitle>{currencyCode}</StyledTitle>
            <StyledCurrentAmount>{currentAmount}</StyledCurrentAmount>
            <ChangeAmount changeAmount={changeAmount} />
        </StyledCurrencyItem>
    )
}

export default CurrencyItem
