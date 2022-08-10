import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import chair from '../../img/images/chair.png'
import './Banner.css'

const Banner = () => {
    return (
        <Container className='banner' fluid>
            <Container >
                <Row style={{display:'flex',alignItems:'center'}}className='mt-4'>
                    <Col md={7} className='mt-5'>
                        <h1 className='simplecolor'>Your New Smile Starts<br/> Here</h1>
                        <p className='simplecolor'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<br /> Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className='customButton'>Get Started</button>
                    </Col>

                    <Col md={5} className='mt-5'>
                        <img src={chair} className='img-fluid'/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Banner;