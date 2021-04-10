import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ContactUs.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope, faGlobeAsia, faMapPin } from '@fortawesome/free-solid-svg-icons'

const ContactUs = () => {
    return (
        <Container style={{ textAlign: "center" }}>
            <Row>
                <Col md={12}>
                    <span>Contact Us</span>
                    <h3 className="mt-2">GET IN TOUCH</h3>
                </Col>

                <Col md={5} style={{ textAlign: "left" }} className="mt-4">
                    <Card bg={"dark"} text={"light"} className="py-3 px-2" >
                        <Row className="m-0 p-0">
                            
                            <Col className="mb-2 mt-2" md={12}>
                                <Row>
                                    <Col style={{textAlign:"right"}} md="2">
                                        <FontAwesomeIcon color="#BA68C8" size="2x" className="mr-1" icon={faMobileAlt} />
                                    </Col>
                                    <Col>
                                        <h6 className="m-0">Let's Talk</h6>
                                        <span style={{fontSize:"small"}}>Phone : 965069****</span>
                                    </Col>
                                </Row>
                            </Col>


                            <Col className="mb-2 mt-2" md={12}>
                                <Row>
                                    <Col style={{textAlign:"right"}} md="2">
                                        <FontAwesomeIcon color="#BA68C8" size="2x" className="mr-1" icon={faEnvelope} />
                                    </Col>
                                    <Col>
                                        <h6 className="m-0">E-Mail Us</h6>
                                        <span style={{fontSize:"small"}}>Email : g***.s********@gmail.com</span>
                                    </Col>
                                </Row>
                            </Col>

                            <Col className="mb-2 mt-2" md={12}>
                                <Row>
                                    <Col style={{textAlign:"right"}} md="2">
                                        <FontAwesomeIcon color="#BA68C8" size="2x" className="mr-1" icon={faMapPin} />
                                    </Col>
                                    <Col>
                                        <h6 className="m-0">Our Location</h6>
                                        <span style={{fontSize:"small"}}>Jaipur</span>
                                    </Col>
                                </Row>
                            </Col>
                          
                        </Row>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default ContactUs;