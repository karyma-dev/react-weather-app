import React, { useState } from 'react'
import { countries } from '../assets/countries'

const CountryDropdown = () => {
    const [country, changeCountry] = useState('CA')

    const countryCodesOption = countries.map((country) => {
        return (
            <option key={country.code} value={country.code}>
                {country.name}
            </option>
        )
    })

    return (
        <select value={country} onChange={(e) => changeCountry(e.target.value)}>
            <option value={country} disabled hidden>
                {country}
            </option>
            {countryCodesOption}
        </select>
    )
}

export default CountryDropdown

// navigator.geolocation.getCurrentPosition((location) => {
//     const { latitude, longitude } = location.coords

//     axios
//         .get(
//             `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${api_key}`
//         )
//         .then((res) => console.log(res))
// })
