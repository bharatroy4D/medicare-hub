
import React, { useState } from 'react';

import Banner from './Banner/Banner';
import Facility from './Facility/Facility';
import OurDoctor from './OurDoctor/OurDoctor';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import Services from '../../Services/Services';
// import Appointment from './Appointment/Appointment';
import OurTeam from './OurTeam/OurTeam';
import DoctorBlogs from './DoctorBlogs/DoctorBlogs';

const Home = () => {
    const [selectedSpecialist, setSelectedSpecialist] = useState('All');

    return (
        <div>
            <Banner></Banner>
            <OurDoctor></OurDoctor>
            <Facility></Facility>
            <div className="container flex flex-col lg:flex-row gap-8 p-5 lg:px-10 mx-auto py-12">
                <LeftSide
                    selectedSpecialist={selectedSpecialist}
                    setSelectedSpecialist={setSelectedSpecialist}
                />
                <RightSide selectedSpecialist={selectedSpecialist} />
            </div>
            
            <OurTeam></OurTeam>
            <Services></Services>
            <DoctorBlogs></DoctorBlogs>
            {/* <Appointment></Appointment> */}
        </div>
    );
};

export default Home;