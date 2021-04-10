import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './Portfolio.css';

const Portfolio = () => {
    const portfolioData = [{
        "url": "./assets/images/1.jpeg"
      },
      {
        "url": "./assets/images/2.jpeg"
      },
      {
        "url": "./assets/images/3.jpeg"
      },
      {
        "url": "./assets/images/4.jpeg"
      },
      {
        "url": "./assets/images/5.jpeg"
      },
      {
        "url": "./assets/images/6.jpeg"
      }];
    return (
        <Container style={{ textAlign: "center" }}>
            <Row>
                <Col md={12}>
                    <h2>Recent Work</h2>
                </Col>
            </Row>
            <Row>
                {portfolioData.map(item=>{
                    return (
                    <Col sm={6} xs={12} md={4} className="m-0 p-2">
                        <Card className="p-0 m-0">
                            <Image src={item.url} style={{width:"100%", height:"100%"}} fluid />
                        </Card>
                    </Col>
                    )
                })}
            </Row>

        </Container>
    )
}

export default Portfolio;