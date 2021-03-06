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
    color: white;

    & option {
        color: black;
        font-size: 1rem;
        font-weight: 400;
        padding: 5px 2px;
    }
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
        <Dropdown data-testid="dropdown" value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value={country} disabled hidden data-testid="dropdown-item">
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
