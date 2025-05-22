import React, { useState } from 'react';
import { FaStethoscope, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

                {/* Desktop Navigation */}
                <nav className='hidden md:flex gap-6 font-medium text-gray-700'>
                    <NavLink to='/' className={navLinkStyle}>Home</NavLink>
                    <NavLink to='/services' className={navLinkStyle}>Services</NavLink>
                    <NavLink to='/about' className={navLinkStyle}>About</NavLink>
                    <NavLink to='/doctors' className={navLinkStyle}>Doctors</NavLink>
                    <NavLink to='/appointment' className={navLinkStyle}>Appointment</NavLink>
                    <NavLink to='/contact' className={navLinkStyle}>Contact</NavLink>
                </nav>

                {/* Appointment Button - Desktop */}
                <div className='hidden md:block'>
                    <button className='bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-md transition'>
                        Appointment
                    </button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className='md:hidden'>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className='text-2xl text-gray-800 focus:outline-none'
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className='md:hidden bg-white px-4 py-4 shadow-lg'>
                    <nav className='flex flex-col gap-4 font-medium text-gray-700'>
                        <NavLink to='/' onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyle}>Home</NavLink>
                        <NavLink to='/services' onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyle}>Services</NavLink>
                        <NavLink to='/about' onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyle}>About</NavLink>
                        <NavLink to='/doctors' onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyle}>Doctors</NavLink>
                        <NavLink to='/appointment' onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyle}>Appointment</NavLink>
                        <NavLink to='/contact' onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyle}>Contact</NavLink>
                        <button className='bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md transition'>
                            Appointment
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
