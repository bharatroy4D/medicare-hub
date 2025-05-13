import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaHeartbeat, FaTooth, FaBrain, FaLungs, FaBaby } from 'react-icons/fa';

const doctorsData = [
    {
        id: 1,
        name: 'Dr. Ahmed Hossain',
        specialist: 'Cardiologist',
        icon: FaHeartbeat,
        image: 'https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg',
        experience: '10 Years',
        location: 'Dhaka, Bangladesh',
    },
    {
        id: 2,
        name: 'Dr. Nazma Islam',
        specialist: 'Dentist',
        icon: FaTooth,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfysXeccvHJHKrKuc1bamF-8olZmkqjQIRug&s',
        experience: '6 Years',
        location: 'Chattogram, Bangladesh',
    },
    {
        id: 3,
        name: 'Dr. Moinul Haque',
        specialist: 'Neurologist',
        icon: FaBrain,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nn7ruXqffDFQBkn6Hg44oCp-n6Jl5rMd9ItLHQeuOxPdY4DzKKWBkAZizX5sR-lXTI0&usqp=CAU',
        experience: '12 Years',
        location: 'Sylhet, Bangladesh',
    },
    {
        id: 4,
        name: 'Dr. Fatema Akter',
        specialist: 'Pulmonologist',
        icon: FaLungs,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtLM5I8UdP82KNEis3AQiVfIbgjM7YKYpo0mOJlWBaSAt2CuCr-79bQvaLl3_Etd7VH8&usqp=CAU',
        experience: '8 Years',
        location: 'Rajshahi, Bangladesh',
    },
    {
        id: 5,
        name: 'Dr. Rezaul Karim',
        specialist: 'Pediatrician',
        icon: FaBaby,
        image: 'https://t4.ftcdn.net/jpg/02/69/98/99/360_F_269989951_9Gf7PWaRtrpm2EochO3D5WVn22sFZbNZ.jpg',
        experience: '5 Years',
        location: 'Khulna, Bangladesh',
    },
    {
        id: 6,
        name: 'Dr. Shirin Sultana',
        specialist: 'General Physician',
        icon: FaUserMd,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZFYmynDCDXKnRnoTJ6kL8-iZ620wEWHaEzkZx6RlnVZ3qxUGytfQjFAcjc6EO5eV05Q&usqp=CAU',
        experience: '7 Years',
        location: 'Barisal, Bangladesh',
    },
  
];

const RightSide = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {doctorsData.map((doctor, index) => {
                const Icon = doctor.icon;
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
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 text-center">
                            <Icon className="text-2xl text-blue-500 mx-auto mb-2" />
                            <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                            <p className="text-sm text-blue-600 font-medium">{doctor.specialist}</p>
                            <p className="text-sm text-gray-600">{doctor.experience}</p>
                            <p className="text-sm text-gray-500">{doctor.location}</p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default RightSide;
