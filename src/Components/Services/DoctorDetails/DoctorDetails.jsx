import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../CustomHooks/useFetch';
import { FaStethoscope, FaUserMd, FaInfoCircle, FaBriefcase, FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const DoctorDetails = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch({ url: '/doctor.json' });

    if (loading) {
        return <div className="text-center mt-10 text-blue-600 font-semibold">Loading doctor details...</div>;
    }

    if (error) {
        return <div className="text-center mt-10 text-red-600 font-semibold">Error: {error}</div>;
    }

    const doctor = data?.find(doc => String(doc.id) === id);

    if (!doctor) {
        return <div className="text-center mt-10 text-gray-500">Doctor not found</div>;
    }

    return (
        <div className="max-w-5xl mx-auto mt-20 mb-10 p-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="w-52 h-52 rounded-full border-4 border-blue-300 shadow-md object-cover"
                />
                <div className="text-center md:text-left space-y-2">
                    <h2 className="text-4xl font-extrabold text-gray-800 flex items-center gap-2">
                        <FaUserMd className="text-blue-500" />
                        {doctor.name}
                    </h2>
                    <p className="text-xl text-blue-600 flex items-center gap-2">
                        <FaStethoscope />
                        {doctor.specialty}
                    </p>

                    {/* Additional Info */}
                    <div className="text-gray-700 space-y-1 text-sm md:text-base">
                        <p><span className="font-semibold">Degree:</span> {doctor.degree || 'MBBS, FCPS, MD'}</p>
                        <p><span className="font-semibold">Hospital:</span> {doctor.hospital || 'Apollo Hospital'}</p>
                        <p><span className="font-semibold">Email:</span> <a href={`mailto:${doctor.email}`} className="text-blue-500 underline">{doctor.email || 'doctor@email.com'}</a></p>
                    </div>
                </div>
            </div>
            {/* About Doctor */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-inner border border-blue-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FaInfoCircle className="text-blue-400" />
                    About Doctor
                </h3>
                <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
            </div>

            {/* Extra Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* Experience */}
                <div className="bg-white p-5 rounded-xl border shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2 mb-2">
                        <FaBriefcase className="text-green-500" />
                        Experience
                    </h4>
                    <p className="text-gray-600">{doctor.experience || "10+ years in the medical field."}</p>
                </div>

                {/* Working Hours */}
                <div className="bg-white p-5 rounded-xl border shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2 mb-2">
                        <FaClock className="text-purple-500" />
                        Working Hours
                    </h4>
                    <p className="text-gray-600">{doctor.workingHours || "Mon - Fri : 9am - 5pm"}</p>
                </div>

                {/* Location */}
                <div className="bg-white p-5 rounded-xl border shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2 mb-2">
                        <FaMapMarkerAlt className="text-red-500" />
                        Location
                    </h4>
                    <p className="text-gray-600">{doctor.location || "Dhaka, Bangladesh"}</p>
                </div>

                {/* Contact */}
                <div className="bg-white p-5 rounded-xl border shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2 mb-2">
                        <FaPhoneAlt className="text-yellow-500" />
                        Contact Info
                    </h4>
                    <p className="text-gray-600">{doctor.phone || "+880123456789"}</p>
                </div>
            </div>

            {/* Book Button */}
            <div className="mt-10 text-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300">
                    Book Appointment
                </button>
            </div>
        </div>
    );
};

export default DoctorDetails;
