import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Container ,Row} from 'react-bootstrap';
import SingleAppointment from '../SingleAppointment/SingleAppointment';


const AvailableAppointment = ({date}) => {
    const [serviceData,setServiceData] = useState([])
    
    const formatetdDate = format(date,'pp')
    useEffect(()=>{
        fetch(`https://blooming-dusk-96529.herokuapp.com/abalable?date=${formatetdDate}`)
        .then(res => res.json())
        .then(data => setServiceData(data))
    },[formatetdDate])


    return (
        <Container>
            <Row className='mt-5'>

                <div>
                    <h3 style={{color:'#16D2C0',textAlign:'center'}}>Available Services on {format(date, 'PP')}</h3>
                    <h5 style={{color:'#3A4256',textAlign:'center'}}>Please select a service.</h5>
                    
                </div>

                {
                    serviceData.map(singleServiceAppointment => <SingleAppointment
                    key={singleServiceAppointment._id}
                    singleServiceAppointment={singleServiceAppointment}
                    format={format(date, 'PP')}
                    >

                    </SingleAppointment>)
                }
            </Row>
        </Container>
    );
};

export default AvailableAppointment;