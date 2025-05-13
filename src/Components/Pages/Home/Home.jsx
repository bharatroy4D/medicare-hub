import React from 'react';
import Banner from './Banner/Banner';
import Facility from './Facility/Facility';
import OurDoctor from './OurDoctor/OurDoctor';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import Appointment from './Appointment/Appointment';
import Services from '../../Services/Services';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <OurDoctor></OurDoctor>
            <Facility></Facility>
            <div className='flex gap-10 p-5 lg:px-10 mx-auto py-12'>
                <LeftSide/>
                <RightSide/>
            </div>
            <Services></Services>
            <Appointment/>
        </div>
    );
};

export default Home;