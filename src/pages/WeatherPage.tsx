import React from 'react'
import Background from '../components/Background'
import getCurrentWeather from '../API/getCurrentWeather'

const WeatherPage = ({ match }: any) => {
    const { city, country } = match.params

    getCurrentWeather(city, country).then((res) => console.log(res))

    return <Background>Weather Page</Background>
}

export default WeatherPage
