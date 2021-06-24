import React from 'react'
import styled from 'styled-components'
import HomeImage from '../assets/background/Home.jpg'
import BackgroundImage from '../assets/background'

const Container = styled.div`
    background: #ffffff url(${(props: styledComponentProps) => (props.bg ? BackgroundImage[props.bg] : HomeImage)})
        no-repeat center center;
    background-size: cover;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
`

const Background = ({ children, weather }: Props) => {
    if (weather) {
        return (
            <Container bg={weather} data-testid="background">
                {children}
            </Container>
        )
    } else {
        return <Container data-testid="background">{children}</Container>
    }
}

type Props = {
    children: JSX.Element
    weather?: string
}

type styledComponentProps = {
    bg?: string
}

export default Background
