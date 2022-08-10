import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../Firebase/FirebaseInit';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
    if(loading){
        return <div className='text-danger mx-auto text-center mt-5'><p className="spinner-grow" role="status"></p></div>
    }
    if(!user){
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default RequireAuth;