import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Heart Health',
    author: 'Dr. Ahmed Hossain',
    specialty: 'Cardiologist',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg',
    date: 'May 10, 2025',
    excerpt: 'Learn about the importance of maintaining heart health and tips to keep your heart in top condition.',
  },
  {
    id: 2,
    title: 'Dental Hygiene Best Practices',
    author: 'Dr. Nazma Islam',
    specialty: 'Dentist',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfysXeccvHJHKrKuc1bamF-8olZmkqjQIRug&s',
    date: 'May 8, 2025',
    excerpt: 'Discover the best practices for maintaining dental hygiene and preventing common oral issues.',
  },
  {
    id: 3,
    title: 'Advancements in Neurology',
    author: 'Dr. Moinul Haque',
    specialty: 'Neurologist',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nn7ruXqffDFQBkn6Hg44oCp-n6Jl5rMd9ItLHQeuOxPdY4DzKKWBkAZizX5sR-lXTI0&usqp=CAU',
    date: 'May 5, 2025',
    excerpt: 'Explore the latest advancements in neurology and what they mean for patient care.',
  },
  {
    id: 4,
    title: 'Pulmonary Health Insights',
    author: 'Dr. Fatema Akter',
    specialty: 'Pulmonologist',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtLM5I8UdP82KNEis3AQiVfIbgjM7YKYpo0mOJlWBaSAt2CuCr-79bQvaLl3_Etd7VH8&usqp=CAU',
    date: 'May 3, 2025',
    excerpt: 'An in-depth look into maintaining healthy lungs and preventing respiratory diseases.',
  },
  {
    id: 5,
    title: 'Child Health and Nutrition',
    author: 'Dr. Rezaul Karim',
    specialty: 'Pediatrician',
    image: 'https://t4.ftcdn.net/jpg/02/69/98/99/360_F_269989951_9Gf7PWaRtrpm2EochO3D5WVn22sFZbNZ.jpg',
    date: 'May 1, 2025',
    excerpt: 'Tips and guidelines for ensuring optimal health and nutrition for children.',
  },
  {
    id: 6,
    title: 'General Health Checkups',
    author: 'Dr. Shirin Sultana',
    specialty: 'General Physician',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZFYmynDCDXKnRnoTJ6kL8-iZ620wEWHaEzkZx6RlnVZ3qxUGytfQjFAcjc6EO5eV05Q&usqp=CAU',
    date: 'April 28, 2025',
    excerpt: 'The importance of regular health checkups and what to expect during a general examination.',
  },
];

const DoctorBlogs = () => {
  return (
    <section className=" py-6 lg:py-12 lg:mt-10 bg-gray-50">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6 lg:mb-10">Doctor Blogs</h2>
      <div className="container mx-auto grid gap-5 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-10">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={post.image}
                  alt={post.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                />
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-800">{post.author}</p>
                  <p className="text-xs text-gray-500">{post.specialty}</p>
                </div>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-xs text-gray-400">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorBlogs;
