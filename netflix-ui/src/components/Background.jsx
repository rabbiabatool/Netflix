import React from 'react';
import background from "../assets/backImg.jpg"
import styled from "styled-components"
// import './App.css'

export  default function Background() {
    return <Container><img src={background} alt="" /></Container>


}

const Container = styled.div`
    height: 100vh;
    width:100vw;
    img{
        height: 100vh;
        width:100vw;
    }
`;