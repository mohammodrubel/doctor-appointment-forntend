import React, { useEffect, useState } from 'react';
import { Container ,Row,Col,Table} from 'react-bootstrap';

const WebsiteUser = () => {
    const [webUserEmail,setWebUserEmail]= useState([])

    useEffect(()=>{
        fetch('https://blooming-dusk-96529.herokuapp.com/user')
        .then(res => res.json())
        .then(data => setWebUserEmail(data))
    },[])

    return (
        <Container>
            <Row>
                <Col>
                <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Role</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                webUserEmail.map(webuser => <tr key={webuser._id}>
                                    <td>{webuser.email}</td>
                                    <td>{webuser.role}</td>
                                    
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default WebsiteUser;