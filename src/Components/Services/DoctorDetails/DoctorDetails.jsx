import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../CustomHooks/useFetch';
import {
  FaStethoscope,
  FaUserMd,
  FaInfoCircle,
  FaBriefcase,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';

const DoctorDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch({ url: '/doctor.json' });

  if (loading) {
    return (
      <div className="text-center mt-10 text-blue-600 font-semibold">
        Loading doctor details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Error: {error}
      </div>
    );
  }

  const doctor = data?.find((doc) => String(doc.id) === id);

  if (!doctor) {
    return (
      <div className="text-center mt-10 text-gray-500">Doctor not found</div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-6 sm:p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          <img
            src={doctor.img}
            alt={doctor.name}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full border-4 border-blue-300 shadow-md object-cover"
          />
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 flex items-center justify-center md:justify-start gap-2">
              <FaUserMd className="text-blue-500" />
              {doctor.name}
            </h2>
            <p className="text-lg sm:text-xl text-blue-600 flex items-center justify-center md:justify-start gap-2">
              <FaStethoscope />
              {doctor.specialty}
            </p>

            <div className="text-gray-700 space-y-1 text-sm sm:text-base mt-2">
              <p>
                <span className="font-semibold">Degree:</span>{' '}
                {doctor.degree || 'MBBS, FCPS, MD'}
              </p>
              <p>
                <span className="font-semibold">Hospital:</span>{' '}
                {doctor.hospital || 'Apollo Hospital'}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href={`mailto:${doctor.email}`}
                  className="text-blue-500 underline"
                >
                  {doctor.email || 'doctor@email.com'}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mt-8 bg-white p-5 sm:p-6 rounded-xl shadow-inner border border-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <FaInfoCircle className="text-blue-400" />
            About Doctor
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {doctor.bio}
          </p>
        </div>

        {/* Extra Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
          {/* Experience */}
          <div className="bg-white p-5 rounded-xl border shadow-sm">
            <h4 className="text-base sm:text-lg font-semibold text-gray-700 flex items-center gap-2 mb-2">
              <FaBriefcase className="text-green-500" />
              Experience
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              {doctor.experience || '10+ years in the medical field.'}
            </p>
          </div>

          {/* Working Hours */}
          <div className="bg-white p-5 rounded-xl border shadow-sm">
            <h4 className="text-base sm:text-lg font-semibold text-gray-700 flex items-center gap-2 mb-2">
              <FaClock className="text-purple-500" />
              Working Hours
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              {doctor.workingHours || 'Mon - Fri : 9am - 5pm'}
            </p>
          </div>

          {/* Location */}
          <div className="bg-white p-5 rounded-xl border shadow-sm">
            <h4 className="text-base sm:text-lg font-semibold text-gray-700 flex items-center gap-2 mb-2">
              <FaMapMarkerAlt className="text-red-500" />
              Location
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              {doctor.location || 'Dhaka, Bangladesh'}
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-5 rounded-xl border shadow-sm">
            <h4 className="text-base sm:text-lg font-semibold text-gray-700 flex items-center gap-2 mb-2">
              <FaPhoneAlt className="text-yellow-500" />
              Contact Info
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              {doctor.phone || '+880123456789'}
            </p>
          </div>
        </div>

        {/* Book Appointment Button */}
        <div className="mt-10 text-center">
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg hover:bg-blue-700 transition-all duration-300">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
