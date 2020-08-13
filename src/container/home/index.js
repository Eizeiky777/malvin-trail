import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Image   
} from 'react-bootstrap';
import './home.css';

// assets
import { MalvinData } from '../../assets/img';
import FloatCircle from '../../assets/img/float-circle.png';
import DisplayProfile from '../../assets/img/dp.png';

const Home = () => {
    return (
        <>  
            <Container className="Home">
                <Row>
                    <Col>
                    <Navbar bg="light" expand="lg" className="mt-4 border rounded"> 
                        <Navbar.Brand href="#home">MD</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <NavDropdown title="Search" id="dropdown-basic-button" >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">About</Nav.Link>
                                <Nav.Link href="#link">Gallery</Nav.Link>
                                <Nav.Link href="#link">Journal</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-5">
                        <div className="mt-3">
                            <p style={{marginBottom: 0, letterSpacing: 2}}>life for awesomeness</p>
                            <p style={{fontSize: 50, fontWeight: 600, letterSpacing: 5 }}>ADVENTURE</p>
                            <span style={{fontSize: 15, color: '#00000080', border: '1px solid #dddddd', borderRadius: 10, padding: 10}}>Get Inspired</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container style={{background: '#f5f5f5'}}>
                <Row className="d-flex justify-content-center">
                    <Col className="my-3">
                        <div> 
                            <span style={{fontSize: 40, fontWeight: 900,lineHeight: '50px' }}>IMPRES-<br/>SIVE
                            </span>
                            <p>Shots of the week !</p>
                            <div className="d-flex align-items-center">
                                <Image src={DisplayProfile} width="50" height="50" roundedCircle className="mr-3"/> 
                                <span style={{fontWeight: 70}}>by Malvin Dastin</span>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div style={{marginTop: '-90px', marginBottom: 90, display: 'flex', alignItems: 'center'}}>
                            <Image src={MalvinData[0].image} rounded width='250' style={{border: '10px solid white', marginRight: 10}} />
                            <div style={{ width: 250, display: 'flex', flexWrap: 'wrap'}}>
                                <Image src={MalvinData[1].image} rounded width='120' height='120' style={{border: '5px solid white', marginRight: 5}} />
                                <Image src={MalvinData[2].image} rounded width='120' height='120'  style={{border: '5px solid white', marginRight: 5}} />
                                <Image src={MalvinData[3].image} rounded width='120' height='120'  style={{border: '5px solid white', marginRight: 5}} />
                                <Image src={MalvinData[4].image} rounded width='120' height='120'  style={{border: '5px solid white', marginRight: 5}} />
                                <span className='p-1'><a href="/about">Check more here...</a></span>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="text-center">
                            <Image src={FloatCircle} width='150' style={{marginTop: '-50px'}} />
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </>
    );
}

export default Home;
