import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import HomePage from './pages/HomePage'
import ForecastPage from './pages/ForecastPage'

const Container = styled.div`
    background-color: black;
`

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/forecast/:country/:city" component={ForecastPage} />
                <Route path="/" component={HomePage} />
                <Route component={HomePage} />
            </Switch>
        </Router>
    )
}

export default App
