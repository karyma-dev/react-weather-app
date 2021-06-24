import React, { FC } from 'react'
import styled from 'styled-components'
import WeatherIcon from '../../assets/icons'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
`

const Hours = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
`

const Time = styled.li`
    font-size: 1rem;
    font-weight: 300;
`

const Icon = styled.img`
    width: 30px;
`

const HourlyForecast: FC<Props> = ({ hourlyForecast }) => {
    const slicedForecast = hourlyForecast.slice(1, 7)

    const mapHourlyForecast = slicedForecast.map((forecast, i) => {
        const { dt, temp, weather } = forecast
        const date = new Date(dt * 1000)
        const hour = date.toLocaleTimeString(undefined, { hour: '2-digit' }).replace(/^0+/, '')

        return (
            <Hours key={i}>
                <Time>{hour}</Time>
                <Icon src={WeatherIcon[weather[0].main]} alt="weather icon" />
                <Time>{Math.round(temp)}&deg;</Time>
            </Hours>
        )
    })

    return <Container>{mapHourlyForecast}</Container>
}

type Props = {
    hourlyForecast: [
        {
            dt: number
            temp: number
            feels_like: number
            pressure: number
            humidity: number
            dew_point: number
            uvi: number
            clouds: number
            visibility: number
            wind_speed: number
            wind_deg: number
            weather: [
                {
                    id: number
                    main: string
                    description: string
                    icon: string
                }
            ]
            pop: number
        }
    ]
}

export default HourlyForecast
