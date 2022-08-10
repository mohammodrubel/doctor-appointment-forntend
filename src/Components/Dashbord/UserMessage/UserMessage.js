import React, { useEffect, useState } from 'react';
import { Container ,Row,Col,Card} from 'react-bootstrap';

const UserMessage = () => {

    const [message,setMessage]= useState([])

    useEffect(()=>{
        fetch('https://blooming-dusk-96529.herokuapp.com/contactus')
        .then(res => res.json())
        .then(data => setMessage(data))
    },[])

    const handleDeleteDataFromDatabase = id =>{
        const confirmDelete = window.confirm('are you sure you want to delete? ')
        if(confirmDelete){
         const url = `https://blooming-dusk-96529.herokuapp.com/contactus/${id}`
         fetch(url,{
             method:'DELETE',
         })
         .then(res => res.json())
         .then(data =>{
             if(data.deletedCount > 0){
                 alert('data Delete from Database successfully')
                 const remainingUsers = message.filter(user =>user._id !== id)
                 setMessage(remainingUsers)
             }
         })
        }
     }


    return (
        <Container>
            <Row>
                {
                    message.map(userMessage => <Col className='mx-auto mt-4' md={10}>
                        <Card>
                        <Card.Header>{userMessage.fullName}</Card.Header>
                            <Card.Body>
                                <Card.Title>Subject: {userMessage.subject}</Card.Title>
                                <b>{userMessage.email}</b>
                                <Card.Text>
                                    {userMessage.comments}
                                </Card.Text>
                                <button className='customButton' onClick={()=>handleDeleteDataFromDatabase(userMessage._id)}>Delete User Message</button>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default UserMessage;