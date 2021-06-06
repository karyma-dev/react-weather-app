import React from "react"
import styled from "styled-components"
import SearchIcon from "../assets/icons/SearchIcon"

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
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input placeholder="Enter your city" />
      <SearchIcon />
    </Form>
  )
}

export default SearchBar
