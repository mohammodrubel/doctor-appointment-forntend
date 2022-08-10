import React from 'react';
import './Footer.css'
import {Container,Row, Col} from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className='footer'>
            <Container>
                <Row>
                    <Col md={4} className='mx-auto text-center'>
                        <ul style={{textAlign:'start',color:'#3A4256'}}>
                        <h3>SERVICES</h3>
                            <li style={{listStyle:'none'}}>Emergency Checkup</li>
                            <li style={{listStyle:'none'}}>Monthly Checkup</li>
                            <li style={{listStyle:'none'}}>Weekly Checkup</li>
                            <li style={{listStyle:'none'}}>Deep Checkup</li>
                        </ul>
                    </Col>


                    <Col md={4} className='mx-auto text-center'>
                        <ul style={{textAlign:'start',color:'#3A4256'}}>
                        <h3>ORAL HEALTH</h3>
                            <li style={{listStyle:'none'}}>Fluoride Treatment</li>
                            <li style={{listStyle:'none'}}>Cavity Filling</li>
                            <li style={{listStyle:'none'}}>Teath Whitening</li>
                        </ul>
                    </Col>


                    <Col md={4} className='mx-auto text-center'>
                        <ul style={{textAlign:'start',color:'#3A4256'}}>
                        <h3>OUR ADDRESS</h3>
                            <li style={{listStyle:'none'}}>New York - 101010 Hudson</li>
                            
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;






