import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyles from './styles/global'
import { baseTheme } from './styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ThemeProvider theme={baseTheme}>
            <App />
            <GlobalStyles />
        </ThemeProvider>
    </React.StrictMode>
)
