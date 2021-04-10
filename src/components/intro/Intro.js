import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Intro = () =>{
    return (
        <Container style={{backgroundColor:"#5e35b1"}}>
            <Image src={'./assets/logo.png'} fluid />
        </Container>
    )
}

export default Intro;