import { useState } from 'react'
import { baseAmount, baseCurrency } from '../../config'
import ConverterItem from './ConverterItem'
import { StyledConverter, StyledMain, StyledTitle } from './styles'

const Converter = ({ currencies }) => {
    const [currentValue, setCurrentValue] = useState({
        amount: baseAmount,
        currentCurrency: baseCurrency,
    })

    const handleCurrencyChange = (amount, currency) => {
        setCurrentValue({
            amount: amount,
            currentCurrency: currency,
        })
    }

    return (
        <StyledMain>
            <StyledConverter>
                <StyledTitle>Currency Converter</StyledTitle>
                {Object.keys(currencies.data).map((item, index) => {
                    const currenciesList = currencies.data

                    return (
                        <ConverterItem
                            key={index}
                            currencies={currenciesList}
                            code={item}
                            currentValue={currentValue}
                            onCurrencyChange={handleCurrencyChange}
                        />
                    )
                })}
            </StyledConverter>
        </StyledMain>
    )
}

export default Converter
