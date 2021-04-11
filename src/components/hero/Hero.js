import React from 'react';
import { Container, Image } from 'react-bootstrap';

const HeroComponent = () =>{
    return (
        <Container style={{maxWidth:"100%"}}>

        {/* // <Container style={{backgroundColor:"#5e35b1"}}> */}
            {/* <Image src={'./assets/logo.png'} fluid /> */}
            <video width="100%" height="100%" autoPlay loop>

            <source src="./assets/Video 1.mp4" type="video/mp4"/>
            </video>

        </Container>
    )
}

export default HeroComponent;