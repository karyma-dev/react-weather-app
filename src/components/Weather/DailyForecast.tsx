import React, { FC } from 'react'

const DailyForecast: FC<Props> = ({ dailyForecast }) => {
    const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const mapDailyForecast = dailyForecast.slice(1).map((forecast, i) => {
        const date = new Date(forecast.dt * 1000)

        return (
            <ul key={i}>
                <li>{daysOfTheWeek[date.getDay()]}</li>
                <li>{forecast.weather[0].main}</li>
                <li>{forecast.temp.day} &deg;C</li>
            </ul>
        )
    })

    return <div>{mapDailyForecast}</div>
}

type Props = {
    dailyForecast: any[]
}

export default DailyForecast
