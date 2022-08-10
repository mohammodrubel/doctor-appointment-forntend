import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import { useSignInWithGoogle,useUpdateProfile ,useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/FirebaseInit';
import './Registration.css'
import { useForm } from "react-hook-form";
import useToken from '../../../hooks/useToken';
import CustomNavbar from '../../Home/CustomNavbar/CustomNavbar'
import Footer from '../../Home/Footer/Footer'


const Registration = () => {
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, errorupdate] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const [token]= useToken(user || googleuser)
    if(user || googleuser){
        // console.log(user)
    }
    if(loading || googleloading || updating){
        return  <div className='text-danger mx-auto text-center mt-5'><p className="spinner-grow" role="status"></p></div>
    }
    let singInError;
    if(error || googleerror || errorupdate){
       singInError = <p style={{color:'red'}}>{error?.message || googleerror?.message || errorupdate?.message}</p>
    }
    const onSubmit = async data => {
        if(data.password !== data.password2){
            return alert('password did not matched!')
            
        }
        await createUserWithEmailAndPassword(data.email,data.password)
        await updateProfile({displayName:data.name})
        navigate('/')
    };
    return (
        <>
            <CustomNavbar />
            <Container>
            <Row>
                <h3 className='text-center mt-5'>Sign Up</h3>
                <Col md={5} className='mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <input className='form-control mt-4 p-2'placeholder='Name' {...register("name", { required: true })} />
                        {errors.name && <p style={{color:'red'}}>Name is required</p>}

                        <input className='form-control mt-4 p-2'placeholder='Email' {...register("email", { required: true })} />
                        {errors.email && <p style={{color:'red'}}>Email is required</p>}

                        <input className='form-control mt-4 p-2'placeholder='Password' {...register("password", { required: "Password is required" })} />
                        <p style={{color:'red'}}>{errors.password?.message}</p>

                        <input className='form-control mt-4 p-2'placeholder='Re-Password' {...register("password2", { required: "Re-Password is required" })} />
                        <p style={{color:'red'}}>{errors.password2?.message}</p>

                        <button type='submit' className='customButton w-100'>Sign Up</button>
                        <div className='text-center'><b>{singInError}</b></div>
                        <Link to="/login" style={{color:'#17D2BC'}}><b>already registered? pleace Login</b></Link>
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

export default Registration;