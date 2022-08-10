import React, { useState } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email,setEmail] = useState('')

    const handleOnSubmit = e =>{
        setEmail(e.target.value)
    }
    const formOnSubmit = e =>{
        e.preventDefault()
        const information = {email}
        fetch('https://blooming-dusk-96529.herokuapp.com/user/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(information)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('data update successfully')
        })
    }


    return (
        <Container fluid>
            <Row>
                <Col className='mt-5 mx-auto' md={5}>
                    <form className='mt-5 text-center ' onSubmit={formOnSubmit}>
                        <input name='email' onBlur={handleOnSubmit} className='p-3 form-control admininput' placeholder='Make New Admin' /> <br />
                        <button type='submit' className='customButton w-75'>Create Admin</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default MakeAdmin;