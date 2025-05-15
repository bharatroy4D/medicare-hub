import React from 'react';
import { FaStethoscope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinkStyle = ({ isActive }) =>
        isActive
            ? 'text-green-500 border-b-2 border-green-500 pb-1'
            : 'hover:text-green-400 transition duration-200';

    return (
        <header className='bg-white shadow-md fixed top-0 left-0 w-full z-50'>
            <div className='container mx-auto px-4 lg:px-10 py-3 flex justify-between items-center'>
                {/* Logo */}
                <div className='flex items-center gap-2'>
                    <FaStethoscope className='text-3xl text-green-600' />
                    <span className='text-2xl font-bold text-gray-800'>DoctorCare</span>
                </div>

                {/* Navigation */}
                <nav className='hidden md:flex gap-6  font-medium text-gray-700'>
                    <NavLink to='/' className={navLinkStyle}>Home</NavLink>
                    <NavLink to='/services' className={navLinkStyle}>Services</NavLink>
                    <NavLink to='/about' className={navLinkStyle}>About</NavLink>
                    <NavLink to='/doctors' className={navLinkStyle}>Doctors</NavLink>
                    <NavLink to='/appointment' className={navLinkStyle}>Appointment</NavLink>
                    <NavLink to='/contact' className={navLinkStyle}>Contact</NavLink>
                </nav>

                {/* Button */}
                <div>
                    <button className='bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-md transition'>
                        Appointment
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
