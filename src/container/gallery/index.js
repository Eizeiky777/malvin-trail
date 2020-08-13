import React, { useState } from 'react';
import { Carousel, Container, Col, Row, Image   
} from 'react-bootstrap';
import './gallery.css';

// assets
import { CarouselData } from '../../assets/img';
import xxx from '../../assets/img/img_xxx.png';



const MyCarousel = ({ datas }) => {
    
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return(
        <>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{ height: '400', width: '600px', border:'5px solid black'}}>
                <Carousel activeIndex={index} onSelect={handleSelect} >
                    {
                        datas.map((e, index) => {
                            return(
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={e.image}
                                        alt="First slide"
                                        style={{objectFit: 'fill'}}
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
        </>
    )
}

const Gallery = () => {
    return(
        <>  
            <Container style={{background: '#f5f5f5'}}>
                <Row className="mb-5">
                    <Col>
                        <h1 className="text-center" style={{fontWeight: 900, marginBottom: 50}}>GALLERY</h1>
                        {<MyCarousel datas={CarouselData} />}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container className="text-center">
                            <Row className='d-flex justify-content-between align-items-center my-5'>
                                <Col  className="text-left" >
                                    <Image src={CarouselData[0].image} style={{marginBottom: 21, width: 200, height: 200, boxShadow: '-1px 1px 8px 1px #888888'}}/>
                                    <div className="text-left" style={{ marginBottom: 21,}}>
                                        <h6>Bromo mountains</h6>
                                        <span>August, 11 2020</span>
                                    </div>
                                </Col>
                                <Col  className="text-left" >
                                    <Image src={CarouselData[1].image} style={{marginBottom: 21, width: 200, height: 200, boxShadow: '-1px 1px 8px 1px #888888'}}/>
                                    <div className="text-left" style={{ marginBottom: 21,}}>
                                        <h6>Bromo mountains</h6>
                                        <span>August, 11 2020</span>
                                    </div>
                                </Col>
                                <Col  className="text-left" >
                                    <Image src={CarouselData[2].image} style={{marginBottom: 21, width: 200, height: 200, boxShadow: '-1px 1px 8px 1px #888888'}}/>
                                    <div style={{ marginBottom: 21,}}>
                                        <h6>Bromo mountains</h6>
                                        <span>August, 11 2020</span>
                                    </div>
                                </Col>
                                <Col  className="text-left" >
                                    <Image src={CarouselData[3].image} style={{marginBottom: 21, width: 200, height: 200, boxShadow: '-1px 1px 8px 1px #888888'}}/>
                                    <div className="text-left" style={{ marginBottom: 21,}}>
                                        <h6>Bromo mountains</h6>
                                        <span>August, 11 2020</span>
                                    </div>
                                </Col>
                                <Col  className="text-left" >
                                    <Image src={CarouselData[1].image} style={{marginBottom: 21, width: 200, height: 200, boxShadow: '-1px 1px 8px 1px #888888'}}/>
                                    <div className="text-left" style={{ marginBottom: 21,}}>
                                        <h6>Bromo mountains</h6>
                                        <span>August, 11 2020</span>
                                    </div>
                                </Col>
                                <Col  className="text-left" >
                                    <Image src={CarouselData[0].image} style={{marginBottom: 21, width: 200, height: 200, boxShadow: '-1px 1px 8px 1px #888888'}}/>
                                    <div className="text-left" style={{ marginBottom: 21,}}>
                                        <h6>Bromo mountains</h6>
                                        <span>August, 11 2020</span>
                                    </div>
                                </Col>
                                <Col  className="text-left" >
                                    <Image src={CarouselData[0].image} style={{marginBottom: 21, width: 200, height: 200, boxShadow: '-1px 1px 8px 1px #888888'}}/>
                                    <div className="text-left" style={{ marginBottom: 21,}}>
                                        <h6>Bromo mountains</h6>
                                        <span>August, 11 2020</span>
                                    </div>
                                </Col>
                                <Col  className="text-left" >
                                    <Image src={CarouselData[0].image} style={{marginBottom: 21, width: 200, height: 200, boxShadow: '-1px 1px 8px 1px #888888'}}/>
                                    <div className="text-left" style={{ marginBottom: 21,}}>
                                        <h6>Bromo mountains</h6>
                                        <span>August, 11 2020</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-right" style={{marginTop: '-50px', marginRight: 100}}>
                                    <div>
                                    <a href="/gallery"><span style={{paddingRight: 20, fontSize: 18}}>Explore gallery...</span> </a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center" style={{marginTop: 50, marginBottom: 50, marginRight: 100}}>
                                    <Image src={xxx}  />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </>
    )
}


export default Gallery;