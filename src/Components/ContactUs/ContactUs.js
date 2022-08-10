import React, { useState } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';
import CustomNavbar from '../../Components/Home/CustomNavbar/CustomNavbar'
import './ContactUs.css'
import {toast} from 'react-toastify';

const ContactUs = () => {
    const [update,setUpdate]=useState('')
    const onBlurHendeler = e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue[field]=value;
        setUpdate(newValue)
    }
    const onSubmitform = e =>{
        e.preventDefault()
        fetch('https://blooming-dusk-96529.herokuapp.com/contactus',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => {
            toast('Thank you for getting in touch with our authority')
            e.target.reset()
        })
    }
    const contactinfo = [
        {id:1,info:'Phone Number',information:'+152 534-468-854',icon:'fa-solid fa-phone'},
        {id:2,info:'Email',information:'contact@example.com',icon:'fa-solid fa-envelope'},
        {id:3,info:'Location',information:'C/54 Northwest Freeway, Suite 558',icon:'fa-solid fa-location-crosshairs'},
    ]
    return (
        <>
        <CustomNavbar />
            <Container>
            <Row>
                <Col>
                    <h2 style={{color:'#17D2BF',textAlign:'center'}}>Contact Us</h2>
                    <p style={{color:'#3A4256',textAlign:'center'}}>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                </Col>
            </Row>
            <Row>
                {
                    contactinfo.map(contactInfoo => <Col key={contactInfoo._id} md={4} className='mx-auto text-center mt-5'>
                        <div className='contactcontainer' style={{boxShadow:' 0 2px 10px rgb(0 0 0 / 0.2)'}}>
                            <i className={contactInfoo.icon} id="icon"></i>
                            <h4 className='contactIcon'>{contactInfoo.info}</h4>
                            <h6 style={{color:'#17D2BF'}}>{contactInfoo.information}</h6>
                        </div>
                    </Col>)
                }
            </Row>
            <Row className='mt-5'>
                <Col className='mx-auto' md={8}>
                    <h1 className='text-center'style={{color:'#3A4256'}}>Get in touch!</h1>
                    <form className='p-4 border border-border-1' onSubmit={onSubmitform}>
                        <div style={{display:'flex',gap:'20px'}}>
                            <input onBlur={onBlurHendeler}required name='fullName' className='form-control mt-3 p-3 inputcontact' placeholder='Full Name' />

                            <input onBlur={onBlurHendeler}required type='email' name='email' className='form-control mt-3 p-3 inputcontact' placeholder='Email' />
                        </div>
                        <input onBlur={onBlurHendeler}required name='subject' className='form-control mt-3 p-3 inputcontact' placeholder='Subject' />

                        <textarea onBlur={onBlurHendeler}required rows={6}  name='comments' className='form-control mt-3 p-3 inputcontact' placeholder='Comments' />

                        <div className='text-center'>
                            <button type='submit' className='customButton mt-4 w-75'>Send Message</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
    );
};

export default ContactUs;