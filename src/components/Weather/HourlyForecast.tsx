import React, { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`

const DateContainer = styled.ul`
    list-style: none;
    text-align: center;
    margin: 0 20px;
`

const Time = styled.li`
    font-weight: 300;
`

const HourlyForecast: FC<Props> = ({ hourlyForecast }) => {
    const slicedForecast = hourlyForecast.slice(1, 6)

    const mapHourlyForecast = slicedForecast.map((forecast, i) => {
        const { dt, temp, weather } = forecast
        const date = new Date(dt * 1000)
        return (
            <DateContainer key={i}>
                <Time>{date.toLocaleTimeString(undefined, { hour: '2-digit' })}</Time>
                <Time>{weather[0].main}</Time>
                <Time>{Math.round(temp)}&deg;</Time>
            </DateContainer>
        )
    })

    return <Container>{mapHourlyForecast}</Container>
}

type Props = {
    hourlyForecast: any[]
}

export default HourlyForecast
