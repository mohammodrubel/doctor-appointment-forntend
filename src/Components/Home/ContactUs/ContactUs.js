import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
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
    return (
        <Container fluid className="contactUs">
            <Container>
                <Row>
                    <Col md={8} className="mx-auto text-center">
                        <h5 style={{color:'#11D0DD'}}>CONTACT US</h5>
                        <h3 style={{color:'white'}}>Stay Connected with us</h3>

                        <form className='p-4 border border-border-1' onSubmit={onSubmitform}>
                        <div style={{display:'flex',gap:'20px'}}>
                            <input required onBlur={onBlurHendeler} name='fullName' className='form-control mt-3 p-3 inputcontact' placeholder='Full Name' />

                            <input type='email' required onBlur={onBlurHendeler} name='email' className='form-control mt-3 p-3 inputcontact' placeholder='Email' />
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
        </Container>
    );
};

export default ContactUs;