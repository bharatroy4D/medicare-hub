import React from 'react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Ahmed Hossain',
    specialty: 'Cardiologist',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg',
    description: 'Expert in heart health and cardiovascular diseases.',
    experience: '15 years',
    contact: 'ahmed.hossain@example.com',
    phone: '+880 1234 567890',
  },
  {
    id: 2,
    name: 'Dr. Nazma Islam',
    specialty: 'Dentist',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfysXeccvHJHKrKuc1bamF-8olZmkqjQIRug&s',
    description: 'Specialist in dental care and oral hygiene.',
    experience: '10 years',
    contact: 'nazma.islam@example.com',
    phone: '+880 1234 567891',
  },
  {
    id: 3,
    name: 'Dr. Moinul Haque',
    specialty: 'Neurologist',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nn7ruXqffDFQBkn6Hg44oCp-n6Jl5rMd9ItLHQeuOxPdY4DzKKWBkAZizX5sR-lXTI0&usqp=CAU',
    description: 'Focused on disorders of the nervous system.',
    experience: '12 years',
    contact: 'moinul.haque@example.com',
    phone: '+880 1234 567892',
  },
  {
    id: 4,
    name: 'Dr. Fatema Akter',
    specialty: 'Pulmonologist',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtLM5I8UdP82KNEis3AQiVfIbgjM7YKYpo0mOJlWBaSAt2CuCr-79bQvaLl3_Etd7VH8&usqp=CAU',
    description: 'Experienced in treating respiratory system diseases.',
    experience: '8 years',
    contact: 'fatema.akter@example.com',
    phone: '+880 1234 567893',
  },
  {
    id: 5,
    name: 'Dr. Rezaul Karim',
    specialty: 'Pediatrician',
    image: 'https://t4.ftcdn.net/jpg/02/69/98/99/360_F_269989951_9Gf7PWaRtrpm2EochO3D5WVn22sFZbNZ.jpg',
    description: "Dedicated to children's health and wellness.",
    experience: '9 years',
    contact: 'rezaul.karim@example.com',
    phone: '+880 1234 567894',
  },
  {
    id: 6,
    name: 'Dr. Shirin Sultana',
    specialty: 'General Physician',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZFYmynDCDXKnRnoTJ6kL8-iZ620wEWHaEzkZx6RlnVZ3qxUGytfQjFAcjc6EO5eV05Q&usqp=CAU',
    description: 'Providing comprehensive general health care.',
    experience: '14 years',
    contact: 'shirin.sultana@example.com',
    phone: '+880 1234 567895',
  },
];

const Doctors = () => {
  return (
    <section className="py-16 bg-gray-50 relative top-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Doctors</h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 text-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-500 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{doctor.specialty}</p>
              <p className="text-sm text-gray-600 mb-2">{doctor.description}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Experience:</span> {doctor.experience}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Email:</span> <a href={`mailto:${doctor.contact}`} className="text-blue-500 hover:underline">{doctor.contact}</a></p>
              <p className="text-sm text-gray-600 mb-4"><span className="font-medium">Phone:</span> {doctor.phone}</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
