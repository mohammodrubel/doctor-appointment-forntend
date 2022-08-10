import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import CustomNavbar from '../../Components/Home/CustomNavbar/CustomNavbar'
import Footer from '../Home/Footer/Footer';
import aboutimg from '../img/images/about.jpg'

const AboutUs = () => {
    const abouts = [
        {id:1,name:'Visit a Doctor',description:'We hire the best specialists to deliver top-notch diagnostic services for you.'},
        {id:2,name:'Find a Pharmacy',description:'We provide the a wide range of medical services, so every person could have the opportunity.'},
        {id:3,name:'Find a Lab',description:'We use the first-className medical equipment for timely diagnostics of various diseases.'}
    ]
    return (
        <>
        <CustomNavbar/>
            <Container>
                <Row>
                    <Col md={6} className='mx-auto'>
                        <h2 style={{color:'#17D2BE'}}>Company Profile</h2>
                        <p style={{color:'#3A4256'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctus est interdum pretium. Fusce id tortor fringilla, suscipit turpis ac, varius ex. Cras vel metus ligula. Nam enim ligula, bibendum a iaculis ut, cursus id augue. Proin vitae purus id tortor vehicula scelerisque non in libero.<br /><br />

                        Nulla non turpis sit amet purus pharetra sollicitudin. Proin rutrum urna ut suscipit ullamcorper. Proin sapien felis, dignissim non finibus eget, luctus vel purus. Pellentesque efficitur congue orci ornare accumsan. Nullam ultrices libero vel imperdiet scelerisque. Donec vel mauris eros.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img src={aboutimg} className='img-fluid mt-5'/>
                    </Col>
                </Row>
                <Row style={{marginTop:'30px'}}>
                    {
                       abouts.map(singleAbout => <Col md={4} style={{boxShadow:' 0 2px 10px rgb(0 0 0 / 0.2)'}} className="mx-auto p-3 m-3" key={singleAbout._id}>
                            <div style={{textAlign:'center'}} className='p-2'>
                                <h3 style={{color:'#17D2BE'}}>{singleAbout.name}</h3>
                                <p style={{color:'#3A4256'}}>{singleAbout.description}</p>
                            </div>
                       </Col>) 
                    }
                </Row>
        </Container>
        <Footer/>
        </>
    );
};

export default AboutUs;