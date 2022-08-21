import { useEffect } from 'react'
import { currencyApi } from '../../api/currencyApi'
import { baseCurrency, mainCurrencies } from '../../config'
import useApi from '../../hooks/useApi'
import { getCurrencyChange, getPreviousDate } from '../../utils/utils'
import CurrencyItem from './CurrencyItem'
import { StyledHeader } from './styles'

const Header = ({ currencies }) => {
    const [getPreviousCurrencies, previousCurrencies, loading] = useApi(
        currencyApi.getPreviousCurrencies
    )
    const lastUpdateDate = new Date(currencies.meta.last_updated_at)
    const previousDate = getPreviousDate(lastUpdateDate)
    const params = [mainCurrencies, baseCurrency, previousDate]

    useEffect(() => {
        getPreviousCurrencies(params)
    }, [])

    return (
        <StyledHeader>
            {!loading &&
                Object.keys(currencies.data).map((item, index) => {
                    if (item === baseCurrency) {
                        return
                    }

                    const previous = previousCurrencies.data
                    const currentValue = currencies.data[item].value
                    const previousValue = previous[item].value
                    const currencyChange = getCurrencyChange(
                        currentValue,
                        previousValue
                    )

                    return (
                        <CurrencyItem
                            key={index}
                            currencyCode={item}
                            currentValue={currentValue}
                            currencyChange={currencyChange}
                        />
                    )
                })}
        </StyledHeader>
    )
}

export default Header
