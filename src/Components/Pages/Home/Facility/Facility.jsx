import React from 'react';
import { FaAmbulance, FaUserMd, FaHeartbeat, FaRegClock } from 'react-icons/fa';

const Facility = () => {
    const facilities = [
        {
            icon: <FaAmbulance className="text-4xl text-blue-600" />,
            title: 'Emergency Care',
            desc: 'Quick and responsive emergency services around the clock.'
        },
        {
            icon: <FaUserMd className="text-4xl text-blue-600" />,
            title: 'Qualified Doctors',
            desc: 'Team of certified and experienced medical professionals.'
        },
        {
            icon: <FaRegClock className="text-4xl text-blue-600" />,
            title: '24/7 Service',
            desc: 'Round-the-clock availability to serve patients at all times.'
        },
        {
            icon: <FaHeartbeat className="text-4xl text-blue-600" />,
            title: 'Advanced Equipment', 
            desc: 'Modern technology for accurate diagnosis and treatment.'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-20 pb-6 ">
            <h2 className="text-3xl font-bold text-center mb-10">Our Medical Facilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {facilities.map((facility, idx) => (
                    <div
                        key={idx}
                        className="bg-base-200 shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl border-b-2 border-green-500"
                    >
                        <div className="mb-4 ">{facility.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                        <p className="text-gray-600 text-sm">{facility.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Facility;
