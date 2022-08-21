// Function to convert from one to another course
function convertFromOneToAnother(courseFrom, courseTo, amount) {
    const convertedAmount = (amount / courseFrom) * courseTo

    return convertedAmount
}

// Function to check conversion possibility and to return converted amount
export function tryConvert(courseFrom, courseTo, value) {
    const input = parseFloat(value)
    if (Number.isNaN(input)) {
        return ''
    }

    const output = convertFromOneToAnother(courseFrom, courseTo, input)
    const rounded = getRoundedNumber(output, 1000)
    return rounded.toString()
}

// Function to get previous last update date in YYYY-MM-DD format
export function getPreviousDate(date = new Date()) {
    const fullPreviousDate = new Date(date.getTime())
    // Currently it costs 5 to show the real changes
    fullPreviousDate.setDate(date.getDate() - 5)
    const year = fullPreviousDate.getFullYear()
    const month = fullPreviousDate.getMonth()
    const day = fullPreviousDate.getDate()
    const previousDate = `${year}-0${month + 1}-${day}`

    return previousDate
}

// Function to get currency change between current and previous courses
export function getCurrencyChange(currentCourse, previousCourse) {
    const currencyChange = 1 / currentCourse - 1 / previousCourse
    const roundedCurrencyChange = getRoundedNumber(currencyChange, 10000)

    return roundedCurrencyChange
}

// Function for rounding a number
export function getRoundedNumber(num, rounding) {
    const roundedNumber = Math.round(num * rounding) / rounding

    return roundedNumber
}
