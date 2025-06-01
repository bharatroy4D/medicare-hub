import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaHeartbeat, FaTooth, FaBrain, FaLungs, FaBaby } from 'react-icons/fa';
import useFetch from '../../../../CustomHooks/useFetch';

const iconMap = {
  'General Physician': FaUserMd,
  'Cardiologist': FaHeartbeat,
  'Dentist': FaTooth,
  'Neurologist': FaBrain,
  'Pulmonologist': FaLungs,
  'Pediatrician': FaBaby,
};

const RightSide = ({ selectedSpecialist }) => {
  const { data, loading, error } = useFetch({ url: 'doctor.json' });

  if (loading) return <p className="text-center text-blue-500">Loading doctors...</p>;
  if (error) return <p className="text-center text-red-500">Failed to load doctors.</p>;

  // Filter and slice the data
  const filteredDoctors =
    selectedSpecialist === 'All'
      ? data?.slice(0, 8)
      : data?.filter((doc) => doc.specialist === selectedSpecialist).slice(0, 8);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-fit">
      {filteredDoctors.map((doctor, index) => {
        const Icon = iconMap[doctor.specialist] || FaUserMd;

        return (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:ring-2 hover:ring-blue-300"
          >
            <img
              src={doctor.image || doctor.img}
              alt={doctor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <Icon className="text-2xl text-blue-500 mx-auto mb-2" />
              <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{doctor.specialist}</p>
              <p className="text-sm text-gray-600">🩺 {doctor.experience}</p>
              <p className="text-sm text-gray-500">📍 {doctor.location}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default RightSide;
