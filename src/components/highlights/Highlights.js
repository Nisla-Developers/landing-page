import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import FadeInSection from '../fade-in-section/FadeInSection';

const Highlights = ({ title, description, image, imageSide }) => {
    return (
        <Container>
            <Row>
                <Col lg={6} sm={12} style={{ margin: "auto" }} className={imageSide == 'right' ? "order-lg-1" : "order-lg-2"}>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </Col>
                {(imageSide == 'right' || imageSide == 'left') && (
                    <Col className="order-lg-1 mt-4" >
                        <FadeInSection side={imageSide}>
                            <Image src={image} style={{ width: "100%", height: "100%" }} fluid />
                        </FadeInSection>
                    </Col>
                )}
            </Row>
            <Row>
                {(imageSide == 'bottom' || imageSide == 'top') && (
                    <Col className="order-md-1 mt-4">
                        <FadeInSection side={imageSide}>
                            <Image src={image} style={{ width: "auto", height: "100%", maxHeight: "600px" }} fluid />
                        </FadeInSection>
                    </Col>
                )}
            </Row>
        </Container >
    )
}

export default Highlights;