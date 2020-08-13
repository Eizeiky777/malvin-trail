import React from 'react';
import { Container, Row, Col, Image   
} from 'react-bootstrap';
import './journal.css';

// assets
import triangleOne from '../../assets/img/img_floating_triangle.png';
import DisplayProfile from '../../assets/img/dp.png';
import Divider from '../../assets/img/img_divider.png';

const Journal = () => {

    return(
        <>
            <Container className="journal" >
                <Row>
                    <Col>
                        <div className="d-flex justify-content-between">
                            <h1 style={{fontWeight: 900, marginBottom:30, marginTop: 20, fontSize: 54}}>JOUR-N<br />AL</h1>
                            <Image src={triangleOne} style={{width: 110, height: 110, marginTop: 60}}/>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop: 70}}>
                    <Col>
                        <div style={{marginRight: 90}}>
                            <h1 style={{fontSize: 160, color: 'white', textAlign: 'right', fontWeight: 'bolder',}}>714</h1>
                            <h6 style={{fontSize: 19, color: 'white', letterSpacing: 2, textAlign: 'right', marginTop: 1, marginRight: 10}}><a href="/journal">SHARED STORIES</a></h6>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <div className="d-flex flex-column justify-content-center text-center">
                            <h1 style={{color: 'white'}}>WEEKLY TOPICS</h1>
                            <h6 style={{color: '#9C9C9C', fontWeight: 400}}>written by people for people</h6>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5 pb-5">
                    <Col md={1}></Col>
                    <Col md={4}>
                        <div>
                            <h4 style={{color: 'white'}}>The Summit</h4>
                            <p style={{color: '#9C9C9C', fontWeight: 400}}>
                                You only live once. A phrase adopted and since-overused by popular culture, 
                                it is actually rooted in truth.
                                You should always be pushing your boundaries, 
                                striving for your most difficult goals, 
                                and scaring yourself every day with something new.
                            </p>
                            <div className="d-flex align-items-center">
                                <Image src={DisplayProfile} width="40" height="40" roundedCircle className="mr-3"/> 
                                <span style={{color: '#9C9C9C', fontWeight: 400}}>by Malvin Dastin</span>
                            </div>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center" md={2}>
                        <div className="bg-light pb-1 px-1 rounded-circle">
                            <Image src={Divider} roundedCircle  />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <h4 style={{color: 'white'}}>The Summit</h4>
                            <p style={{color: '#9C9C9C', fontWeight: 400}}>
                                You only live once. A phrase adopted and since-overused by popular culture, 
                                it is actually rooted in truth.
                                You should always be pushing your boundaries, 
                                striving for your most difficult goals, 
                                and scaring yourself every day with something new.
                            </p>
                            <div className="d-flex align-items-center">
                                <Image src={DisplayProfile} width="40" height="40" roundedCircle className="mr-3"/> 
                                <span style={{color: '#9C9C9C', fontWeight: 400}}>by Malvin Dastin</span>
                            </div>
                        </div>  
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </>
    )
}

export default Journal;