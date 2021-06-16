import React, { FC } from 'react'

const DailyForecast: FC<Props> = ({ dailyForecast }) => {
    const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const mapDailyForecast = dailyForecast.slice(1).map((forecast) => {
        const date = new Date(forecast.dt * 1000)

        return (
            <ul>
                <li>{daysOfTheWeek[date.getDay()]}</li>
                <li>{forecast.weather[0].main}</li>
                <li>{forecast.temp.day}</li>
            </ul>
        )
    })

    return <h1>{mapDailyForecast}</h1>
}

type Props = {
    dailyForecast: any[]
}

export default DailyForecast
