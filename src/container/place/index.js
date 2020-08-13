import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Container, Row, Col, Image, Button
} from 'react-bootstrap';
import './place.css';

// assets
import One from '../../assets/img/one.jpg';
import DisplayProfile from '../../assets/img/dp.png';
import Second from '../../assets/img/carousel-3.png';

const Place = () => {
    return(
        <>
            <Container style={{background: '#f5f5f5'}}>
                <h1 style={{textAlign: 'center', fontSize: 45, fontWeight: 500, letterSpacing: 2 }} className="pt-5">AGENDAS</h1>
                <hr style={{ width: '50%'}} className="pb-5"/>
                <Row className="pl-3">
                    <Col style={{margin: 0, padding: 0}}>
                        <div>
                            <Image src={One} width="100%" height="400" />
                        </div>
                    </Col>
                    <Col >
                        <Container>
                            <Row>
                                <Col>
                                    <h1>DAY BY DAY</h1>
                                    <h6>Adventure</h6>
                                    <p>
                                        With all the outstanding images and stories 
                                        shared daily by our community, 
                                        we wanted to create something that would 
                                        let you tap into those reserves of inspiration.
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <Image src={DisplayProfile} width="40" height="40" roundedCircle className="mr-3"/> 
                                        <span style={{color: '#9C9C9C', fontWeight: 400}}>by Malvin Dastin</span>
                                    </div>
                                </Col>
                                <Col>
                                    <h1>
                                        LET OTHERS SEE
                                        THE BEAUTY OF THE
                                        WORLD CAPTURED
                                        BY YOUR EYES.
                                    </h1>
                                    <h6 className="my-5">Be a part of community !</h6>
                                    <Button block variant="outline-primary" style={{borderRadius: 30}}>JOIN US</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                    <div style={{width:'100%',marginTop: 25, marginBottom: 25, height: 2, background: 'light', content:""}}></div>
                <Row className="py-4 pr-3">
                    <Col>
                        <h3 className="text-center font-weight-bold mb-5">FEATURED STORIES</h3>
                        <div className="d-flex justify-content-between align-items-center mx-3" >
                            <div style={{width: 160, height: 280, textAlign: 'center', border: '2px solid #dddddd', borderRadius: 10  }}>
                                <Image src={DisplayProfile} width="60" height="60" roundedCircle className="m-4"/> 
                                <p style={{color: '#9C9C9C', fontWeight: 400, fontSize: 12}}>Photography</p>
                                <h6 className="mt-4">Touring to the any places</h6>
                                <span style={{color: '#9C9C9C', fontWeight: 400, fontSize: 12}}>By Malvin Dastin</span>
                                <div className="text-right mt-4 mr-4">
                                    <i className="fas fa-arrow-right" />
                                </div>
                            </div>
                            <div style={{width: 170, height: 280, textAlign: 'center', border: '2px solid #dddddd', borderRadius: 10  }}>
                                <Image src={DisplayProfile} width="60" height="60" roundedCircle className="m-4"/> 
                                <p style={{color: '#9C9C9C', fontWeight: 400, fontSize: 12}}>Photography</p>
                                <h6 className="mt-4">Touring to the any places</h6>
                                <span style={{color: '#9C9C9C', fontWeight: 400, fontSize: 12}}>By Malvin Dastin</span>
                                <div className="text-right mt-4 mr-4">
                                    <i className="fas fa-arrow-right" />
                                </div>
                            </div>
                            <div style={{width: 170, height: 280, textAlign: 'center', border: '2px solid #dddddd', borderRadius: 10  }}>
                                <Image src={DisplayProfile} width="60" height="60" roundedCircle className="m-4"/> 
                                <p style={{color: '#9C9C9C', fontWeight: 400, fontSize: 12}}>Photography</p>
                                <h6 className="mt-4">Touring to the any places</h6>
                                <span style={{color: '#9C9C9C', fontWeight: 400, fontSize: 12}}>By Malvin Dastin</span>
                                <div className="text-right mt-4 mr-4">
                                    <i className="fas fa-arrow-right" />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col style={{margin: 0, padding: 0}} className="places">
                        <div style={{position: 'relative'}}>
                            <Image src={Second} width="100%" height="400" />
                            <div style={{position: 'absolute', top: '10%', right: '50%', left: 0, textAlign: 'center', width: '100%' }}>
                                <h2>THE STORY OF EACH</h2>
                                <h1 className='mb-4'>PLACE</h1>
                                <span style={{border: '1px solid gray', borderRadius: 5, padding: 10, color: '#dddddd' }} >Explore</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center" style={{marginTop: 90, marginBottom: 90}}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Place;