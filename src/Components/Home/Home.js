import React from 'react';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import CustomNavbar from './CustomNavbar/CustomNavbar';
import DoctorBanner from './DoctorBanner/DoctorBanner';
import Footer from './Footer/Footer';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <CustomNavbar></CustomNavbar>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DoctorBanner></DoctorBanner>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;