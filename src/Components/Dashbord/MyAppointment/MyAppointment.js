import React, { useState } from 'react';
import { Container,Row,Col, Table } from 'react-bootstrap';

const MyAppointment = () => {
    const [appointment,setAppointment]= useState([])
    fetch('https://blooming-dusk-96529.herokuapp.com/booking')
    .then(res => res.json())
    .then(data => setAppointment(data))

    const handleDeleteDataFromDatabase = id =>{
        const confirmDelete = window.confirm('are you sure you want to delete? ')
        if(confirmDelete){
         const url = `https://blooming-dusk-96529.herokuapp.com/booking/${id}`
         fetch(url,{
             method:'DELETE',
         })
         .then(res => res.json())
         .then(data =>{
             if(data.deletedCount > 0){
                 alert('data Delete from Database successfully')
                 const remainingUsers = appointment.filter(user =>user._id !== id)
                 setAppointment(remainingUsers)
             }
         })
        }
     }


    return (
        <Container fluid>
            <Row>
                <Col className='mx-auto text-center'>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>SERVICE</th>
                                <th>TIME</th>
                                <th>Date</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointment.map(singleInfo => <tr key={singleInfo._id}>
                                    <td>{singleInfo.patientName}</td>
                                    <td>{singleInfo.tretmentName}</td>
                                    <td>{singleInfo.slot}</td>
                                    <td>{singleInfo.tretmentDate}</td>
                                    <td>{singleInfo.patientPhone}</td>
                                    <td>{singleInfo.patientEmail}</td>
                                    <td style={{cursor:'pointer'}}onClick={()=>handleDeleteDataFromDatabase(singleInfo._id)}>delete</td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default MyAppointment;