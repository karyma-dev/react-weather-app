import React, { useState, useEffect } from 'react'
import DailyForecast from './DailyForecast'
import HourlyForecast from './HourlyForecast'

const Weather = ({ currentWeather, dailyWeather }: any) => {
    const { name, main, weather, wind } = currentWeather
    const { temp, temp_max, temp_min, humidity } = main
    const { hourly, daily } = dailyWeather

    return (
        <>
            <HourlyForecast hourlyForecast={hourly} />
            <DailyForecast dailyForecast={daily} />
        </>
    )
}

export default Weather
