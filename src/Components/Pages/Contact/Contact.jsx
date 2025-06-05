import React from "react";

const Contact = () => {
  return (
    <section className="container relative top-10 bg-white py-6 lg:py-12 px-5 md:px-10 mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-blue-900 mb-4 lg:mb-10">Contact Us</h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-3 lg:space-y-6 text-gray-700">
            <h3 className=" text-xl lg:text-2xl text-center lg:text-start font-semibold text-blue-800">Clinic Information</h3>
            <p>
              Our friendly team is here to help you with appointments, inquiries, and medical support.
            </p>
            <div>
              <p className="font-medium text-gray-800">📍 Address:</p>
              <p>123 Health Street, MedCity, USA</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">📞 Phone:</p>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">✉️ Email:</p>
              <p>contact@medicareclinic.com</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">🕐 Hours:</p>
              <p>Mon–Fri: 9am – 6pm</p>
              <p>Sat: 10am – 2pm | Sun: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form className="bg-blue-50 p-6 rounded-xl shadow-md space-y-4">
              <div>
                <label className="block mb-1 text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Message</label>
                <textarea
                  rows="5"
                  placeholder="Your message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
