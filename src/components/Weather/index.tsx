import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import DailyForecast from './DailyForecast'
import HourlyForecast from './HourlyForecast'
import { ICurrentWeather, IDailyWeather } from '../../types'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 50px;
    width: 500px;

    @media (max-width: 425px) {
        width: 100%;
        padding: 50px 10px;
    }
`

const Main = styled.div``
const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
    font-weight: 400;
`
const Description = styled.h2`
    text-align: center;
    font-weight: 300;
`
const TempContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Temp = styled.p`
    font-size: 5rem;
    font-weight: 100;
    margin: 0 20px;
`
const SmallTemp = styled.p`
    font-weight: 300;
`

const Weather: React.FC<Props> = ({ currentWeather, dailyWeather }) => {
    const { name, main, weather } = currentWeather
    const { temp, temp_max, temp_min } = main
    const { hourly, daily } = dailyWeather

    return (
        <Container>
            <Main>
                <Title>{name}</Title>
                <Description>{_.startCase(weather[0].description)}</Description>
                <TempContainer>
                    <SmallTemp>{Math.round(temp_min)}&deg;</SmallTemp>
                    <Temp>
                        {Math.round(temp)}
                        &deg;
                    </Temp>
                    <SmallTemp>{Math.round(temp_max)}&deg;</SmallTemp>
                </TempContainer>
            </Main>
            <HourlyForecast hourlyForecast={hourly} />
            <DailyForecast dailyForecast={daily} />
        </Container>
    )
}

type Props = {
    currentWeather: ICurrentWeather
    dailyWeather: IDailyWeather
}

export default Weather
