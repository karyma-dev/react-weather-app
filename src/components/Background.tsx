import React from 'react'
import styled from 'styled-components'
import HomeImage from '../assets/background/Home.jpg'
import BackgroundImage from '../assets/background'

const Container = styled.div`
    background: #ffffff url(${(props: scProps) => (props.bg ? BackgroundImage[props.bg] : HomeImage)}) no-repeat center
        center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Background = ({ children, currentWeather }: Props) => {
    if (currentWeather) {
        const { weather } = currentWeather

        return <Container bg={weather[0].main}>{children}</Container>
    } else {
        return <Container bg={null}>{children}</Container>
    }
}

type Props = {
    children: JSX.Element
    currentWeather: any
}

type scProps = {
    bg: string | null
}

export default Background
