import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container ,Row} from 'react-bootstrap';
import { useAuthState} from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/FirebaseInit';
import './CustomNav.css'

const CustomNavbar = () => {
    const [toggle,setToggle]= useState(false)
    const [user] = useAuthState(auth);
    const [admin,setAdmin]=useState(false)


    useEffect(()=>{
        fetch(`https://blooming-dusk-96529.herokuapp.com/user/${user?.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user?.email])


    const logout = () => {
        signOut(auth);
      };
    return (
        <Container className="navContainer" fluid>
            <Container>
            <Row>
                <div className='mainNav'>
                    <div>
                        <Link style={{textDecoration:"none",color:'black'}} to=''><b>Doctors Portal</b></Link>
                    </div>
                    <div  className={toggle ? 'MobileMenu activeNave' : 'MobileMenu'}>
                        <ul>
                            <li style={{listStyle:'none' }}><Link style={{textDecoration:"none",padding:'20px 0x'}} className='linkColor' to='/'>Home</Link></li>
                            <li style={{listStyle:'none' }}><Link style={{textDecoration:"none",padding:'20px 0x'}} className='linkColor' to='/about'>About</Link></li>
                            <li style={{listStyle:'none' }}><Link style={{textDecoration:"none",padding:'20px 0x'}} className='linkColor' to='/appointment'>Appointment</Link></li>
                            <li style={{listStyle:'none' }}><Link style={{textDecoration:"none",padding:'20px 0x'}} className='linkColor' to='/contactus'>ContactUs</Link></li>
                            { user?.email ? 
                            <li style={{listStyle:'none' }}><Link onClick={logout} style={{textDecoration:"none"}} className='linkColor' to=''>Logout</Link></li>
                            :
                            <li style={{listStyle:'none' }}><Link style={{textDecoration:"none"}} className='linkColor' to='/login'>Login</Link></li>
                            }
                            {user?.email && admin ? <li style={{listStyle:'none' }}><Link style={{textDecoration:"none"}} className='linkColor' to='/dashbord'>Dashbord</Link></li>:null}
                        </ul>
                    </div>
                    <div className='DesktopMenu'>
                        <ul>
                            <li className='list-inline-item' ><Link className='linkColor' style={{textDecoration:"none",padding:'20px 0x'}} to='/'>Home</Link></li>
                            <li className='list-inline-item' ><Link className='linkColor' style={{textDecoration:"none",padding:'20px 0x'}} to='/about'>About</Link></li>
                            <li className='list-inline-item' ><Link className='linkColor' style={{textDecoration:"none",padding:'20px 0x'}} to='/appointment'>Appointment</Link></li>
                            <li className='list-inline-item' ><Link className='linkColor' style={{textDecoration:"none",padding:'20px 0x'}} to='/contactus'>ContactUs</Link></li>
                            { user?.email ? 
                            <li className='list-inline-item' ><Link onClick={logout} className='linkColor' style={{textDecoration:"none"}} to=''>Logout</Link></li>
                            :
                            <li className='list-inline-item' ><Link className='linkColor' style={{textDecoration:"none"}} to='/login'>Login</Link></li>}
                            {user?.email && admin ? <li className='list-inline-item'><Link className='linkColor' style={{textDecoration:"none"}} to='/dashbord'>Dashbord</Link></li>: null}
                        </ul>
                    </div>
                    <div className='hamburger'>
                    <i className="fa-solid fa-bars" onClick={()=>setToggle(!toggle)}></i>
                    </div>
                </div>
            </Row>
        </Container>
        </Container>
    );
};

export default CustomNavbar;