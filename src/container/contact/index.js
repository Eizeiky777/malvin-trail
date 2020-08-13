import React from 'react';
import { Container, Row, Col, Image, Button, Form
} from 'react-bootstrap';
import './contact.css';

// assets
import Circle from '../../assets/img/img_floating_circle.png';
import Sea from '../../assets/img/malvin-sea.png';

const Contact = () => {
    return(
        <>  
            <Container style={{background: '#f5f5f5'}}>
                <Row>
                    <Col className="header">
                        <div className="d-flex justify-content-between ml-2">
                            <h1>CON-<br />  &nbsp; TACT</h1>
                            <Image src={Circle} style={{width: 160, height: 160, marginTop: 20}}/>
                            <div></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="card-push d-flex mt-5 justify-content-end">
                        <div className="text-center" style={{marginRight: 90}}> 
                            <h4 id="touch">GET IN TOUCH</h4>
                            <span>we're here for you</span>
                        </div>
                        <div className="text-right">
                            <Image src={Sea} id="Image" />
                        </div>
                    </Col>
                    <Col>
                        <Form className="mt-5">
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="email" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput2">
                                <Form.Control type="text" placeholder="password" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows="8" placeholder="message.."/>
                            </Form.Group>
                            <Button block>SAY HELLO</Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-5"> 
                    <Col className="d-flex justify-content-center align-items-center" style={{marginTop: 50, marginBottom: 50}}>
                        <h1 style={{fontSize: 75, fontWeight: 700, color: 'gray'}}>WILD_</h1>
                    </Col>
                    <Col>
                        <Container>
                            <Row className="text-center mb-5 rules">
                                <Col className="text-left mb-3">
                                    <p className="font-weight-bold">LEARN MORE</p>
                                    <p>Tour</p>
                                    <p>Customers</p>
                                    <p>Privacy</p>
                                    <p>Now Features</p>
                                    <p>Education</p>
                                </Col>
                                <Col className="text-center">
                                    <p className="font-weight-bold">ABOUT</p>
                                    <p>Tour</p>
                                    <p>Customers</p>
                                    <p>Privacy</p>
                                    <p>Now Features</p>
                                    <p>Education</p>
                                </Col>
                                <Col className="text-right">
                                    <p className="font-weight-bold">SUPPORT</p>
                                    <p>Tour</p>
                                    <p>Customers</p>
                                    <p>Privacy</p>
                                    <p>Now Features</p>
                                    <p>Education</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="pb-4 pt-5" style={{background: '#808080'}}>
                    <Col md={10}>
                        <p style={{fontSize: 20, color: 'white', paddingLeft: 30}}>&copy; All rights reserved</p>
                    </Col>

                    <Col>
                        <div className="medsos"> 
                            <i className="fab fa-facebook"  style={{fontSize: 34, color: 'white'}} />
                            <i className="fab fa-instagram" style={{fontSize: 34, color: 'white'}} />
                            <i className="fab fa-twitter" style={{fontSize: 34, color: 'white'}} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Contact;