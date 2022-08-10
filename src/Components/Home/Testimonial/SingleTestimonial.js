import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleTestimonial = ({singleTestimonial}) => {
    return (
        <Col md={4} className='mx-auto mt-5 mb-5 text-center'>
            <div className='mt-5' style={{textAlign:'start',boxShadow:' 0 2px 10px rgb(0 0 0 / 0.2)',padding:'20px'}}>
                <p style={{color:'#3A4256'}}>{singleTestimonial.description}</p>
                <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                    <img src={singleTestimonial.img} className='img-fluid'/>
                    <div>
                        <h5>{singleTestimonial.name}</h5>
                        <h6>{singleTestimonial.place}</h6>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default SingleTestimonial;