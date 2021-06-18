import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Background from '../components/Background'
import Weather from '../components/Weather'
import getCurrentWeather from '../api/getCurrentWeather'
import getDailyWeather from '../api/getDailyWeather'

const WeatherPage = ({ match }: any) => {
    const { city, country } = match.params
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [currentWeather, setCurrentWeather] = useState(null)
    const [dailyWeather, setDailyWeather] = useState(null)

    useEffect(() => {
        getCurrentWeather(city, country)
            .then(({ data }) => {
                const { lat, lon } = data.coord
                setCurrentWeather(data)
                getDailyWeather(lat, lon).then(({ data }) => setDailyWeather(data))
            })
            .catch(() => setError(true))
    }, [])

    useEffect(() => {
        if (currentWeather && dailyWeather) {
            setLoading(false)
        }
    }, [currentWeather, dailyWeather])

    if (error) {
        return <Redirect to="/" />
    } else {
        return (
            <Background>
                {loading ? <h1>Loading</h1> : <Weather currentWeather={currentWeather} dailyWeather={dailyWeather} />}
            </Background>
        )
    }
}

export default WeatherPage
