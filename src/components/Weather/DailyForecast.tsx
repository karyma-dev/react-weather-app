import React, { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Days = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    margin: 20px 0;
`

const Info = styled.li`
    font-weight: 300;
`

const DailyForecast: FC<Props> = ({ dailyForecast }) => {
    const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const mapDailyForecast = dailyForecast.slice(1).map((forecast, i) => {
        const { dt, weather, temp } = forecast

        const date = new Date(dt * 1000)

        return (
            <Days key={i}>
                <Info>{daysOfTheWeek[date.getDay()]}</Info>
                <Info>{weather[0].main}</Info>
                <Info>{Math.round(temp.day)} &deg;C</Info>
            </Days>
        )
    })

    return <Container>{mapDailyForecast}</Container>
}

type Props = {
    dailyForecast: any[]
}

export default DailyForecast
