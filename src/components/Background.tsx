import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/home.jpg'

const Container = styled.div`
    background: #ffffff url(${backgroundImage}) no-repeat center center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Background = (props: any) => {
    return <Container>{props.children}</Container>
}

export default Background
