import React from 'react';
import doctor from '../../../../assets/doctor.avif';
import {
  FaUserMd,
  FaHeartbeat,
  FaTooth,
  FaBrain,
  FaLungs,
  FaBaby,
} from 'react-icons/fa';

const specialists = [
  { id: 0, name: 'All', icon: <FaUserMd className="text-blue-500 text-xl" /> },
  { id: 1, name: 'Cardiologist', icon: <FaHeartbeat className="text-red-500 text-xl" /> },
  { id: 2, name: 'Dentist', icon: <FaTooth className="text-yellow-500 text-xl" /> },
  { id: 3, name: 'Neurologist', icon: <FaBrain className="text-purple-500 text-xl" /> },
  { id: 4, name: 'Pulmonologist', icon: <FaLungs className="text-blue-500 text-xl" /> },
  { id: 5, name: 'Pediatrician', icon: <FaBaby className="text-pink-500 text-xl" /> },
  { id: 6, name: 'General Physician', icon: <FaUserMd className="text-green-500 text-xl" /> },
];

const LeftSide = ({ selectedSpecialist, setSelectedSpecialist }) => {
  return (
    <div className="w-full lg:w-[25%]">

      {/* 🌐 Mobile View: Horizontal Scroll */}
      <div className="lg:hidden w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-2 py-1">
          {specialists.map((spec) => (
            <div
              key={spec.id}
              onClick={() => setSelectedSpecialist(spec.name)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-1 rounded-full border transition cursor-pointer ${
                selectedSpecialist === spec.name
                  ? 'bg-blue-100 border-blue-500 text-blue-600'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400'
              }`}
            >
              <div className="bg-gray-100 p-2 rounded-full">{spec.icon}</div>
              <span className="text-sm font-medium whitespace-nowrap">{spec.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 🖥️ Desktop View: Vertical Sidebar */}
      <div className="hidden lg:block p-4 border rounded-lg border-gray-200 bg-white shadow-sm h-fit">
        <h1 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">Specialist</h1>
        <div className="space-y-3">
          {specialists.map((spec) => (
            <div
              key={spec.id}
              className={`flex items-center gap-3 pl-2 py-2 rounded-lg cursor-pointer transition group border-l-4 ${
                selectedSpecialist === spec.name
                  ? 'bg-blue-50 border-blue-500'
                  : 'border-transparent hover:bg-blue-50 hover:border-blue-500'
              }`}
              onClick={() => setSelectedSpecialist(spec.name)}
            >
              <div className="bg-gray-100 p-2 rounded-full group-hover:bg-blue-100 transition">
                {spec.icon}
              </div>
              <span
                className={`text-gray-700 font-medium ${
                  selectedSpecialist === spec.name ? 'text-blue-600' : 'group-hover:text-blue-600'
                }`}
              >
                {spec.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <img src={doctor} alt="doctor" className="w-full rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
