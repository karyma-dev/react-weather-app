import React, { FC } from 'react'

const HourlyForecast: FC<Props> = ({ hourlyForecast }) => {
    const slicedForecast = hourlyForecast.slice(0, 5)

    const mapHourlyForecast = slicedForecast.map((forecast, i) => {
        const date = new Date(forecast.dt * 1000)
        return (
            <ul key={i}>
                <li>{date.toLocaleTimeString(undefined, { hour: '2-digit' })}</li>
            </ul>
        )
    })

    return <div>{mapHourlyForecast}</div>
}

type Props = {
    hourlyForecast: any[]
}

export default HourlyForecast
