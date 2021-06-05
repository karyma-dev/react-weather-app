import React from "react"
import styled from "styled-components"
import SearchBar from "../components/SearchBar"
import backgroundImage from "../assets/home.jpg"

const Container = styled.div`
  background: #ffffff url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HomePage = () => {
  return (
    <Container>
      <SearchBar />
    </Container>
  )
}

export default HomePage
