import React from 'react';
import Banner from './Banner/Banner';
import Facility from './Facility/Facility';
import OurDoctor from './OurDoctor/OurDoctor';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import Services from '../../Services/Services';
import Appointment from './Appointment/Appointment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurDoctor></OurDoctor>
            <Facility></Facility>
            <div className='container flex gap-10  p-5 lg:px-10 mx-auto py-12'>
                <LeftSide/>
                <RightSide/>
            </div>
            <Services></Services>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;