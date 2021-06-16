import React, { FC } from 'react'

const HourlyForecast: FC<Props> = ({ hourlyForecast }) => {
    return <h1>Hourly Weather</h1>
}

type Props = {
    hourlyForecast: []
}

export default HourlyForecast
