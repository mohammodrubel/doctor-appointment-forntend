import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import florida from '../../img/images/fluoride.png'
import cavity from '../../img/images/cavity.png'
import whitening from '../../img/images/whitening.png'
import Service from './Service/Service';
import tertment from '../../img/images/treatment.png'

const Services = () => {
    const services = [
        {_id:'1',name:'Fluoride Treatment',description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',img:florida},

        {_id:'2',name:'Cavity Filling',description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',img:cavity},

        {_id:'3',name:'Teeth Whitening',description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',img:whitening},
    ]
    return (
        <>
            <Container>
                    <Row style={{marginTop:'50px'}}>
                        <h4 style={{color:'#16D2C2',textAlign:'center'}}>Our Services</h4>
                        <h3 style={{textAlign:'center'}} className='simplecolor'>Services We Provide</h3>
                        {/* <Col  md={4}> */}
                        {
                            services.map(singleService => <Service key={singleService._id} singleService={singleService}></Service>)
                        }
                        {/* </Col> */}
                    </Row>
            </Container>
            
            <Container style={{marginTop:"50px",marginBottom:"50px"}}>
                <Row style={{marginTop:'50px',display:'flex',alignItems:'center'}}>
                    <Col md={6} style={{textAlign:'center'}}>
                        <img src={tertment} className='img-fluid w-75'/>
                    </Col>

                    <Col md={6}>
                        <h1 style={{color:'#3A4256'}}>Exceptional Dental <br/> Care, on Your Terms</h1>
                        <p style={{color:'#3A4256'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className='customButton'>GET STARTED</button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Services;