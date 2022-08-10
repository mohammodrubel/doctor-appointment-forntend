import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import doctor from '../../img/images/doctor-small.png'
import './DoctorBanner.css'

const DoctorBanner = () => {
    return (
        <Container fluid className='appointment'> 
            <Container>
                <Row style={{display:'flex',alignItems:'center'}}>
                    <Col md={6} className="mx-auto">
                        <img src={doctor} style={{marginTop:'-100px'}} className='img-fluid'/>
                    </Col>
                    <Col md={6} className="mx-auto"  style={{paddingBottom:'20px'}}>
                    <h5 style={{color:"#16D2BE"}}>Appointment</h5>
                    <p style={{color:'white'}}>
                    Make an appointment Today
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    </p>
                    <button className='customButton'>GET STARTED</button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default DoctorBanner;