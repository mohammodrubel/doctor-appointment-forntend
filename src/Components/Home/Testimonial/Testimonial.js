import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import quote from '../../img/images/quote.png'
import testiimg1 from '../../img/images/people1.png'
import testiimg2 from '../../img/images/people2.png'
import testiimg3 from '../../img/images/people3.png'
import SingleTestimonial from './SingleTestimonial';

const Testimonial = () => {
    const testimonialinfo = [
        {_id:"1",description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',img:testiimg1,name:' Herry',place:'California'},


        {_id:"2",description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',img:testiimg2,name:'Clinton Herry',place:'NewYourk'},


        {_id:"3",description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',img:testiimg3,name:'Nafsar ',place:'SouthAfrica'}
    ]
    return (
        <>
            <Container>
            <Row>
                <Col className="col-12">
                    <div style={{display:'flex',justifyContent:'space-between'}}>

                        <div>
                            <h5 style={{color:'#16D2BE'}}>Testimonial</h5>
                            <h3 style={{color:'#3A4256'}}>What Our Patients Says</h3>
                        </div>
                        <img src={quote}/>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className='mt-5 mb-5'>
                {/* <Col md={4} className='mx-auto'> */}
                {
                testimonialinfo.map(singleTestimonial => <SingleTestimonial singleTestimonial={singleTestimonial} key={singleTestimonial._id}></SingleTestimonial>)
                }
                {/* </Col> */}
            </Row>
        </Container>
        </>
    );
};

export default Testimonial;