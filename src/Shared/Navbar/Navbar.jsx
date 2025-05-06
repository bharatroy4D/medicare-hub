import React from 'react';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* parent container */}
            <div className='flex justify-between items-center max-w-7xl px-10 mx-auto py-3'>
                {/* medical icon and title */}
                <div className='flex gap-2 items-center'>
                    <FaHandHoldingMedical className='text-3xl text-blue-700' />
                    <span className='text-2xl font-bold'>Medicare</span>
                </div>

                {/* routing */}
                <div className='flex gap-8 font-semibold text-base items-center'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/about'>About Us</NavLink>
                    <NavLink to='/doctor'>Our Doctor</NavLink>
                    <NavLink to='/appointment'>Appointment</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
                {/* Book and appointment */}
                <div>
                    <button className='bg-blue-700 text-white px-6 py-2 rounded-md'>Book & Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;