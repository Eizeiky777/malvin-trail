import React from 'react';
import { Container, Row, Col, Image   
} from 'react-bootstrap';
import './about.css';

// assets
// import MalvinData from '../../assets/img';
import squareOne from '../../assets/img/float-square-1.png';
import squareTwo from '../../assets/img/float-square-2.png';

const About = () => {

    return(
        <>
            <Container className="pb-5" style={{background: '#f5f5f5'}}>
                <Row>
                    <Col md={8} className="pl-4">
                        <h1 style={{fontWeight: 900, marginBottom:30, marginTop: 20}}>ABOUT</h1>
                        <h4 className="font-weight-light">Home to everyone's best photos</h4>
                        <p>
                            Wild_ is a photo community and marketplace for discovering, sharing, buying,<br /> 
                            and selling inspiring photography powered by creative people around the world.<br /><br />
                            In our community, you can share your photos worldwide.<br /> 
                            From mobile photographers to professionals, <br />
                            Wild_ has the products and features to take your photography to the next level.<br /><br />
                            We are a photography community unlike any other. <br />
                            We help you to explore 50 million inspiring photos, <br />
                            to connect with other enthusiasts and to learn more about the craft.
                        </p>
                        <div className="text-center mt-5">
                            <span>Learn more..</span>
                        </div>
                    </Col>
                    <Col style={{position: "relative"}}>
                            <Image src={squareTwo} width="140" height="140" className="mr-3" style={{position: 'absolute', bottom: 0, left: 0}} /> 
                            <Image src={squareOne} width="140" height="140" className="mr-3" style={{position: 'absolute', bottom: 210, left: 90}}/> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;