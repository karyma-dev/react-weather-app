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
    
    box-sizing: border-box;
  }

  html {
    font-size: 18px;
  }

  @media(max-width: 768px) {
    html {
      font-size: 16px;
    }
  }

  @media(max-width: 425px) {
    html {
      font-size: 14px;
    }
  }
`

render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root')
)
