import { fetchRequest } from '.'

export const currencyApi = {
    getLatestCurrencies(currencies, baseCurrency) {
        const params = {
            currencies: currencies,
            base_currency: baseCurrency,
        }

        return fetchRequest('latest', params)
    },
    getCurrencies(currencies) {
        const params = {
            currencies: currencies,
        }

        return fetchRequest('currencies', params)
    },
    getPreviousCurrencies(currencies, baseCurrency, date) {
        const params = {
            currencies: currencies,
            base_currency: baseCurrency,
            date: date,
        }

        return fetchRequest('historical', params)
    },
}
