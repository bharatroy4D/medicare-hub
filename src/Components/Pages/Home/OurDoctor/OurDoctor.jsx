import React from 'react';

const doctors = [
    {
        id: 1,
        name: 'Dr. Sarah Khan',
        specialty: 'Cardiologist',
        img: 'https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg'
    },
    {
        id: 2,
        name: 'Dr. Ayan Rahman',
        specialty: 'Orthopedic Surgeon',
        img: 'https://st4.depositphotos.com/1017986/21088/i/450/depositphotos_210888716-stock-photo-happy-doctor-with-clipboard-at.jpg'
    },
    {
        id: 3,
        name: 'Dr. Nusrat Jahan',
        specialty: 'Pediatrician',
        img: 'https://media.istockphoto.com/id/1473337705/photo/cheerful-female-doctor-in-white-uniform-holding-clipboard-stock-photo.jpg?s=612x612&w=0&k=20&c=VV0Jw6ipf7sNaTMdwlFtlAGqgU1OFBWe1IaxCsaGtBo='
    }
];

const OurDoctor = () => {
    return (
        <div className="max-w-7xl mx-auto px-20 py-12">
            <h2 className="text-3xl font-bold text-center mb-10">Meet Our Doctors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {doctors.map((doctor) => (
                    <div key={doctor.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-500 hover:-translate-y-3">
                        <img src={doctor.img} alt={doctor.name} className="w-full h-56 object-cover" />
                        <div className="p-5 text-center">
                            <h3 className="text-xl font-semibold">{doctor.name}</h3>
                            <p className="text-gray-600">{doctor.specialty}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurDoctor;
