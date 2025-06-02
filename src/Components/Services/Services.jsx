import React from 'react';
import {
    FaStethoscope, FaXRay, FaSyringe, FaUserNurse, FaTooth,
    FaNotesMedical, FaBriefcaseMedical, FaLungs,
} from 'react-icons/fa';

const services = [
    {
        id: 1,
        icon: <FaStethoscope className="text-3xl text-blue-600" />,
        title: 'General Checkup',
        desc: 'Routine health examinations and preventive care for all ages.'
    },
    {
        id: 2,
        icon: <FaXRay className="text-3xl text-green-600" />,
        title: 'X-Ray Services',
        desc: 'Accurate imaging services to help with proper diagnosis.'
    },
    {
        id: 3,
        icon: <FaSyringe className="text-3xl text-red-500" />,
        title: 'Vaccination',
        desc: 'Comprehensive vaccination programs for children and adults.'
    },
    {
        id: 4,
        icon: <FaUserNurse className="text-3xl text-purple-600" />,
        title: 'Nursing Care',
        desc: '24/7 professional nursing support for all patients.'
    },
    {
        id: 5,
        icon: <FaTooth className="text-3xl text-yellow-600" />,
        title: 'Dental Care',
        desc: 'Full dental treatments including cleaning, extraction, and more.'
    },
    {
        id: 6,
        icon: <FaNotesMedical className="text-3xl text-pink-600" />,
        title: 'Medical Consultation',
        desc: 'Consult with our specialists to get the best treatment plans.'
    },
    {
        id: 7,
        icon: <FaBriefcaseMedical className="text-3xl text-indigo-600" />,
        title: 'Surgical Services',
        desc: 'Expert surgeons and safe procedures using modern techniques.'
    },
    {
        id: 8,
        icon: <FaLungs className="text-3xl text-cyan-600" />,
        title: 'Pulmonary Care',
        desc: 'Comprehensive care for lung and respiratory issues.'
    },
];

// Utility to slice description text
const sliceText = (text, length = 60) => {
    if (text.length <= length) return text;
    return text.slice(0, length) + '...';
};

const Services = () => {
    return (
        <div className='bg-gray-50 py-10 relative top-10'>
            <div className="container px-5 lg:px-10 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Our Doctor Services</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map(service => (
                        <div
                            key={service.id}
                            className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-2xl transition duration-300"
                        >
                            <div className="mb-4 flex justify-center">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 truncate">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{sliceText(service.desc, 40)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
