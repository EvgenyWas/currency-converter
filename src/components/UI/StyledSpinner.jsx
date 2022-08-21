import React from 'react'
import { Spinner } from 'react-bootstrap'

const StyledSpinner = () => {
    return (
        <Spinner
            animation="border"
            style={{
                position: 'absolute',
                left: '48%',
                top: '48%',
            }}
        />
    )
}

export default StyledSpinner
