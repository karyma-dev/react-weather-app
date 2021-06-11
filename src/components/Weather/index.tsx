import React, { useState, useEffect } from 'react'

const Weather = ({ currentWeather, dailyWeather }: any) => {
    const { name, main, weather, wind } = currentWeather
    const { temp, temp_max, temp_min, humidity } = main
    // const date = new Date(current.dt * 1000)
    // console.log(date.toLocaleTimeString())
    // console.log(date.toDateString())
    return <></>
}

export default Weather
