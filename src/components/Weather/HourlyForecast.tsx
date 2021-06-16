import React, { FC } from 'react'
import styled from 'styled-components'
import WeatherIcon from '../../assets/icons'

const Container = styled.div`
    display: flex;
`

const Hours = styled.ul`
    list-style: none;
    text-align: center;
    margin: 0 20px;
`

const Time = styled.li`
    font-weight: 300;
`

const Icon = styled.img`
    width: 30px;
`

const HourlyForecast: FC<Props> = ({ hourlyForecast }) => {
    const slicedForecast = hourlyForecast.slice(1, 8)

    const mapHourlyForecast = slicedForecast.map((forecast, i) => {
        const { dt, temp, weather } = forecast
        const date = new Date(dt * 1000)
        // parseInt(date.toLocaleTimeString(undefined, { hour: '2-digit' }), 10)

        return (
            <Hours key={i}>
                <Icon src={WeatherIcon[weather[0].main]} alt="weather icon" />
                <Time>{Math.round(temp)}&deg;</Time>
            </Hours>
        )
    })

    return <Container>{mapHourlyForecast}</Container>
}

type Props = {
    hourlyForecast: any[]
}

export default HourlyForecast
