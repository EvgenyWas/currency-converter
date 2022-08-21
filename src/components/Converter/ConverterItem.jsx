import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { tryConvert } from '../../utils/utils'

const ConverterItem = ({
    currencies,
    code,
    currentValue,
    onCurrencyChange,
}) => {
    const [selectCurrency, setSelectCurrency] = useState(code)
    const values = Object.keys(currencies)
    const { amount, currentCurrency } = currentValue
    const courseFrom = currencies[currentCurrency].value
    const courseTo = currencies[selectCurrency].value
    const currentAmount = tryConvert(courseFrom, courseTo, amount)

    const handleClick = (currency) => setSelectCurrency(currency)

    const handleChange = (event) => {
        const inputAmount = event.target.value
        onCurrencyChange(inputAmount, selectCurrency)
    }

    return (
        <InputGroup className="mb-3">
            <DropdownButton
                variant="outline-secondary"
                title={selectCurrency}
                id="input-group-dropdown-1"
            >
                {values.map((item, index) => (
                    <Dropdown.Item
                        key={index}
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
            <Form.Control
                aria-label="Text input with dropdown button"
                value={currentAmount}
                onChange={handleChange}
            />
        </InputGroup>
    )
}

export default ConverterItem
