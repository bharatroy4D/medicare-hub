import React from 'react';
import Marquee from "react-fast-marquee";

const doctors = [
    {
        id: 1,
        name: 'Dr. Ahmed Hossain',
        specialty: 'Cardiologist',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg',
    },
    {
        id: 2,
        name: 'Dr. Nazma Islam',
        specialty: 'Dentist',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfysXeccvHJHKrKuc1bamF-8olZmkqjQIRug&s',
    },
    {
        id: 3,
        name: 'Dr. Moinul Haque',
        specialty: 'Neurologist',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nn7ruXqffDFQBkn6Hg44oCp-n6Jl5rMd9ItLHQeuOxPdY4DzKKWBkAZizX5sR-lXTI0&usqp=CAU',
    },
    {
        id: 4,
        name: 'Dr. Fatema Akter',
        specialty: 'Pulmonologist',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtLM5I8UdP82KNEis3AQiVfIbgjM7YKYpo0mOJlWBaSAt2CuCr-79bQvaLl3_Etd7VH8&usqp=CAU',
    },
    {
        id: 5,
        name: 'Dr. Rezaul Karim',
        specialty: 'Pediatrician',
        image: 'https://t4.ftcdn.net/jpg/02/69/98/99/360_F_269989951_9Gf7PWaRtrpm2EochO3D5WVn22sFZbNZ.jpg',
    },
    {
        id: 6,
        name: 'Dr. Shirin Sultana',
        specialty: 'General Physician',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZFYmynDCDXKnRnoTJ6kL8-iZ620wEWHaEzkZx6RlnVZ3qxUGytfQjFAcjc6EO5eV05Q&usqp=CAU',
    },
];

const OurTeam = () => {
    return (
        <div className=" py-16 bg-gray-50">
            <div className='container  px-5 lg:px-10 py-10  mx-auto'>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Medical Team</h2>
                    <div className="flex flex-wrap justify-between gap-6  px-4 py-5 border border-gray-300 rounded ">
                        {doctors.map((doctor) => (

                            <div key={doctor.id} className="w-40 text-center">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-40 h-40 rounded-full transform hover:scale-110 duration-1000 object-cover border-4 border-white shadow-lg mx-auto"
                                />
                                <div className="mt-4">
                                    <p className="text-sm font-semibold text-gray-800">{doctor.name}</p>
                                    <p className="text-xs text-gray-500">{doctor.specialty}</p>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>

        </div>
    );
};

export default OurTeam;
