import React from 'react';
import { FaUserMd } from "react-icons/fa";
import { GiStethoscope, GiTooth } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";

const doctors = [
    {
        id: 1,
        name: 'Dr. Sarah Khan',
        specialty: 'Cardiologist',
        experience: '12 years',
        location: 'Dhaka Medical Center',
        rating: 4.8,
        available: true,
        img: 'https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg'
    },
    {
        id: 2,
        name: 'Dr. Ayan Rahman',
        specialty: 'Orthopedic Surgeon',
        experience: '9 years',
        location: 'Apollo Hospital',
        rating: 4.6,
        available: true,
        img: 'https://st4.depositphotos.com/1017986/21088/i/450/depositphotos_210888716-stock-photo-happy-doctor-with-clipboard-at.jpg'
    },
    {
        id: 3,
        name: 'Dr. Nusrat Jahan',
        specialty: 'Pediatrician',
        experience: '7 years',
        location: 'Green Life Hospital',
        rating: 4.9,
        available: false,
        img: 'https://media.istockphoto.com/id/1473337705/photo/cheerful-female-doctor-in-white-uniform-holding-clipboard-stock-photo.jpg?s=612x612&w=0&k=20&c=VV0Jw6ipf7sNaTMdwlFtlAGqgU1OFBWe1IaxCsaGtBo='
    },
    {
        id: 4,
        name: 'Dr. Mahfuz Hasan',
        specialty: 'Dermatologist',
        experience: '10 years',
        location: 'Square Hospital',
        rating: 4.7,
        available: true,
        img: 'https://img.freepik.com/premium-photo/handsome-happy-doctor-with-crossed-arms-isolated-white_53419-5238.jpg'
    },
];

const OurDoctor = () => {
    return (
        <div className="container relative px-5 lg:px-10 py-10 mx-auto">
            <h2 className="text-3xl font-bold text-center my-15">Meet Our Doctors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {doctors.map((doctor) => (
                    <div key={doctor.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-500 hover:-translate-y-3">
                        <img src={doctor.img} alt={doctor.name} className="w-full h-56 object-cover" />
                        <div className="p-5 text-center space-y-1">
                            <h3 className="text-xl font-semibold">{doctor.name}</h3>
                            <p className="text-green-600 font-medium">{doctor.specialty}</p>
                            <p className="text-sm text-gray-500">📍 {doctor.location}</p>
                            <p className="text-sm text-gray-500">🩺 Experience: {doctor.experience}</p>
                            <p className="text-sm text-yellow-500">⭐ Rating: {doctor.rating}</p>
                            <p className={`text-sm font-semibold ${doctor.available ? 'text-green-500' : 'text-red-500'}`}>
                                {doctor.available ? 'Available for Appointment' : 'Currently Unavailable'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='container hidden lg:block mx-auto px-20 absolute -top-25 left-1/2 z-20 transform -translate-x-1/2'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
                    {/* Card 1 */}
                    <div className="flex  items-center gap-7 bg-gradient-to-r from-cyan-500 to-blue-400 py-6 px-6 rounded shadow-lg hover:shadow-2xl transition duration-300 text-white">
                        <div className="bg-white rounded-full p-3 shadow-md">
                            <FaUserMd className="text-cyan-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold">General Physician</h3>
                    </div>
                    {/* Card 2 */}
                    <div className="flex  items-center gap-7 bg-gradient-to-r from-pink-300 to-red-300 py-6 px-6 rounded shadow-lg hover:shadow-2xl transition duration-300 text-white">
                        <div className="bg-white rounded-full p-3 shadow-md">
                            <GiStethoscope className="text-pink-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold">Cardiologist</h3>
                    </div>

                    {/* Card 3 */}
                    <div className="flex  items-center gap-7 bg-gradient-to-r from-green-300 to-teal-400 py-6 px-6 rounded shadow-lg hover:shadow-2xl transition duration-300 text-white">
                        <div className="bg-white rounded-full p-3 shadow-md">
                            <GiTooth className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold">Dentist</h3>
                    </div>

                    {/* Card 4 */}
                    <div className="flex  items-center gap-7 bg-gradient-to-r from-purple-100 to-indigo-300 py-6 px-6 rounded shadow-lg hover:shadow-2xl transition duration-300 text-white">
                        <div className="bg-white rounded-full p-3 shadow-md">
                            <MdLocalHospital className="text-purple-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold">Surgeon</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurDoctor;
