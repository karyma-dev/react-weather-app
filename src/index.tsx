import * as React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import App from './App'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 18px;
  }
`

render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root')
)
