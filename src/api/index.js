import axios from 'axios'

export const baseUrl = 'https://api.currencyapi.com/v3/'
const API_KEY = '7CAOgxXaLrCDi6rcuhYk9O9l8o0IfcwXor1YXm8P'

export const fetchRequest = (url, params) => {
    return axios
        .create({
            headers: {
                'Content-type': 'application/json',
            },
        })
        .get(`${baseUrl}${url}`, {
            params: {
                apikey: API_KEY,
                ...params,
            },
        })
}
