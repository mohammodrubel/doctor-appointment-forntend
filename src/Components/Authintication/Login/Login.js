import React, { useEffect } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/FirebaseInit';
import { useForm } from "react-hook-form";
import useToken from '../../../hooks/useToken';
import CustomNavbar from '../../Home/CustomNavbar/CustomNavbar'
import Footer from '../../Home/Footer/Footer'

const Login = () => {
    const [signInWithGoogle, googleuser, googleloading, googleerror,] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token]= useToken(user || googleuser)
    // const onSubmit = data => console.log(data);
   useEffect(()=>{
    if(user  || googleerror){
        navigate(from, { replace: true });
    }
   },[user,googleerror,from,navigate])
    if(loading || googleloading){
        return  <div className='text-danger mx-auto text-center mt-5'><p className="spinner-grow" role="status"></p></div>
    }
    let singInError;
    if(error || googleerror){
       singInError = <p style={{color:'red'}}>{error?.message || googleerror?.message}</p>
    }
    const onSubmit=  data =>{
        signInWithEmailAndPassword(data.email,data.password)
    } 
    return (
        <>
            <CustomNavbar />
            <Container>
            <Row>
                <h3 className='text-center mt-5'>Login</h3>
                <Col md={5} className='mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <input className='form-control mt-4 p-2'placeholder='Email' {...register("email", { required: true })} />
                        {errors.email && <p style={{color:'red'}}>Email is required</p>}

                        <input className='form-control mt-4 p-2'placeholder='Password' {...register("password", { required: "Password is required" })} />
                        <p style={{color:'red'}}>{errors.password?.message}</p>

                        <button type='submit' className='customButton w-100'>Sign Up</button>
                        <div className='text-center'><b>{singInError}</b></div>
                        <Link to="/registration" style={{color:'#17D2BC'}}><b>Create Account</b></Link>
                        <p className='text-center'>....................OR....................</p>
                        <button className='customButton w-100' onClick={()=>signInWithGoogle()}>CONTINUE WITH GOOGLE</button>
                    </form>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
};

export default Login;