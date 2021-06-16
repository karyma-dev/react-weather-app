import React, { useState, SyntheticEvent } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import Autocomplete from './Autocomplete'
import SearchIcon from '../../assets/svg/SearchIcon'
import CountryDropdown from './CountryDropdown'

const Form = styled.form`
    border-bottom: 2px solid black;
    display: flex;
    align-items: center;
`

const SearchBar = () => {
    const [country, setCountry] = useState('CA')
    const [city, setCity] = useState('')

    const history = useHistory()
    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        history.push(`/forecast/${country}/${city}`)
    }

    return (
        <>
            <Form onSubmit={onSubmit}>
                <Autocomplete country={country} setCity={setCity} />
                <SearchIcon onSubmit={onSubmit} />
            </Form>
            <CountryDropdown country={country} setCountry={setCountry} />
        </>
    )
}

export default SearchBar
