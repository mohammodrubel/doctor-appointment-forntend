import React from 'react';
import { Modal } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/FirebaseInit';
import {toast} from 'react-toastify';


const ButtonModal = ({handleClose,show,name,format,slots,id}) => {
    const [user, loading] = useAuthState(auth);
    if(loading){
        return  <div className='text-danger mx-auto text-center mt-5'><p className="spinner-grow" role="status"></p></div>
    }
    // console.log(format)
    const bookingData = e =>{
        e.preventDefault()
        const slot = e.target.slot.value;
        const phone = e.target.phone.value;
        const booking ={
            tretmentId:id,
            tretmentName:name,
            tretmentDate:format,
            slot,
            patientName:user.displayName,
            patientEmail:user.email,
            patientPhone:phone
            
        }
        fetch('https://blooming-dusk-96529.herokuapp.com/booking',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast(`Appointment is set ${format} at ${slot}`)
            }else{
                toast.error(`you already have an  Appointment on  ${data.booking?.slot} `)
            }
            handleClose()
        })

       
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title style={{color:'#12D0D8'}}>Booking For: {name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* main body  */}
                    <form onSubmit={bookingData}>
                        <input className='form-control p-2 mt-3' name='format' disabled defaultValue={format} />
                        <select className="form-select p-2 mt-3"required name='slot' aria-label="Default select example">
                            {slots.map((slot,index) => <option selected  defaultValue={slot} key={index}>{slot}</option>)}
                        </select>
                        <input className='form-control p-2 mt-3'name='name' disabled defaultValue={user?.displayName} />
                        <input className='form-control p-2 mt-3'name='email' disabled defaultValue ={user?.email} />
                        <input className='form-control p-2 mt-3'name='phone' required placeholder='Mobile Number' />
                        <button className='customButton w-100 mt-4'> Submit </button>
                    </form>
                {/* main body  */}
            </Modal.Body>
      </Modal>
    );
};

export default ButtonModal;