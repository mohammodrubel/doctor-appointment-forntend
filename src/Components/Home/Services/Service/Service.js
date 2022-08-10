import React from 'react';
import { Col} from 'react-bootstrap';

const Service = ({singleService}) => {
    return (
        <Col md={4} className='mx-auto text-center'style={{marginTop:'60px'}}>
            <img src={singleService.img} />
            <h3 style={{color:'#3A4256'}}>{singleService.name}</h3>
            <p style={{color:'#3A4256'}}>{singleService.description}</p>
        </Col>
    );
};

export default Service;