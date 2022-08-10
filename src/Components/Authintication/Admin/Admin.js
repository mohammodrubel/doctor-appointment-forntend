import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../Firebase/FirebaseInit';



    const Admin = ({children,...rest}) => {
        const [admin,setAdmin]=useState(true)
        const [user, loading, error] = useAuthState(auth);

        useEffect(()=>{
        fetch(`https://blooming-dusk-96529.herokuapp.com/user/${user?.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))

        },[user?.email])
        
        let location = useLocation()
    
        if(loading){
            return <div style={{textAlign:'center'}}><div className="spinner-border text-warning" role="status"></div></div>
        };
    
            if(user?.email && admin){
                return children;
            }
            return <Navigate to="/" state={{from:location}} />
    };

export default Admin;