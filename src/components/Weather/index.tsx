import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DailyForecast from './DailyForecast'
import HourlyForecast from './HourlyForecast'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Weather = ({ currentWeather, dailyWeather }: any) => {
    const { name, main, weather } = currentWeather
    const { temp, temp_max, temp_min } = main
    const { hourly, daily } = dailyWeather

    return (
        <Container>
            <div>
                <h1>{name}</h1>
                <p>{weather[0].description}</p>
                <div>
                    <p>{Math.round(temp_min)}</p>
                    <p>{Math.round(temp)} &deg;C</p>
                    <p>{Math.round(temp_max)}</p>
                </div>
            </div>
            <HourlyForecast hourlyForecast={hourly} />
            <DailyForecast dailyForecast={daily} />
        </Container>
    )
}

export default Weather
