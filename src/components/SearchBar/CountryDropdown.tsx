import React, { useState, FC, Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import csc from 'country-state-city'

const Dropdown = styled.select`
    background: transparent;
    border: none;
    width: 50px;
    outline: none;
    font-size: 1rem;
    margin-left: 10px;
`

const CountryDropdown: FC<Props> = ({ country, setCountry }) => {
    const countryCodesOption = csc.getAllCountries().map((country) => {
        return (
            <option key={country.isoCode} value={country.isoCode}>
                {country.name}
            </option>
        )
    })

    return (
        <Dropdown value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value={country} disabled hidden>
                {country}
            </option>
            {countryCodesOption}
        </Dropdown>
    )
}

type Props = {
    country: string
    setCountry: Dispatch<SetStateAction<string>>
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
