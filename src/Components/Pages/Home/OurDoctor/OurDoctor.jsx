import React from 'react';
import Slider from "react-slick";
import {
  FaHeartbeat, FaTooth, FaBrain, FaUserMd,
  FaAngleLeft, FaAngleRight
} from "react-icons/fa";
import useFetch from '../../../../CustomHooks/useFetch';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

// Custom arrow components for react-slick
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
        width: "35px",
        height: "35px",
        right: "-20px",   // Half outside the container
        zIndex: 10,
        cursor: "pointer",
      }}
      onClick={onClick}
      aria-label="Next Slide"
    >
      <FaAngleRight className="text-white" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
        width: "35px",
        height: "35px",
        left: "-20px",    // Half outside the container
        zIndex: 10,
        cursor: "pointer",
      }}
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <FaAngleLeft className="text-white" />
    </div>
  );
};

const OurDoctor = () => {
  const { data, loading, error } = useFetch({ url: "doctor.json" });

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) return <p className="text-center text-lg text-blue-500">Loading doctors...</p>;
  if (error) return <p className="text-center text-lg text-red-500">Failed to load doctors.</p>;

  return (
    <div className="container relative px-5 lg:px-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-center my-15">Meet Our Specialist</h2>

      <Slider {...settings}>
        {data && data.map((doctor) => (
          <Link key={doctor.id} to={`/doctorDetails/${doctor.id}`}>
            <div key={doctor.id} className="px-3">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-500 hover:-translate-y-3">
                <img
                  src={doctor.img || doctor.image}
                  alt={doctor.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 text-center space-y-1">
                  <h3 className="text-xl font-semibold">{doctor.name}</h3>
                  <p className="text-green-600 font-medium">{doctor.specialist || doctor.specialty}</p>
                  <p className="text-sm text-gray-500">🩺 Experience: {doctor.experience}</p>
                  <p className="text-sm text-yellow-500">⭐ Rating: {doctor.rating || 'N/A'}</p>
                  <p className={`text-sm font-semibold ${doctor.available ? 'text-green-500' : 'text-red-500'}`}>
                    {doctor.available ? 'Available for Appointment' : 'Currently Unavailable'}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>

      {/* Specialist Card Section */}
      <div className='container hidden lg:block mx-auto px-20 absolute -top-25 left-1/2 z-20 transform -translate-x-1/2'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
          <div className="flex items-center gap-7 bg-gradient-to-r from-cyan-500 to-blue-400 py-6 px-6 rounded shadow-lg text-white">
            <div className="bg-white rounded-full p-3 shadow-md">
              <FaUserMd className="text-cyan-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold">General Physician</h3>
          </div>
          <div className="flex items-center gap-7 bg-gradient-to-r from-pink-300 to-red-300 py-6 px-6 rounded shadow-lg text-white">
            <div className="bg-white rounded-full p-3 shadow-md">
              <FaHeartbeat className="text-pink-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold">Cardiologist</h3>
          </div>
          <div className="flex items-center gap-7 bg-gradient-to-r from-green-300 to-teal-400 py-6 px-6 rounded shadow-lg text-white">
            <div className="bg-white rounded-full p-3 shadow-md">
              <FaTooth className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold">Dentist</h3>
          </div>
          <div className="flex items-center gap-7 bg-gradient-to-r from-purple-100 to-indigo-300 py-6 px-6 rounded shadow-lg text-white">
            <div className="bg-white rounded-full p-3 shadow-md">
              <FaBrain className="text-purple-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold">Neurologist</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDoctor;
