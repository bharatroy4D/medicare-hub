import React from 'react';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinkStyle = ({ isActive }) =>
        isActive
            ? 'text-yellow-300 border-b-2 border-yellow-300 pb-1'
            : 'hover:text-yellow-200 transition duration-200';

    return (
        <div>
            <div className='flex justify-between items-center bg-blue-700 max-w-7xl px-20 mx-auto py-4'>
                {/* Logo and Title */}
                <div className='flex gap-2 items-center'>
                    <FaHandHoldingMedical className='text-4xl text-green-500' />
                    <span className='text-3xl font-bold text-white'>Medicare</span>
                </div>

                {/* Navigation Links */}
                <div className='flex gap-6 font-semibold text-white items-center'>
                    <NavLink to='/' className={navLinkStyle}>Home</NavLink>
                    <NavLink to='/services' className={navLinkStyle}>Services</NavLink>
                    <NavLink to='/about' className={navLinkStyle}>About Us</NavLink>
                    <NavLink to='/doctor' className={navLinkStyle}>Our Doctor</NavLink>
                    <NavLink to='/appointment' className={navLinkStyle}>Appointment</NavLink>
                    <NavLink to='/contact' className={navLinkStyle}>Contact</NavLink>
                </div>

                {/* Appointment Button */}
                <div>
                    <button className='bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition'>
                         Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
