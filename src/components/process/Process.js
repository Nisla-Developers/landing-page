import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Process.css';

const Process = () => {
    const [processCards, setProcessCards] = useState([
            {
            title: "MEET",
            discription: "Nisi minim culpa laboris aliqua incididunt velit cupidatat ea aute cupidatat."
        },
        {
            title: "DISCUSSION",
            discription: "Sint irure veniam magna sit exercitation dolore sunt enim laborum cillum."
        },
        {
            title: "IDEAL",
            discription: "Nisi tempor irure officia anim enim mollit do dolore ex occaecat ad ea nulla."
        },
        {
            title: "CONSTRUCT",
            discription: "Eiusmod quis nulla proident sit aliquip do in cillum velit sunt consequat laboris commodo."
        }
    ])
    
    return (
        <Container style={{ textAlign: "center" }}>
            <Row>
                <Col md={12}>
                    <h2>Our Process</h2>
                </Col>
                <Col md={12} style={{fontSize:"small"}}>
                    <span>In magna fugiat elit irure proident commodo fugiat in in quis amet. Sint laborum eu tempor anim fugiat. Qui laboris esse laboris officia occaecat culpa ea Lorem sunt elit aliqua elit officia duis.</span>
                </Col>
            </Row>

            <Row className="mt-4">
                {processCards.map(pCard => {
                    return (
                        <Col sm={6} xs={12} md={6} lg={3} className="mt-4">
                                <Card text={"light"} style={{textAlign:"left", width:"100%", height:"100%", backgroundColor:"#c2206c"}}>
                                    <Card.Header>
                                        {pCard.title}
                                    </Card.Header>
                                    <Card.Body style={{fontSize:"small",}}>
                                        {pCard.discription}
                                    </Card.Body>
                                </Card>
                        </Col>
                    )
                })}

            </Row>
        </Container>
    )
}

export default Process;