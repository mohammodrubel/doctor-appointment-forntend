import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import './Info.css'


const Info = () => {
    
    return (
        <Container>
            <Row>
                <Col md={4} className='col-12 mt-5'> 
                    <div className='mainInfo'>
                        <i className="fa-solid fa-clock"style={{fontSize:'50px',padding:'10px'}} />
                        <div>
                            <h3>Opening Hours</h3>
                            <p>Lorem Ipsum is simply dummy text of the pri</p>
                        </div>
                    </div>
                </Col>

                <Col md={4} className='col-12 mt-5'> 
                    <div className='mainInfo extrabackground'>
                        <i className="fa-solid fa-location-dot"style={{fontSize:'50px',padding:'10px'}} />
                        <div>
                            <h3>Visit our location</h3>
                            <p>Brooklyn, NY 10036, United States</p>
                        </div>
                    </div>
                </Col>

                <Col md={4} className='col-12 mt-5'> 
                    <div className='mainInfo'>
                        <i className="fa-solid fa-phone-volume"style={{fontSize:'50px',padding:'10px'}} />
                        <div>
                            <h3>Contact us now</h3>
                            <p>+880 1907626245</p>
                        </div>
                    </div>
                </Col>
                
            </Row>
        </Container>
    );
};

export default Info;