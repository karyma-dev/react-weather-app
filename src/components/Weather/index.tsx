import React, { useState, useEffect } from 'react'

const Weather = ({ currentWeather, dailyWeather }: any) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (currentWeather && dailyWeather) {
            setLoading(false)
        }
    }, [currentWeather, dailyWeather])

    return loading ? <h1>Loading</h1> : <h1>Weather</h1>
}

export default Weather
