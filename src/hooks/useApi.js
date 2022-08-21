import { useCallback, useState } from 'react'

const useApi = (api) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const onApiCall = useCallback(
        (params) => {
            setLoading(true)

            return api(...params)
                .then((response) => {
                    setLoading(false)
                    setData(response.data)

                    return response
                })
                .catch((error) => {
                    setLoading(false)
                    setError(error)
                })
        },
        [api]
    )

    return [onApiCall, data, loading, error]
}

export default useApi
