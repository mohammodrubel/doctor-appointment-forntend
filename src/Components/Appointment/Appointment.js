import React, { useState } from 'react';
import CustomNavbar from '../Home/CustomNavbar/CustomNavbar'
import Footer from '../Home/Footer/Footer';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import chair from '../img/images/chair.png'
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';


const Appointment = () => {
    const [date, setDate] =useState(new Date())
    return (
        <>
            <CustomNavbar/>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer />
        </>
    );
};

export default Appointment;