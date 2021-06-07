import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import Autocomplete from './Autocomplete'
import SearchIcon from '../../assets/icons/SearchIcon'
import CountryDropdown from './CountryDropdown'

const Form = styled.form`
    padding: 5px 0;
    border-bottom: 2px solid white;
`

const Input = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 20px;
    color: white;
`

const SearchBar = () => {
    const [country, setCountry] = useState('CA')
    const [city, setCity] = useState('')

    const history = useHistory()
    const onSubmit = (e: any) => {
        e.preventDefault()

        history.push(`/forecast/${country}/${city}`)
    }

    return (
        <>
            <Form onSubmit={onSubmit}>
                <Autocomplete country={country} />
                <SearchIcon />
            </Form>
            <CountryDropdown country={country} setCountry={setCountry} />
        </>
    )
}

export default SearchBar
