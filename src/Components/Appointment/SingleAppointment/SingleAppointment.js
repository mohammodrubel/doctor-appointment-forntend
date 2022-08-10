import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import ButtonModal from '../ButtonModal/ButtonModal';
import {Button} from 'react-bootstrap';


const SingleAppointment = ({singleServiceAppointment,format}) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const {name,slots} = singleServiceAppointment
    return (
        <Col md={4} className='mx-auto mt-5 text-center'>
            <div style={{boxShadow:' 0 2px 10px rgb(0 0 0 / 0.2)',padding:'20px'}}>
            <h4 style={{color:'#12D0D8'}}>{name}</h4>
            <p>
                {
                    slots.length >0 ? <span>{slots[0]}</span> : <span style={{color:'red',fontWeight:'500'}}>Try another day</span>
                }
            </p>
            <p style={{color:'gray'}}>{slots.length} {slots.length > 1 ?  'spaces' : 'space'} Abaliable</p>
            <Button className='customButton' disabled={slots.length === 0} onClick={handleShow}>BOOK APPOINTMENT</Button>
            <ButtonModal name={name}format={format} slots={slots} id={singleServiceAppointment._id} show={show} handleClose={handleClose}></ButtonModal>
            </div>
        </Col>
    );
};

export default SingleAppointment;