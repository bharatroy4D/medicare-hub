import React from 'react';
import Banner from './Banner/Banner';
import Facility from './Facility/Facility';
import OurDoctor from './OurDoctor/OurDoctor';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facility></Facility>
            <OurDoctor></OurDoctor>
            <div className='flex gap-10 max-w-7xl px-20'>
                <LeftSide/>
                <RightSide/>
            </div>
        </div>
    );
};

export default Home;