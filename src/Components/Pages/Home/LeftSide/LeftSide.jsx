import React from 'react';
import { FaUserMd, FaHeartbeat, FaTooth, FaBrain, FaLungs, FaBaby } from 'react-icons/fa';

const doctors = [
    {
        id: 1,
        specialist: 'Cardiologist',
        icon: <FaHeartbeat className="text-red-500 text-xl" />,
    },
    {
        id: 2,
        specialist: 'Dentist',
        icon: <FaTooth className="text-yellow-500 text-xl" />,
    },
    {
        id: 3,
        specialist: 'Neurologist',
        icon: <FaBrain className="text-purple-500 text-xl" />,
    },
    {
        id: 4,
        specialist: 'Pulmonologist',
        icon: <FaLungs className="text-blue-500 text-xl" />,
    },
    {
        id: 5,
        specialist: 'Pediatrician',
        icon: <FaBaby className="text-pink-500 text-xl" />,
    },
    {
        id: 6,
        specialist: 'General Physician',
        icon: <FaUserMd className="text-green-500 text-xl" />,
    },
];

const LeftSide = () => {
    return (
        <div className="p-4 border rounded-lg border-gray-200 bg-white shadow-sm w[30%] h-fit">
            <h1 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Specialist</h1>
            <div className="space-y-3">
                {doctors.map((doc) => (
                    <div
                        key={doc.id}
                        className="flex items-center gap-3 pl-2 py-2 rounded-lg cursor-pointer hover:bg-blue-50 transition group border-l-4 border-transparent hover:border-blue-500"
                    >
                        <div className="bg-gray-100 p-2 rounded-full group-hover:bg-blue-100 transition">
                            {doc.icon}
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-blue-600">
                            {doc.specialist}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeftSide;
