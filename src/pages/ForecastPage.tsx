import React, { useState, useEffect } from 'react'
import Background from '../components/Background'
import Weather from '../components/Weather'
import getCurrentWeather from '../API/getCurrentWeather'
import getDailyWeather from '../API/getDailyWeather'

const WeatherPage = ({ match }: any) => {
    const { city, country } = match.params
    const [currentWeather, setCurrentWeather] = useState(null)
    const [dailyWeather, setDailyWeather] = useState(null)
    useEffect(() => {
        getCurrentWeather(city, country).then(({ data }) => {
            const { lat, lon } = data.coord
            setCurrentWeather(data)
            getDailyWeather(lat, lon).then(({ data }) => setDailyWeather(data))
        })
    }, [])

    return (
        <Background>
            <Weather currentWeather={currentWeather} dailyWeather={dailyWeather} />
        </Background>
    )
}

export default WeatherPage
