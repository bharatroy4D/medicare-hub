import React from 'react';
import { FaAmbulance, FaUserMd, FaHeartbeat, FaRegClock } from 'react-icons/fa';

const Facility = () => {
  const facilities = [
    {
      id: 1,
      icon: <FaAmbulance className="text-white text-3xl" />,
      title: 'Emergency Care',
      desc: 'Quick and responsive emergency services around the clock.',
      bgColor: 'bg-red-500',
      availability: 'Available 24/7',
    },
    {
      id: 2,
      icon: <FaUserMd className="text-white text-3xl" />,
      title: 'Qualified Doctors',
      desc: 'Team of certified and experienced medical professionals.',
      bgColor: 'bg-blue-600',
      availability: 'Mon-Sat, 9am - 6pm',
    },
    {
      id: 3,
      icon: <FaRegClock className="text-white text-3xl" />,
      title: '24/7 Service',
      desc: 'Round-the-clock availability to serve patients at all times.',
      bgColor: 'bg-green-600',
      availability: 'Always Open',
    },
    {
      id: 4,
      icon: <FaHeartbeat className="text-white text-3xl" />,
      title: 'Advanced Equipment',
      desc: 'Modern technology for accurate diagnosis and treatment.',
      bgColor: 'bg-purple-600',
      availability: 'In Use 8am - 8pm',
    },
  ];

  return (
    <div className="container px-5 lg:px-10 my-5  mx-auto">
      <h2 className=" text-2xl lg:text-3xl font-bold text-center mb-5 lg:mb-10">Our Medical Facilities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilities.map((facility) => (
          <div
            key={facility.id}
            className="bg-base-200 shadow-md rounded-lg p-4 text-center transform transition duration-300 hover:-translate-y-1 hover:shadow-lg border-b-2 border-green-500"
          >
            <div
              className={`w-12 h-12 mx-auto flex items-center justify-center rounded-full mb-3 ${facility.bgColor}`}
            >
              {facility.icon}
            </div>
            <h3 className="text-lg font-semibold mb-1 truncate whitespace-nowrap">{facility.title}</h3>
            <p className="text-gray-600 text-sm mb-1 truncate">
              {facility.desc.length > 45 ? facility.desc.slice(0, 45) + '...' : facility.desc}
            </p>
            <p className="text-xs text-gray-500 italic">{facility.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facility;
