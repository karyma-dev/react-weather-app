import React, { FC } from 'react'
import styled from 'styled-components'
import WeatherIcon from '../../assets/icons'

const Container = styled.div``
const Days = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`

const Info = styled.li`
    font-weight: 300;
`

const Icon = styled.img`
    width: 30px;
`

const InfoContainer = styled.div`
    width: 50px;
    display: flex;

    &:last-of-type {
        justify-content: flex-end;
    }
`

const DailyForecast: FC<Props> = ({ dailyForecast }) => {
    const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const mapDailyForecast = dailyForecast.slice(1).map((forecast, i) => {
        const { dt, weather, temp } = forecast

        const date = new Date(dt * 1000)

        return (
            <Days key={i}>
                <InfoContainer>
                    <Info>{daysOfTheWeek[date.getDay()]}</Info>
                </InfoContainer>
                <Icon src={WeatherIcon[weather[0].main]} />
                <InfoContainer>
                    <Info>{Math.round(temp.day)}&deg;</Info>
                </InfoContainer>
            </Days>
        )
    })

    return <Container>{mapDailyForecast}</Container>
}

type Props = {
    dailyForecast: [
        {
            dt: number
            sunrise: number
            sunset: number
            moonrise: number
            moonset: number
            moon_phase: number
            temp: {
                day: number
                min: number
                max: number
                night: number
                eve: number
                morn: number
            }
            feels_like: {
                day: number
                night: number
                eve: number
                morn: number
            }
            pressure: number
            humidity: number
            dew_point: number
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
            clouds: number
            pop: number
            rain: number
            uvi: number
        }
    ]
}

export default DailyForecast
