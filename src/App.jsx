import { useEffect } from 'react'
import { currencyApi } from './api/currencyApi'
import Converter from './components/Converter/Converter'
import Header from './components/Header/Header'
import StyledSpinner from './components/UI/StyledSpinner'
import { baseCurrency, mainCurrencies } from './config'
import useApi from './hooks/useApi'

function App() {
    const [onApiCall, currencies, loading] = useApi(
        currencyApi.getLatestCurrencies
    )
    const params = [mainCurrencies, baseCurrency]

    useEffect(() => {
        onApiCall(params)
    }, [])

    return (
        <div className="App">
            {loading ? (
                <StyledSpinner />
            ) : (
                <>
                    <Header currencies={currencies} />
                    <Converter currencies={currencies} />
                </>
            )}
        </div>
    )
}

export default App
