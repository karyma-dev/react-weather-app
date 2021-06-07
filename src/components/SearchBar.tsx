import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import SearchIcon from '../assets/icons/SearchIcon'
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
    const history = useHistory()
    const onSubmit = (e: any) => {
        e.preventDefault()

        history.push('/forecast/ca/vancouver')
    }

    return (
        <Form onSubmit={onSubmit}>
            <Input placeholder="Enter your city" />
            <SearchIcon />
            <CountryDropdown />
        </Form>
    )
}

export default SearchBar
