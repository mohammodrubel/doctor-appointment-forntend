import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import chair from '../../img/images/chair.png'
import { Container ,Row,Col} from 'react-bootstrap';


const AppointmentBanner = ({date,setDate}) => {
    // const [date, setDate] =useState(new Date())
    return (
        <Container>
            <Row>
                <Col md={6} className='mx-auto'>
                    <DayPicker
                         mode="single"
                         selected={date}
                         onSelect={setDate}
                    />
                </Col>
                <Col md={6} className='mx-auto'>
                <img src={chair}  className='img-fluid'/> 
                </Col>
            </Row>
        </Container>
    );
};

export default AppointmentBanner;