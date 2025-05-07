import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone, FaStethoscope } from 'react-icons/fa';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
        date: '',
        time: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Appointment Request Submitted!');
    };

    return (
        <div className="max-w-3xl mx-auto mt-12 bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
                Book Your Appointment
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3 border rounded-lg px-4 py-2 shadow-sm">
                        <FaUser className="text-blue-500" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="w-full outline-none"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex items-center gap-3 border rounded-lg px-4 py-2 shadow-sm">
                        <FaEnvelope className="text-blue-500" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full outline-none"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex items-center gap-3 border rounded-lg px-4 py-2 shadow-sm">
                        <FaPhone className="text-blue-500" />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="w-full outline-none"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex items-center gap-3 border rounded-lg px-4 py-2 shadow-sm">
                        <FaStethoscope className="text-blue-500" />
                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="w-full outline-none bg-white"
                            required
                        >
                            <option value="">Select Department</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Dentistry">Dentistry</option>
                            <option value="Neurology">Neurology</option>
                            <option value="Pediatrics">Pediatrics</option>
                            <option value="Pulmonology">Pulmonology</option>
                            <option value="General">General Physician</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-3 border rounded-lg px-4 py-2 shadow-sm">
                        <FaCalendarAlt className="text-blue-500" />
                        <input
                            type="date"
                            name="date"
                            className="w-full outline-none"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex items-center gap-3 border rounded-lg px-4 py-2 shadow-sm">
                        <FaClock className="text-blue-500" />
                        <input
                            type="time"
                            name="time"
                            className="w-full outline-none"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <textarea
                    name="message"
                    rows="4"
                    placeholder="Additional Message (Optional)"
                    className="w-full border rounded-lg px-4 py-3 shadow-sm outline-none"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Confirm Appointment
                </button>
            </form>
        </div>
    );
};

export default AppointmentForm;

